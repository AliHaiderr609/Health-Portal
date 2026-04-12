import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import homeBackground1 from '../../assets/images/home_background_1.jpg'; 

function Banner() {
    const options = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    };

    return (
        <div className="home">
            <div className="home_slider_container">
                <OwlCarousel className="owl-theme" {...options}>
                    <div className="item">
                        <div className="home_slider_background" >
                            <img src={homeBackground1} alt='as'/>
                        </div>
                        <div className="home_content">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <div className="home_content_inner">
                                            <div className="home_title"><h1>Medicine made with care</h1></div>
                                            <div className="home_text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus vestibulum mauris quis aliquam. Integer accumsan sodales odio, id tempus velit ullamcorper id. Quisque at erat eu.</p>
                                            </div>
                                            <button  className="custom_btn mt-5"><span>Read More</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </OwlCarousel>
                
                <div className="home_slider_progress"></div>
            </div>
        </div>
    );
}

export default Banner;
