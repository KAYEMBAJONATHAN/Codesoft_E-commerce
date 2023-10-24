import '../Style/backDrop.css';

const BackDrop = ({ show, click }) => (show && <div className="backdrop" onClick={click} />
);
export default BackDrop;
