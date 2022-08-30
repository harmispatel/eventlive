 import React, { Fragment,Component,} from "react";
import Logo from '../../assets/img/logo.png';
import bgimgtop from '../../assets/img/bgtop.png';
import event1 from '../../assets/img/event1.png';
import { withTranslation } from 'react-i18next';
import Auth from "../../services/Auth";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillEnvelopeFill,BsFillKeyFill,BsFacebook,BsInstagram,BsChevronRight,BsChevronLeft,BsFillPersonFill,BsFillCreditCardFill } from "react-icons/bs";


class cartpay extends Component {
  
  constructor(props) {
    super(props);
   
    this.state = {
      
    };
  }

  render() {
    const { t } = this.props;

    return (
      <Fragment>
          <section className="cart-main">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                    <div className="cart-left-main">
                      <div className="">
                        <div className="sec-title">
                          <h3>Gasparilla Music Festival General Admission</h3>
                        </div>
                        <div className="eventdetail-info-inr">
                          <ul>
                            <li>Curtis Hixon Waterfront Park,Tampa, FL</li>
                            <li>Oct 1 - 3</li>
                          </ul>
                        </div>

                        <div className="ticket-payment">
                          <div className="pay-ticket-info">
                            <div className="pay-ticket-info-inr">
                              <h4>GA - 3 Day (Fri/Sat/Sun) - Advance</h4>
                              <span>$ 90</span>
                            </div>
                            <div className="ticket-count">
                              <h4>2</h4>
                            </div>
                          </div>
                          <div className="ticket-total-main">
                            <div className="ticket-total-inr">
                              <span>Fees & Taxes: </span>
                              <span>$19.00</span>
                            </div>
                            <div className="ticket-total-inr">
                              <h4>Total</h4>
                              <h4>$169.00</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-lg-6">
                  <div className="cart-right-main">
                    <div className="modal-inr">
                      <h2>Complete Purchase</h2>
                      <div className="sub-title">
                        <h4>Add Saves Card</h4>
                        <h4>Single Use Card</h4>
                      </div>
                      <div className="payment-detalis">
                        <div className="pay-info-inr d-flex">
                          <input type="text" className="form-control" name="card" placeholder="Card Number"/>
                          <input type="text" className="form-control" name="card" placeholder="MM/YY"/>
                          <BsFillCreditCardFill className="input-ic"/>
                        </div>
                        <div className="pay-info-inr d-flex">
                          <select class="form-select" aria-label="Default select example">
                            <option value="1">U.S.A</option>
                            <option value="2">INDIA</option>
                            <option value="3">UK</option>
                          </select>
                        </div>
                        <div className="pay-info-inr">
                          <input type="text" className="form-control" name="street" placeholder="Street address"/>
                          <FaMapMarkerAlt className="input-ic"/>
                        </div>
                        <div className="pay-info-inr">
                          <input type="text" className="form-control" name="city" placeholder="City"/>
                          <FaMapMarkerAlt className="input-ic"/>
                        </div>
                        <div className="pay-info-inr d-flex">
                          <select class="form-select form-control" aria-label="Default select example">
                            <option value="1">State</option>
                            <option value="2">U.S.A</option>
                            <option value="3">INDIA</option>
                            <option value="4">UK</option>
                          </select>
                          <input type="text" className="form-control" name="postal" placeholder="Postal"/>
                          <FaMapMarkerAlt className="input-ic"/>
                        </div>
                        <div className="pay-info-inr d-flex justify-content-between">
                          <button className="btn back-bt"><BsChevronLeft/></button>
                          <div className="confirm-price">
                            <h3>Confirm Purchase</h3>
                            <h3>$94.58</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
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

export default cartpay