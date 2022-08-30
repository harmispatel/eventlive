import React, { Fragment,Component,} from "react";
import Logo from '../../assets/img/logo.png';
import OrganizerLogo from '../../assets/img/organizer-logo.png';
import bgorganizer from '../../assets/img/bgorganizer.png';
import eventdetail from '../../assets/img/eventdetail.png';
import featured1 from '../../assets/img/featured1.png';
import featured2 from '../../assets/img/featured2.png';
import sponser1 from '../../assets/img/sponser1.png';
import { withTranslation } from 'react-i18next';
import Auth from "../../services/Auth";
import { useNavigate } from "react-router-dom";
import { FaPlus,FaTwitter,FaMinus } from "react-icons/fa";
import { BsPlusLg,BsFillEnvelopeFill,BsFillKeyFill,BsFacebook,BsInstagram,BsChevronRight,BsFillPersonFill,BsTwitter} from "react-icons/bs";
import Iframemap from './iframemap'
import FooterText from '../Common/Footer'

class Event extends Component {
  
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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid justify-content-between">
                <a className="navbar-brand" href="index.html">
                  <img height="45" src={OrganizerLogo} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item"><a className="nav-link" href="#">TICKETS</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">DETAILS</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">LOCATION</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">TALENT</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">SPONSORS</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">CONTACT</a></li>
                    <li className="nav-item"><a className="nav-link" href="/login" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Login</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          <section className="eventdetail-banner">
            <div className="container">
              <div className="eventdetail-ticket-main">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="eventdetail-inr-left">
                      <div className="eventdetail-img">
                        <img src={eventdetail} className="w-100"/>
                      </div>
                      <div className="eventdetail-info">
                        <div className="sec-title">
                          <h3>Gasparilla Music Festival 2021</h3>
                        </div>
                        <div className="eventdetail-info-inr">
                          <ul>
                            <li>Curtis Hixon Waterfront Park,Tampa, FL</li>
                            <li>Oct 1 - 3</li>
                            <li>Doors open at 5:00PM Daily</li>
                            <li>All Ages</li>
                          </ul>
                          <button className="btn btn-orange" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">Follow Event <span><BsPlusLg/></span></button>
                          <div className="social-info-eventdetail">
                            <h4>Share</h4>
                            <a href="">Twitter <BsTwitter/></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="eventdetail-inr-right">
                      <div className="eventdetail-title">
                        <h4> Tickets</h4>
                      </div>
                      <div className="events-ticket-info">
                        <ul className="ticket-ul">
                          <li className="ticket-li">
                            <div className="ticket-info-left">
                              <h4>GA - 3 Day (Fri/Sat/Sun) - Advance</h4>
                              <span>$ 90</span>
                            </div>
                            <div className="ticket-info-right">
                              <h4><a href="#"><BsPlusLg/></a></h4>
                            </div>
                          </li>
                          <li className="ticket-li">
                            <div className="ticket-info-left">
                              <h4>GA - 3 Day (Fri/Sat/Sun) - Advance</h4>
                              <span>$ 90</span>
                            </div>
                            <div className="ticket-info-right">
                              <h4><a href="#"><BsPlusLg/></a></h4>
                            </div>
                          </li>
                          <li className="ticket-li">
                            <div className="ticket-info-left">
                              <h4>GA - 3 Day (Fri/Sat/Sun) - Advance</h4>
                              <span>$ 90</span>
                            </div>
                            <div className="ticket-info-right">
                              <h4><a href="#"><BsPlusLg/></a></h4>
                            </div>
                          </li>
                          <li className="ticket-li">
                            <div className="ticket-info-left">
                              <h4>GA - 3 Day (Fri/Sat/Sun) - Advance</h4>
                              <span>$ 90</span>
                            </div>
                            <div className="ticket-info-right">
                              <h4><a href="#"><BsPlusLg/></a></h4>
                            </div>
                          </li>
                          <li className="ticket-li">
                            <div className="ticket-info-left">
                              <h4>GA - 3 Day (Fri/Sat/Sun) - Advance</h4>
                              <span>$ 90</span>
                            </div>
                            <div className="ticket-info-right">
                              <h4><a href="#"><BsPlusLg/></a></h4>
                            </div>
                          </li>
                          <li className="ticket-li">
                            <div className="ticket-info-left">
                              <h4>GA - 3 Day (Fri/Sat/Sun) - Advance</h4>
                              <span>$ 90</span>
                            </div>
                            <div className="ticket-info-right">
                              <h4><a href="#"><BsPlusLg/></a></h4>
                            </div>
                          </li>
                          <li className="ticket-li">
                            <div className="ticket-info-left">
                              <h4>GA - 3 Day (Fri/Sat/Sun) - Advance</h4>
                              <span>$ 90</span>
                            </div>
                            <div className="ticket-info-right">
                              <h4><a href="#"><BsPlusLg/></a></h4>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="eventdetail-main">
            <div className="eventdetail-main-inr">
              <div className="container">
                <div className="eventdetail-info-text">
                  <div className="sec-title">
                    <h2>EVENT DETAILS</h2>
                  </div>
                  <div className="eventdetail-info-text-inr">
                    <p>Gasparilla Music Festival is 40+ bands across 4 stages along Tampa’s waterfront.
                      GMF is produced by the non-profit Gasparilla Music Foundation. Proceeds benefit music education 
                      and local professional musicians.
                    </p>
                    <a href="">www.gasparillamusic.com</a>
                    <p className="mt-4">All Artists and Times Subject to Change. Rain or Shine. No Refunds</p>
                    <div className="eventdetail-time-info mb-4">
                      <ul>
                        <li>Friday February 25: Gates at 4pm</li>
                        <li>Saturday February 26: Gates at 1pm</li>
                        <li>Sunday February 27: Gates at 1pm</li>
                      </ul>
                      <button className="btn">READ MORE</button>
                    </div>
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
                <div className="Featured-talent">
                  <div className="sec-title">
                    <h2>FEATURED TALENT</h2>
                  </div>
                  <div className="Featured-talent-inr">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="Featured-talent-inr-info">
                          <a href="">
                            <div className="Featured-img">
                              <img src={featured1} className="w-100"/>
                            </div>
                            <div className="featured-img-info">
                              <h3>Andy Frasco & The UN</h3>
                              <p>San Francisco, CA Rock</p>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="Featured-talent-inr-info">
                          <a href="">
                            <div className="Featured-img">
                              <img src={featured2} className="w-100"/>
                            </div>
                            <div className="featured-img-info">
                              <h3>Arrested Development</h3>
                              <p>San Francisco, CA Rock</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sponser-main">
                  <div className="sec-title">
                    <h2>SPONSER</h2>
                  </div>
                  <div className="sponser-img-gallry">
                    <div className="row">
                      <div className="col-lg-3 col-md-6">
                        <div className="sponser-img">
                          <img src={sponser1} className="w-100"/>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="sponser-img">
                          <img src={sponser1} className="w-100"/>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="sponser-img">
                          <img src={sponser1} className="w-100"/>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                        <div className="sponser-img">
                          <img src={sponser1} className="w-100"/>
                        </div>
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
                    <a>Website</a>
                  </div>
                  <div className="event-contact-info">
                    <h3>Support</h3>
                    <p>support@eventliveus.com</p>
                    <a>Tickets FAQ</a>
                  </div>
                </div>
                <div className="event-terms">
                  <div className="sec-title">
                    <h2>TERMS</h2>
                  </div>
                  <p> All tickets are final sale and cannot be exchanged or refunded. 
                      By purchasing a ticket to this event, you agree to this purchase policy. 
                      Before purchasing your tickets, we urge you to confirm the title, time and 
                      location of the event.
                  </p>
                </div>
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
          <div className="modal fade cart-modal" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">Close</button>
                <div className="modal-inr">
                  <h2>Gasparilla Music Festival General Admission</h2>
                  <span><b>$75</b> clock Sale Ends in 32 Days</span>
                  <p>3-DAY (Fri/Sat/Sun) General Admission ticket at Advance price.
                    Ticket to be exhanged for RFID wristband at festival entrance. 
                    Each ticket provides admission for 1 person 
                    (the same person) into the festival on Friday, 
                    Saturday and Sunday. Rain or Shine. No Refunds.
                  </p>
                  <p>COVID-19 Entry Policy: Event may have an entry policy. Please check the 
                    festival FAQ page for the latest updates.
                  </p>
                  <p>Holder of this ticket (“Holder”) voluntarily assumes all risks and danger incidental to the event for which this ticket is issued whether occurring prior to, during, or after same, including, but not limited to, contracting, and/or spreading the COVID-19 virus, and agrees that the organization, venue, presenter, agents, participants, or players are not responsible or liable for any injuries, sickness, or death resulting from such causes. Holder acknowledges that the COVID-19 pandemic remains a threat to individual and public health, COVID-19 is a highly contagious disease transmitted through human contact and respiratory droplets (including through the air and via common surfaces) and it is possible that Holder may contract COVID-19 while at the event for which this ticket is issued.</p>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="ticket-bt-inr">
                        <a className="btn btn-orange" href="/shopingcart">ADD TO CART <FaPlus/></a>
                        <div className="ticket-main d-flex">
                          <div className="add-ticket d-flex">
                            <button className="btn add-bt"><FaMinus/></button>
                            <button className="btn add-bt"><FaPlus/></button>
                          </div>
                          <div className="ticket-price">
                            <h3>Checkout<span className="badge bg-black">2</span></h3>
                            <span className="price-number">$160</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


      </Fragment>
    );
  }
};


export default Event;