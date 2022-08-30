import i18next from 'i18next';
import Logo from '../../assets/img/logo.png';
import { BsFacebook,BsInstagram} from "react-icons/bs";
import { withTranslation } from 'react-i18next';

const FooterText = () => {
    return (
        <footer className="footer">
            <div className="container">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <div className="footer-logo">
                    <a className="navbar-brand" href="index.html">
                      <img height="45" src={Logo} />
                    </a>
                    <div className="footer-ic">
                      <a href=""><BsFacebook/></a>
                      <a href=""><BsInstagram/></a>
                    </div>
                  </div>
                  <ul className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item active"><a className="nav-link" href="#">ORGANIZERS</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">ABOUT</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">CAREERS</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">PRIVACY</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">TERMS </a></li>
                    <li className="nav-item"><a className="nav-link" href="#">SUPPORT</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </footer>
    );
}

export default withTranslation()(FooterText);