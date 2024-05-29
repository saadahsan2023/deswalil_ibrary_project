import React from 'react'
import "./footer.css"

function footer() {

    let date = new Date()
    let years = date.getFullYear()

    return (


        <div className="footer">
            <p>&#169;  {years} Deswali library. All rights reserved.</p>
            <ul>
                <li>Terms of Services</li>
                <li>Privacy policy</li>
            </ul>


        </div>

    )
}

export default footer