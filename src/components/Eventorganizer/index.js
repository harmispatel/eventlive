import React, { Fragment,Component,} from "react";
import Logo from '../../assets/img/logo.png';
import OrganizerLogo from '../../assets/img/organizer-logo.png';
import bannerlogo from '../../assets/img/organizer-logo.png';
import comingevent1 from '../../assets/img/comingevent1.png';
import { withTranslation } from 'react-i18next';
import Auth from "../../services/Auth";
import { useNavigate } from "react-router-dom";
import { FaInstagramSquare,FaFacebook } from "react-icons/fa";
import { BsPlusLg,BsFillEnvelopeFill,BsFillKeyFill,BsFacebook,BsInstagram,BsChevronRight,BsFillPersonFill,BsTwitter} from "react-icons/bs";
import Iframemap from './iframemap'
import FooterText from '../Common/Footer';

class MyComponent extends Component {
  
  constructor(props) {
    super(props);
   
    this.state = {
      
    };
  }

  render() {
    const { t } = this.props;

    return (
      <Fragment>
          <header id="header" className="header">
            <div className="container-fluid">
              <div className="header-menu">
                <a className="navbar-brand" href="#">
                  <img height="45" src={OrganizerLogo} />
                </a>
                <ul className="nav-menu-item">
                  <li className="nav-item"><a className="nav-link" href="/login" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Login</a></li>
                </ul>
              </div>
            </div>
          </header>
          <section className="organizer_banner">
            <img src={bannerlogo} className="banner-logo"/>
          </section>
          <section className="event-oganizer">
            <div className="oganizer-event-inr">
                <div className="sec-title">
                  <h2>UPCOMING EVENTS</h2>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 mb-4">
                    <a href="#" className="event-item">
                      <div className="event-img">
                        <img src={comingevent1} className="w-100"/>
                        <div className="event-loc-info">
                          <h3>Gasparilla Music Festival</h3>
                          <span>April 23 - 25</span>
                        </div>
                        <h3 className="event-price">$35</h3>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <a href="#" className="event-item">
                      <div className="event-img">
                        <img src={comingevent1} className="w-100"/>
                        <div className="event-loc-info">
                          <h3>Gasparilla Music Festival</h3>
                          <span>April 23 - 25</span>
                        </div>
                        <h3 className="event-price">$35</h3>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <a href="#" className="event-item">
                      <div className="event-img">
                        <img src={comingevent1} className="w-100"/>
                        <div className="event-loc-info">
                          <h3>Gasparilla Music Festival</h3>
                          <span>April 23 - 25</span>
                        </div>
                        <h3 className="event-price">$35</h3>
                      </div>
                    </a>
                  </div>
                </div>
            </div>
            <div className="event-desscripation">
              <div className="sec-title">
                <h2>DESCRIPATION</h2>
              </div>
              <div className="event-des-info">
                <p>The Gasparilla Music Foundation is a Florida 501(c)-3 non-profit corporation that organizes an annual music festival in Downtown Tampa and supports music education through its Recycled Tunes program.</p>
                <p>The 2022 festival takes place in Curtis Hixon Waterfront Park and Kiley Gardens Park on February 25-27, featuring musical acts from a wide variety of genres on several stages and cuisine from the region’s top restaurants. As part of its mission to support and promote music and education, the organization is involved throughout the year in several initiatives including providing scholarships and instruments to music students.</p>
                <p>Learn more at : <a href="#">www.gasparillamusic.com</a></p>
              </div>
            </div>
            <div className="event-location">
              <div className="sec-title">
                <h2>LOCATION</h2>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="event-location-info">
                    <div className="event-location-info-inr">
                      <h3>Venue</h3>
                      <p>Curtis Hixon Waterfront Park</p>
                    </div>
                    <div className="event-location-info-inr">
                      <h3>Venue Address</h3>
                      <p>600 Ashley Drive <br/>Tampa, FL 33606</p>
                      <button className="btn">OPEN IN MAPS</button>
                    </div>
                    <div className="event-location-info-inr">
                      <h3>Venue Contact</h3>
                      <p>Phone: 813.555.0123</p>
                      <p>Email: info@cityoftampa.com</p>
                      <p>Website: </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 offset-lg-2">
                  <div className="event-loc-map">
                      <Iframemap />
                  </div>
                </div>
                
              </div>
            </div>
            <div className="event-contact">
              <div className="sec-title">
                <h2>CONTACT</h2>
              </div>
              <div className="event-contact-info">
                <h3>Organizer</h3>
                <span>Gasparilla Music Foundation</span>
                <p>info@cityoftampa.com</p>
                <span>Website</span>
              </div>
              <div className="event-contact-info">
                <h3>Support</h3>
                <p>support@eventliveus.com</p>
                <span>Website</span>
              </div>
            </div>
          </section>
          
          <FooterText/>

          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div className="modal-inr">
                  <h2>Log in</h2>
                  <div className="login-detail">
                    <div className="fb-login">
                      <a href="#">Log in with Facebook  <BsChevronRight/></a>
                    </div>
                    <div className="signup">
                      <a href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Sign up Via Email <BsChevronRight/></a>
                      
                    </div>
                    <div className="login-detail-inr">
                      <h2>Or Log in with your email</h2>
                      <form>
                        <div className="position-relative">
                          <input type="email" className="form-control" name="enmail" id="exampleInputEmail1" placeholder="email"/>
                          <BsFillEnvelopeFill  className="input-ic"/>
                        </div>
                        <div className="position-relative">
                          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password"/>
                          <BsFillKeyFill  className="input-ic"/>
                        </div>
                        <button className="btn lg-bt">Lon In <BsChevronRight/></button>
                        <div className="text-end">
                          <a className="signed-bt">Forgot Password?</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div className="modal-inr">
                  <h2>Sign Up</h2>
                  <div className="login-detail">
                    <div className="signup-detail-inr">
                      <form>
                        <div className="position-relative">
                          <input type="text" className="form-control" name="first-name" id="firstname" placeholder="First Name"/>
                          <BsFillPersonFill className="input-ic"/>
                        </div>
                        <div className="position-relative">
                          <input type="text" className="form-control" name="last-name" id="lastname" placeholder="last Name"/>
                          <BsFillPersonFill className="input-ic"/> 
                        </div>
                        <div className="position-relative">
                          <input type="text" className="form-control" name="email" id="email" placeholder="Email"/>
                          < BsFillEnvelopeFill className="input-ic"/> 
                        </div>
                        <div className="position-relative">
                          <input type="text" className="form-control" name="confirm-email" id="InputEmail" placeholder="confirm-email your e-mail"/>
                          < BsFillEnvelopeFill className="input-ic"/> 
                        </div>
                        <div className="position-relative">
                          <input type="password" className="form-control" name="password" id="exampleInputpassword" placeholder="password"/>
                          < BsFillKeyFill className="input-ic"/> 
                        </div>
                        <button className="sign-bt">Sign up <BsChevronRight/></button>
                        <div className="text-end">
                          <a className="signed-bt">Already signed up?</a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <p>By clicking ‘Sign up’, you agree to Event Live’s <a href="#">Terms of Service</a> and <a href="">Privacy Policy</a>, and will be a registered Event Live user.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </Fragment>
    );
  }
};

function Login(props) {
  let navigate = useNavigate();
  return <MyComponent {...props} navigate={navigate} />
}

export default withTranslation()(Login);