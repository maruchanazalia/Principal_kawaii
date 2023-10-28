import '../css/navbarRosa.css';

export default function Navbar() {
    return (
        <div className="navbar-pink">
            <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                <div  className="datos">
                    <a className="text-white pr-3" href="">FAQs        </a>
                    <span className="text-white">|</span>
                    <a className="text-white px-3" href="">     Help      </a>
                    <span className="text-white">|</span>
                    <a className="text-white pl-3" href="">     Support      </a>
                </div>
            </div>
            <div className="col-md-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                <div class='iconos'>
                <a href='#'>
                        <i aria-hidden='true' class='fa fa-twitter text-white'></i></a>
                        <a href='#'><i aria-hidden='true' class='fa fa-facebook text-white'></i></a>
                        <a href='#'><i aria-hidden='true' class='fa fa-instagram text-white'></i></a>
                        <a href='#'><i aria-hidden='true' class='fa fa-pinterest-p text-white'></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

