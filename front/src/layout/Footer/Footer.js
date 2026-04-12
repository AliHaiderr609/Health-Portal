import React from 'react';
import { FaPinterest, FaFacebook, FaTwitter, FaDribbble, FaBehance, FaLinkedin } from 'react-icons/fa';
import PhoneCall from "../../assets/images/phone-call.svg"
import Envelope from "../../assets/images/envelope.svg"
import PlaceHolder from "../../assets/images/placeholder.svg"
import { Link } from 'react-router-dom';
import Psy from "../../assets/images/cure-logo2.png"


function Footer() {
    return (
        <footer className="footer">
            <div className="footer_container">
                <div className="container">
                    <div className="row">
                        {/* Footer - About */}
                        <div className="col-lg-4 footer_col">
                            <div className="footer_about">
                                <div className="footer_logo_container">
                                    <Link to="/" className="d-flex flex-column align-items-center justify-content-center">
                                        <div className="logo_content">
                                            <div className="logo logo_text d-flex flex-row align-items-center justify-content-center">
                                            <img src={Psy} alt='logo'/>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="footer_about_text">
                                    <p>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum.</p>
                                </div>
                                <ul className="footer_about_list">
                                    <li><div className="footer_about_icon"><img src={PhoneCall} alt="PhoneCall" /></div><span>+45 677 8993000 223</span></li>
                                    <li><div className="footer_about_icon"><img src={Envelope} alt="envelope" /></div><span>office@template.com</span></li>
                                    <li><div className="footer_about_icon"><img src={PlaceHolder} alt="PlaceHolder" /></div><span>Main Str. no 45-46, b3, 56832, Los Angeles, CA</span></li>
                                </ul>
                            </div>
                        </div>

                        {/* Footer - Links */}
                        <div className="col-lg-4 footer_col">
                            <div className="footer_links footer_column">
                                <div className="footer_title">Useful Links</div>
                                <ul>
                                    <li><Link to="#">Testimonials</Link></li>
                                    <li><Link to="#">FAQ</Link></li>
                                    <li><Link to="#">Apply for a Job</Link></li>
                                    <li><Link to="#">Terms & Conditions</Link></li>
                                    <li><Link to="#">Our Partners</Link></li>
                                    <li><Link to="/">Services</Link></li>
                                    <li><Link to="#">Free services</Link></li>
                                    <li><Link to="/aboutus">About us</Link></li>
                                    <li><Link to="#">News</Link></li>
                                    <li><Link to="/contactus">Contact</Link></li>
                                    <li><Link to="#">Our Screening Program</Link></li>
                                    <li><Link to="#">FAQ</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Footer - News */}
                        <div className="col-lg-4 footer_col">
                            <div className="footer_news footer_column">
                                <div className="footer_title">Useful Links</div>
                                <ul>
                                    <li>
                                        <div className="footer_news_title"><Link to="news.html">Aliquam ac eleifend metus</Link></div>
                                        <div className="footer_news_date">March 10, 2018</div>
                                    </li>
                                    <li>
                                        <div className="footer_news_title"><Link to="news.html">Donec in libero sit amet mi vulputate</Link></div>
                                        <div className="footer_news_date">March 10, 2018</div>
                                    </li>
                                    <li>
                                        <div className="footer_news_title"><Link to="news.html">Aliquam ac eleifend metus</Link></div>
                                        <div className="footer_news_date">March 10, 2018</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="copyright_content d-flex flex-lg-row flex-column align-items-lg-center justify-content-start">
                                <div className="cr text-center">
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                    Copyright &copy;<script>
                                        document.write(new Date().getFullYear());
                                    </script> All right Reserved@PSYCUBE 
                                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                </div>
                                <div className="footer_social ml-lg-auto">
                                    <ul>
                                        <li><Link to="#"><FaPinterest /></Link></li>
                                        <li><Link to="#"><FaFacebook /></Link></li>
                                        <li><Link to="#"><FaTwitter /></Link></li>
                                        <li><Link to="#"><FaDribbble /></Link></li>
                                        <li><Link to="#"><FaBehance /></Link></li>
                                        <li><Link to="#"><FaLinkedin /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
