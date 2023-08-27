import brand from '../assets/images/111-1118804_android-food-delivery-apps-removebg-preview.png';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning p-0">
            <div className="container-fluid">
                <img src={brand} alt="logo" width="100px"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
                    <ul className="navbar-nav" style={{gap:"20px"}}>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart" tabIndex="-1" aria-disabled="true">Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;