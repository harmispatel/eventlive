import React, { Fragment,Component,} from "react";
import LOGO from '../../assets/img/logo.png';
import comingevent1 from '../../assets/img/comingevent1.png';
import pastevent1 from '../../assets/img/pastevent1.png';
import { withTranslation } from 'react-i18next';
import Auth from "../../services/Auth";
import { useNavigate } from "react-router-dom";
import { GiEarthAmerica } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import {BsFillPersonFill,BsKeyFill,BsFillEnvelopeFill,BsGenderFemale,BsTelephoneFill} from "react-icons/bs";
import FooterText from '../Common/Footer'


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
        <div className="Profile-main">
          <header id="header" className="header">
            <div className="container-fluid">
              <div className="header-menu">
                <a className="navbar-brand" href="index.html">
                  <img height="45" src={LOGO} />
                </a>
                <ul className="nav-menu-item">
                  <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
                </ul>
              </div>
            </div>
          </header>
          <section className="profile-main-inr">
            <div className="container">
              <div className="profile-info">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="events-tab" data-bs-toggle="tab" data-bs-target="#events" type="button" role="tab" aria-controls="events" aria-selected="true">My Events</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="transfers-tab" data-bs-toggle="tab" data-bs-target="#transfers" type="button" role="tab" aria-controls="transfers" aria-selected="false">Transfers</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="orders-tab" data-bs-toggle="tab" data-bs-target="#orders" type="button" role="tab" aria-controls="orders" aria-selected="false">Orders</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="payment-tab" data-bs-toggle="tab" data-bs-target="#payment" type="button" role="tab" aria-controls="payment" aria-selected="false">Payment</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="events" role="tabpanel" aria-labelledby="events-tab">
                    <div className="tab-content-info">
                      <div className="new-event">
                        <div className="row">
                          <div className="col-lg-3 col-md-6">
                            <a href="#" className="profile-event-item">
                              <div className="event-info">
                                <h3>Labor Day Beach Blast</h3>
                                <p>Fri Sep 3 - Sun Sep 5 • $25 - $115</p>
                              </div>
                              <div className="event-img">
                                <img src={comingevent1} className="w-100"/>
                                <div className="event-loc">
                                  <span>Tickets</span>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="past-event">
                        <div className="sec-title">
                          <h2>Past Events</h2>
                        </div>
                        <div className="row">
                          <div className="col-sm-2">
                            <div className="past-event-img">
                                <img  src={pastevent1} className="w-100"/>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="past-event-img">
                                <img  src={pastevent1} className="w-100"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="transfers" role="tabpanel" aria-labelledby="transfers-tab">
                    <div className="tab-content-info">
                      <div className="new-event">
                        <div className="row">
                          <div className="col-lg-3 col-md-6">
                            <a href="#" className="profile-event-item">
                              <div className="event-info">
                                <h3>Labor Day Beach Blast</h3>
                                <p>Fri Sep 3 - Sun Sep 5 • $25 - $115</p>
                              </div>
                              <div className="event-img">
                                <img src={comingevent1} className="w-100"/>
                                <div className="event-loc">
                                  <span>Tickets</span>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="past-event">
                        <div className="sec-title">
                          <h2>Past Events</h2>
                        </div>
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="past-event-img">
                                <img  src={pastevent1} className="w-100"/>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="past-event-img">
                                <img  src={pastevent1} className="w-100"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                    <div className="tab-content-info">
                      <div className="new-event">
                        <div className="row">
                          <div className="col-lg-3 col-md-6">
                            <a href="#" className="profile-event-item">
                              <div className="event-info">
                                <h3>Labor Day Beach Blast</h3>
                                <p>Fri Sep 3 - Sun Sep 5 • $25 - $115</p>
                              </div>
                              <div className="event-img">
                                <img src={comingevent1} className="w-100"/>
                                <div className="event-loc">
                                  <span>Tickets</span>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="past-event">
                        <div className="sec-title">
                          <h2>Past Events</h2>
                        </div>
                        <div className="row">
                          <div className="col-lg-2">
                            <div className="past-event-img">
                                <img  src={pastevent1} className="w-100"/>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="past-event-img">
                                <img  src={pastevent1} className="w-100"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="payment" role="tabpanel" aria-labelledby="payment-tab">
                    <div className="tab-content-info">
                      <div className="payment-info">
                        <div className="payment-title">
                          <h3>Payment Methods</h3>
                        </div>
                        <div className="row">
                          <div className="col-lg-4 col-md-6">
                            <div className="payment-info-inr">
                              <div className="payment-type">
                                <div className="payment-type-inr">
                                  <label>
                                    <input className="form-check-input" type="checkbox" value="" />
                                    xxxx-xxxx-xxxx-xx30
                                  </label>
                                  <div className="payment-type-method">
                                    <span>Visa</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="tab-content-info">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="user-profile-info">
                            <div className="user-profile-info-title">
                              <h3>User Infomation</h3>
                            </div>
                            <form>
                              <div className="user-profile-info-inr">
                                <div className="user-details">
                                  <label className="form-label">First name</label>
                                  <input type="text" id="form9Example1" className="form-control" placeholder="Firstname"/>
                                  <BsFillPersonFill className="profile-input-ic"/>
                                </div>
                                <div className="user-details">
                                  <label className="form-label">Last name</label>
                                  <input type="text" id="form9Example2" className="form-control" placeholder="Lastname"/>
                                  <BsFillPersonFill className="profile-input-ic"/>
                                </div>
                                <div className="user-details">
                                  <label className="form-label">Email</label>
                                  <input type="text" id="form9Example3" className="form-control" placeholder="exmple123@gmail.com"/>
                                  <BsFillEnvelopeFill className="profile-input-ic"/>
                                </div>
                                <div className="user-details">
                                  <label className="form-label">Password</label>
                                  <input type="Password" id="form9Example4" className="form-control" placeholder="********"/>
                                  <BsKeyFill className="profile-input-ic"/>
                                </div>
                              </div>
                            </form>
                            <div className="link-account">
                              <div className="user-profile-info-title">
                                <h3>Linked account</h3>
                              </div>
                              <div className="fb-login">
                                <a href="#" className="link-account-inr">Unlink Facebook</a>
                              </div>
                              <div className="d-flex">
                                <input className="form-check-input" type="checkbox" value="" />
                                <p>Keep me updated with Tixr newsletter and special offers</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="user-profile-info">
                            <div className="user-profile-info-title">
                              <h3>Personal Detalis</h3>
                            </div>
                            <form>
                              <div className="user-profile-info-inr">
                                <div className="user-details-info user-details-top">
                                  <div className="user-details">
                                    <label className="form-label">Birthday</label>
                                  </div>
                                  <div className="user-details ">
                                    <label className="form-label">Day</label>
                                    <select className="form-select user-select" aria-label="Default select example">
                                      <option value="1">01</option>
                                      <option value="1">02</option>
                                      <option value="1">03</option>
                                    </select>
                                  </div>
                                  <div className="user-details">
                                    <label className="form-label">Month</label>
                                    <select className="form-select user-select" aria-label="Default select example">
                                      <option value="1">January</option>
                                      <option value="1">February</option>
                                      <option value="1">March</option>
                                    </select>
                                  </div>
                                  <div className="user-details">
                                    <label className="form-label">Year</label>
                                    <select className="form-select user-select" aria-label="Default select example">
                                      <option value="1">1990</option>
                                      <option value="1">1991</option>
                                      <option value="1">1992</option>
                                      <option value="1">1993</option>
                                      <option value="1">1994</option>
                                      <option value="1">1994</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="user-details">
                                  <label className="form-label">Country</label>
                                  <input type="text" id="form9Example" className="form-control" placeholder="USA"/>
                                  <GiEarthAmerica className="profile-input-ic"/>
                                </div>
                                <div className="user-details-info">
                                  <div className="user-details" style={{marginRight: '10px'}}>
                                    <label className="form-label">Postcode</label>
                                    <input type="text" id="form9Example5" className="form-control" placeholder="123456"/>
                                    <FaMapMarkerAlt className="profile-input-ic"/>
                                  </div>
                                  <div className="user-details">
                                    <label className="form-label">Phone Number</label>
                                    <input type="text" id="form9Example6" className="form-control" placeholder="+91 99999 99999"/>
                                    <BsTelephoneFill className="profile-input-ic"/>
                                  </div>
                                </div>
                                <div className="user-details">
                                  <label className="form-label">Gender</label>
                                  <select className="form-select user-select" aria-label="Default select example">
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                  </select>
                                  <BsGenderFemale className="profile-input-ic"/>
                                </div>
                                <button className="btn user-details-bt">Save Profile</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <FooterText/>
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