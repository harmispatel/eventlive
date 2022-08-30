 import React, { Fragment,Component,} from "react";
import Logo from '../../assets/img/logo.png';
import bgimgtop from '../../assets/img/bgtop.png';
import event1 from '../../assets/img/event1.png';
import { withTranslation } from 'react-i18next';
import Auth from "../../services/Auth";
import { useNavigate } from "react-router-dom";
import { BsFillEnvelopeFill,BsFillKeyFill,BsFacebook,BsInstagram,BsChevronRight,BsFillPersonFill } from "react-icons/bs";


class ShopingCart extends Component {
  
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
                      </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="cart-right-main">
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

export default ShopingCart