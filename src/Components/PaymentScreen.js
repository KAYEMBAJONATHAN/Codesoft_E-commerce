import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentScreen = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (result.error) {
      setError(result.error.message);
    } else {
      console.log('Payment successful. Proceed to order confirmation.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        {error && <div className="error">{error}</div>}
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default PaymentScreen;
