import React from "react";
import "./Services.css";
import glasses from "../../Image/glasses.png";
import heartemoji from "../../Image/heartemoji.png";
import humble from '../../Image/humble.png';
import Card from "../Card/Card";
import Resume from "./Resume.pdf";

function Services() {
  return (
    <div className="services">
      {/* left side    */}
      <div className="awesome">
        <span>My Awesome </span>
        <span>Services</span>
        <span>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, placeat
          ad qui
          <br />
          voluptatum maiores fugit, facilis magnam vel nemo accusantium voluptas
          odio laborum aut
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" , fontFamily: "jokerman"}}>
          LOkesh
        </div>
      </div>

      {/* right side  */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={heartemoji}
            heading={"Design"}
            detail={"Figma,Adobe,sketch,\n Photoshop"}
          />
        </div>
        {/* second card */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={glasses}
            heading={"Developer"}
            detail={"Html,Css,JavaScript,\n React"}
          />
        </div>
        {/* Third card */}
        <div style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={humble}
            heading={"UI/UX"}
            detail={"Html,Css,JavaScript,\n React"}
          />
        </div>
        <div className="blur s-blur2" style={{background: "var(--purple)"}}>I am lokesh wani</div>
      </div>
    </div>
  );
}

export default Services;
