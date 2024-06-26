import React, { useRef } from 'react'
import "./Testimonial.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from "../../assets/back-icon.png"
import user_1 from "../../assets/user-1.png"
import user_2 from "../../assets/user-2.png"
import user_3 from "../../assets/user-3.png"
import user_4 from "../../assets/user-4.png"




const Testimonial = () => {

    const slider = useRef();
    let tx = 0;
    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`


    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }





    return (
        <div className="testimonial">
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="sliders">
                <ul ref={slider}>
                    <li>

                        <div className="slidee">

                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>
                                        William Jackson 1

                                    </h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Hippocrates Medical University ka focus taleem aur sehat par hai. Humara mission talented doctors aur healthcare professionals ki nayi nasal tayar karna hai, jo logon ki sehat aur khushi ka khayal rakh sakain.</p>

                        </div>


                    </li>
                    <li>

                        <div className="slidee">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>
                                        William Jackson 2

                                    </h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Hippocrates Medical University ka focus taleem aur sehat par hai. Humara mission talented doctors aur healthcare professionals ki nayi nasal tayar karna hai, jo logon ki sehat aur khushi ka khayal rakh sakain.</p>

                        </div>


                    </li>
                    <li>

                        <div className="slidee">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>
                                        William Jackson 3

                                    </h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Hippocrates Medical University ka focus taleem aur sehat par hai. Humara mission talented doctors aur healthcare professionals ki nayi nasal tayar karna hai, jo logon ki sehat aur khushi ka khayal rakh sakain.</p>

                        </div>


                    </li>

                    <li>

                        <div className="slidee">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>
                                        William Jackson 4

                                    </h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Hippocrates Medical University ka focus taleem aur sehat par hai. Humara mission talented doctors aur healthcare professionals ki nayi nasal tayar karna hai, jo logon ki sehat aur khushi ka khayal rakh sakain.</p>

                        </div>


                    </li>

                </ul>

            </div>

        </div>
    )
}


export default Testimonial
