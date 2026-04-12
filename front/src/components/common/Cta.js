import React from 'react';
import ctaBackground from '../../assets/images/cta.jpg';

function CTA() {
    return (
        <div className="cta">
            <div className="cta_background parallax-window"></div>
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
    );
}

export default CTA;
