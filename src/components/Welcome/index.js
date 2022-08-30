 import React, { Fragment,Component,} from "react";
import Logo from '../../assets/img/logo.png';
import event1 from '../../assets/img/event1.png';
import { withTranslation } from 'react-i18next';
import Auth from "../../services/Auth";
import { useNavigate } from "react-router-dom";
import { BsFillEnvelopeFill,BsFillKeyFill,BsFacebook,BsInstagram,BsChevronRight,BsFillPersonFill } from "react-icons/bs";



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
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid justify-content-between">
                  <a className="navbar-brand" href="#">
                    <img height="45" className="ml15 mr50" src={Logo} />
                  </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto nav-menu-item">
                      <li className="nav-item active"><a className="nav-link" href="/eventorganizer">Event Organizers</a></li>
                      <li className="nav-item"><a className="nav-link" href="/login" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Login</a></li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </header>
          <section className="welcome_banner">
          </section>
          <section className="upcoming-event">
            <div className="upcoming-event-inr">
                <div className="sec-title">
                  <h2>Upcoming Events</h2>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 mb-4">
                    <a href="#" className="event-item">
                      <div className="event-img">
                        <img src={event1} className="w-100"/>
                        <div className="event-loc">
                          <span>Tampa, FL</span>
                        </div>
                      </div>
                      <div className="event-info">
                        <h3>Labor Day Beach Blast</h3>
                        <p>Fri Sep 3 - Sun Sep 5 • $25 - $115</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <a href="#" className="event-item">
                      <div className="event-img">
                        <img src={event1} className="w-100"/>
                        <div className="event-loc">
                          <span>Saint Petersburg, FL</span>
                        </div>
                      </div>
                      <div className="event-info">
                        <h3>The St. Pete Powerboat Grand Prix</h3>
                        <p>Fri Aug 28 at 2:00pm CDT • $25 - $115</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <a href="#" className="event-item">
                      <div className="event-img">
                        <img src={event1} className="w-100"/>
                        <div className="event-loc">
                          <span>Tampa, FL</span>
                        </div>
                      </div>
                      <div className="event-info">
                       <h3>Tampa Bay Buccaneers Season Kickoff Bar Crawl</h3>
                        <p>Sun Sep 5 at 4:00 pm • $25 - $75</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <a href="#" className="event-item">
                      <div className="event-img">
                        <img src={event1} className="w-100"/>
                        <div className="event-loc">
                          <span>Saint Petersburg, FL</span>
                        </div>
                      </div>
                      <div className="event-info">
                        <h3>OktoBEERfest</h3>
                        <p>Sat Oct 9 at 4:00 pm CDT • $35 - $125</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <a href="#" className="event-item">
                      <div className="event-img">
                        <img src={event1} className="w-100"/>
                        <div className="event-loc">
                          <span>Tampa, FL</span>
                        </div>
                      </div>
                      <div className="event-info">
                        <h3>The 13 Ugly Men Annual “Halloween Party”</h3>
                        <p>Sat Oct 23 at 8:00 pm CDT • $45 - $2,500</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <a href="#" className="event-item">
                      <div className="event-img">
                        <img src={event1} className="w-100"/>
                        <div className="event-loc">
                          <span> Tampa, FL</span>
                        </div>
                      </div>
                      <div className="event-info">
                        <h3>Rise</h3>
                        <p>Thu Oct 28 at 6:00 pm CDT • $125 - $10,000</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <a href="#" className="event-item">
                      <div className="event-img">
                        <img src={event1} className="w-100"/>
                        <div className="event-loc">
                          <span>Tampa, FL</span>
                        </div>
                      </div>
                      <div className="event-info">
                        <h3>10th Annual Winter Wonder Ride</h3>
                        <p>Sat Oct 11 at 2:00 pm • $45 - $150</p>
                      </div>
                    </a>
                  </div>
                </div>
            </div>
            <div className="img-gallry"> 
              <div className="img-gallry-inr">
                <div className="sec-title">
                  <h2><span>SOCIAL</span><BsInstagram/></h2>
                </div>
                <div className="masonry">
                  <div className="item">
                    <img src={event1} className="w-100"/>
                  </div>
                  <div className="item">
                    <img src={event1} className="w-100"/>
                  </div>
                  <div className="item">
                    <img src={event1} className="w-100"/>
                  </div>
                  <div className="item">
                    <img src={event1} className="w-100"/>
                  </div>
                  <div className="item">
                    <img src={event1} className="w-100"/>
                  </div>
                  <div className="item">
                    <img src={event1} className="w-100"/>
                  </div>
                  <div className="item">
                    <img src={event1} className="w-100"/>
                  </div>
                  <div className="item">
                    <img src={event1} className="w-100"/>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="footer">
            <div className="container">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <div className="footer-logo">
                    <a className="navbar-brand" href="index.html">
                      <img height="45" className="ml15 mr50" src={Logo} />
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