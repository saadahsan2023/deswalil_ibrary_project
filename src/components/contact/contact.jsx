import "./contact.css"
import React from 'react'
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

function contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "13afeada-f0bd-48e3-8768-0e557a19a2d9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }

    return (
        <div className="contact">
            <div className="coll-left">
                <h3>Send Us a message <img src={msg_icon} alt="" /></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex beatae tempora deleniti quo omnis quas corrupti dolorum esse rerum, perspiciatis, dicta dolores, ipsa odio nisi in excepturi. Maxime, repellendus nulla!</p>
                <ul>
                    <li> <img src={mail_icon} alt="" />saadahsankhan@gmail.com</li>
                    <li> <img src={phone_icon} alt="" />+92-3153021-306</li>
                    <li> <img src={location_icon} alt="" /><b>HNO 388</b>&nbsp;Gul Center Hyderbad</li>
                </ul>

            </div>
            <div className="coll-left">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="Enter your name" required />
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter your number  name" required />
                    <label>Write Your message here</label>
                    <textarea name="message" rows="6" placeholder="Enter your massage" required></textarea>
                    <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>


                </form>
                <span>{result}</span>

            </div>


        </div>
    )
}

export default contact