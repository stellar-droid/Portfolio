import React from 'react'
import './Intro.css';
import github from '../../Image/github.png';
import instagram from '../../Image/instagram.png';
import linkedin from '../../Image/linkedin.png';
import lokesh from '../../Image/lokesh.png';
import crown from '../../Image/crown.png';
import glassesimoji from '../../Image/glassesimoji.png';
import thumbup from '../../Image/thumbup.png';
import Vector1 from '../../Image/Vector1.png';
import Vector2 from '../../Image/Vector2.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span> Hy! I Am </span>
          <span>Lokesh Wani</span>
          <span>
            FrontEnd Develpoer WIth Skills Like HTML,CSS,REACTJS,JAVASCRIPT,etc.
            producting with high quality in web Design
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <a href="https://github.com/stellar-droid" target="blank">
            <img src={github} alt="" />
          </a>

          <a href="https://www.instagram.com/_iamlokeshwani_/" target="blank">
            <img src={instagram} alt="" />
          </a>

          <a href="https://www.linkedin.com/in/lokeshwani04/" target="blank">
            <img src={linkedin} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right ">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={lokesh} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </div>
        {/* blur div */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        >
          
        </div>
      </div>
    </div>
  );
}

export default Intro