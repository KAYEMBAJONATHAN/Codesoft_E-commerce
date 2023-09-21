import '../Style/sideDraw.css';
import { Link } from 'react-router-dom';

const SideDraw = ({show, click}) => {
    const sideDrawClass = ["sidedraw"]

    if(show) {
        sideDrawClass.push("show")
    }

    return <div className={sideDrawClass.join(" ")}>
        <ul className="sidedraw-links" onClick={click}>
           <li>
              <Link to="/">
                <i className="fas fa-shopping-cart"></i>
                <span>
                    Cart <span className="sidedraw-cartbadge">0</span>
                </span>
              </Link>
           </li>
           <li>
             <Link to="/">Shop</Link>
           </li>
        </ul>
    </div>
}

export default SideDraw;