import React from 'react'

function Boxes() {
  return (
    <div>
      <div>
            <div className="boxes">
                <div className="container">
                    <div className="row">
                        {/* Working Hours Box */}
                        <div className="col-lg-4 box_col">
                            <div className="box working_hours">
                                <div className="box_icon d-flex flex-column align-items-start justify-content-center">
                                    <div style={{ width: '29px', height: '29px' }}>
                                        <img src="images/alarm-clock.svg" alt="" />
                                    </div>
                                </div>
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
                        </div>

                        {/* Appointments Box */}
                        <div className="col-lg-4 box_col">
                            <div className="box box_appointments">
                                <div className="box_icon d-flex flex-column align-items-start justify-content-center">
                                    <div style={{ width: '29px', height: '29px' }}>
                                        <img src="images/phone-call.svg" alt="" />
                                    </div>
                                </div>
                                <div className="box_title">Appointments</div>
                                <div className="box_text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin.
                                </div>
                            </div>
                        </div>

                        {/* Emergency Cases Box */}
                        <div className="col-lg-4 box_col">
                            <div className="box box_emergency">
                                <div className="box_icon d-flex flex-column align-items-start justify-content-center">
                                    <div style={{ width: '37px', height: '37px', marginLeft: '-4px' }}>
                                        <img src="images/bell.svg" alt="" />
                                    </div>
                                </div>
                                <div className="box_title">Emergency Cases</div>
                                <div className="box_phone">+56 273 45678 235</div>
                                <div className="box_emergency_text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Boxes
