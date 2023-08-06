import brand from '../assets/images/111-1118804_android-food-delivery-apps-removebg-preview.png'

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
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Cart</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;