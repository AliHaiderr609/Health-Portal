import React, { useEffect, useState } from 'react';
import './AboutUs.css'

// Importing images
import AboutImg from '../../../assets/images/about.jpg'
import Testimonials from '../../../assets/images/testimonials.jpg'
import Cta from '../../../assets/images/cta.jpg'
import TeamOne from '../../../assets/images/team_1.png'
import TestOne from '../../../assets/images/test_1.jpg'
import TestTwo from '../../../assets/images/test_2.jpg'
import TeamTwo from '../../../assets/images/team_2.png'
import Qoute from '../../../assets/images/quote.png'
// Importing components and libraries
import { Link } from 'react-router-dom';
import api from '../../../config/axios_instance';
import { ENV } from '../../../config/config';
import { toast } from 'react-toastify';
import Slider from "react-slick";

/**
 * Displays the AboutUs component.
 *
 * @component
 */
const AboutUs = () => {

     // Slider settings
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true
    };

    // States
    const [therapist, setTherapist] = useState([]);
    const [testimonial, setTestimonial]= useState([]);

    /**
 * Fetches user profile data.
 *
 * @function fetchUserProfile
 * @returns {Promise<void>}
 */
    const fetchUserProfile = async () => {
        try {

            const response = await api.get(`${ENV.appClientUrl}/therapistData/all`);
            if (response?.data?.success) {
                setTherapist(response?.data?.newTherapist);
            } else {
                toast.error(response?.data?.message)
            }

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    };


    /**
 * Fetches testimonial data.
 *
 * @function fetchTestimonial
 * @returns {Promise<void>}
 */
    const fetchTestimonial = async () => {
        try {

            const response = await api.get(`${ENV.appClientUrl}/testimonial`);
            if (response?.data?.success) {
                setTestimonial(response?.data?.testimonial);
            } 

        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    };

    // Effect hook to fetch data on component mount
    useEffect(() => {
        fetchUserProfile();
        fetchTestimonial();
    }, []);

     // JSX
    return (
        <div className="super_container contact__wrap">
            <div className="menu_container menu_mm">
                <div className="menu_close_container">
                    <div className="menu_close"></div>
                </div>
                <div className="menu_inner menu_mm">
                    <div className="menu menu_mm">
                        <ul className="menu_list menu_mm">
                            <li className="menu_item menu_mm"><a href="index.html">Home</a></li>
                            <li className="menu_item menu_mm"><a href="about.html">About us</a></li>
                            <li className="menu_item menu_mm"><a href="services.html">Services</a></li>
                            <li className="menu_item menu_mm"><a href="news.html">News</a></li>
                            <li className="menu_item menu_mm"><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                    <div className="menu_extra">
                        <div className="menu_appointment"><a href="/users/book-appointments">Request an Appointment</a></div>
                        <div className="menu_emergencies">For Emergencies: +563 47558 623</div>
                    </div>
                </div>
            </div>
            <div className="home ">
                <div className="home_background parallax-window">
                    <img src={AboutImg} />
                </div>
                <div className="home_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="home_content"><div className="home_title"><span>Health Portal</span> News</div><div className="breadcrumbs"><ul><li><Link to="/">Home</Link></li><li>AboutUs</li></ul></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section_title"><h2 className="text-start">A great medical team to help your needs</h2></div>
                            <div className="about_text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin. Aliquam nec dapibus massa. Pellen tesque in luctus ex. Praesent luctus erat sit amet tortor aliquam . Nulla ut molestie augue, scelerisque consectetur quam. Dolor sit amet, consectetur adipiscing elit. Cura bitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin. Aliquam nec dapibus massa. Pellentesque in luctus ex.</p>
                                <p>Praesent luctus erat sit amet tortor aliquam . Nulla ut molestie augue, scelerisque consectetur quam. Dolor sit amet, consectetur adipiscing elit. Cura bitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin. Aliquam nec dapibus massa. Pellentesque in luctus ex.</p>
                            </div>
                            <button className="custom_btn mt-5"><span>Read More</span></button>
                        </div>
                        <div className="col-lg-4 boxes_col">
                            <div className="box working_hours">
                                <div className="box_icon d-flex flex-column align-items-start justify-content-center"><div style={{ width: '29px', height: '29px' }}><img src="images/alarm-clock.svg" alt="" /></div></div>
                                <div className="box_title">Working Hours</div>
                                <div className="working_hours_list">
                                    <ul>
                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                            <div>Monday – Friday</div>
                                            <div className="ml-auto">8.00 – 19.00</div>
                                        </li>
                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                            <div>Saturday</div>
                                            <div className="ml-auto">9.30 – 17.00</div>
                                        </li>
                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                            <div>Sunday</div>
                                            <div className="ml-auto">9.30 – 15.00</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="box box_appointments">
                                <div className="box_icon d-flex flex-column align-items-start justify-content-center"><div style={{ width: '29px', height: '29px' }}><img src="images/phone-call.svg" alt="" /></div></div>
                                <div className="box_title">Appointments</div>
                                <div className="box_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam cons equat semper sollicitudin.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonials">
                <div className="testimonials_background parallax-window">
                    <img src={Testimonials} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section_title section_title_light "><h2 className='text-start'>Patient Testimonials</h2></div>
                        </div>
                    </div>
                    <div className="row test_row">
                        {testimonial?.length ? testimonial?.slice(0, 2)?.map((item, index) =>{
                        return(
                        <div key={index} className="col-lg-6 test_col">
                            <div className="testimonial">
                                <div className="test_icon d-flex flex-column align-items-center justify-content-center">
                                    <img src={Qoute} />
                                </div>
                                <div className="test_text">{item?.message}</div>
                                <div className="test_author d-flex flex-row align-items-center justify-content-start">
                                    <div className="test_author_name">  <img src={item?.user?.profileImage ? `${ENV.file_Url}/` + item?.user?.profileImage : TestOne} alt='TestOne'/><a href="#">{item?.user?.fname} {item?.user?.lname}</a>, <span>Patient</span></div>

                                </div>
                            </div>
                        </div>
                        )
                    }): <div className="col-lg-6 test_col">
                    <div className="testimonial">
                        <div className="test_icon d-flex flex-column align-items-center justify-content-center">
                            <img src={Qoute} />
                        </div>
                        <div className="test_text">Slor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin. Aliquam nec dap ibus massa. Pellen tesque in luctus ex. Praesent luctus erat sit amet tortor aliquam</div>
                        <div className="test_author d-flex flex-row align-items-center justify-content-start">
                            <div className="test_author_name">
                            <img src={TestTwo} alt='TestOne'/>
                                <a href="#">Mick Williams</a>, <span>Patient</span></div>
                        </div>
                    </div>
                </div>}
                        
                    </div>
                </div>
            </div>
            <div className="team">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section_title"><h2 className='text-start'>Meet Our Medical Team</h2></div>
                        </div>
                    </div>
                    <div className="team_row">
    {therapist?.length > 0 ? (
        <Slider {...settings}>
            {therapist?.map((data, index) => (
                <div className="team_col" key={index}>
                    <Link to='/users/book-appointments'>
                        <div className="team_member">
                            <div className="team_member_image">
                                <img src={data?.therapist?.profileImage ? `${ENV.file_Url}/` + data?.therapist?.profileImage : TeamOne} alt={data?.therapist?.fname} />
                            </div>
                            <div className="team_member_info">
                                <div className="team_member_name"><a href="#">{data?.therapist?.fname} {data?.therapist?.lname}</a></div>
                                <div className="team_member_title">{data?.name}</div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </Slider>
    ) : (
        <div className="col-lg-3 team_col">
            <div className="team_member">
                <div className="team_member_image d-flex flex-column align-items-center justify-content-end">
                    <img src={TeamTwo} alt="Team Two" />
                </div>
                <div className="team_member_info">
                    <div className="team_member_name"><a href="#">Dr. Josh Henderson</a></div>
                    <div className="team_member_title">Plastic Surgeon</div>
                </div>
            </div>
        </div>
    )}
</div>

                </div>
            </div>
            <div className="cta">
                <div className="cta_background parallax-window">
                    <img src={Cta} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="cta_content text-center">
                                <h2>Need a personal health plan?</h2>
                                <p>Duis massa massa, mollis vel ullamcorper quis, finibus et urna. Aliquam ac eleifend metus. Ut sollicitudin risus ex</p>
                                <button  className="custom_btn mt-5"><span>Request a Plan</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
