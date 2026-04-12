import React from 'react'
import aboutImage from '../../assets/images/about.png';
function AboutUs() {
  return (
    <div>
      <div className="about">
            <div className="container">
                <div className="row row-lg-eq-height">
                    {/* About Content */}
                    <div className="col-lg-7">
                        <div className="about_content">
                            <div className="section_title"><h2>A great medical team to help your needs</h2></div>
                            <div className="about_text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin. Aliquam nec dapibus massa. Pellen tesque in luctus ex. Praesent luctus erat sit amet tortor aliquam. Nulla ut molestie augue, scelerisque consectetur quam. Dolor sit amet, consectetur adipiscing elit. Cura bitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin. Aliquam nec dapibus massa. Pellentesque in luctus ex.</p>
                            </div>
                            <button  className="custom_btn mt-5"><span>Read More</span></button>
                        </div>
                    </div>

                    {/* About Image */}
                    <div className="col-lg-5">
                        <div className="about_image"><img src={aboutImage} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
