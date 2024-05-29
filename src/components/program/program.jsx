import React from "react";
import "./program.css";
// import Program_1 from "../../assets/program-1.png";
// import Program_2 from "../../assets/program-2.png";
// import Program_3 from "../../assets/program-3.png";
import Program_icon_1 from "../../assets/program-icon-1.png";
import Program_icon_2 from "../../assets/program-icon-2.png";
import Program_icon_3 from "../../assets/program-icon-3.png";

function program() {
  return (
    <>
      {/* first row  */}

      <div className="programs">
        <div className="program">
          <img src='https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=400' alt="" />
          <div className="caption">
            <img src={Program_icon_1} alt="" />
            <p>Website Development</p>
            <p className="para">We create visually stunning and functional websites that not only attract visitors but also turn them into customers.</p>

          </div>
        </div>
        <div className="program">
          <img src='https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=400' alt="" />
          <div className="caption">
            <img src={Program_icon_2} alt="" />
            <p>Digital Markiting</p>
            <p className="para">
              Our expert team uses a data-driven approach, leveraging the latest techniques to boost your online presence.

            </p>

          </div>
        </div>
        <div className="program">
          <img src='https://images.pexels.com/photos/3747282/pexels-photo-3747282.jpeg?auto=compress&cs=tinysrgb&w=400' alt="" />
          <div className="caption">
            <img src={Program_icon_3} alt="" />
            <p>Graphic Design</p>
            <p className="para">
              Our creative graphic designers produce engaging and impactful designs that capture your brand's essence.
            </p>
          </div>
        </div>
      </div>

      {/* second row  */}

      <div className="programs">
        <div className="program">
          <img src='https://images.pexels.com/photos/5052877/pexels-photo-5052877.jpeg?auto=compress&cs=tinysrgb&w=400' alt="" />
          <div className="caption">
            <img src={Program_icon_1} alt="" />
            <p>App Development</p>
            <p className="para">
              We create scalable, robust mobile apps that perform well and offer a consistent user experience across devices.
            </p>

          </div>
        </div>
        <div className="program">
          <img src='https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400' alt="" />
          <div className="caption">
            <img src={Program_icon_2} alt="" />
            <p>Social Media</p>
            <p className="para">
              Our social media experts craft compelling content, engage with your audience, and manage your social presence.
            </p>

          </div>
        </div>
        <div className="program">
          <img src='https://images.pexels.com/photos/4050216/pexels-photo-4050216.jpeg?auto=compress&cs=tinysrgb&w=400' alt="" />
          <div className="caption">
            <img src={Program_icon_3} alt="" />
            <p>SEO</p>
            <p className="para">
              Our web maintenance service offers comprehensive support and upkeep for your digital solutions.
            </p>
          </div>
        </div>
      </div>












    </>
  );
}

export default program;
