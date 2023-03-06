import React from 'react'
import './Works.css';
import Upwork from '../../Image/Upwork.png';
import fiverr from '../../Image/fiverr.png';
import amazon from '../../Image/amazon.png';
import Shopify from '../../Image/Shopify.png';
import Facebook from '../../Image/Facebook.png';
function Works() {
  return (
    <div className="works">
        <div className="awesome">
            <span>Works for all this </span>
            <span>Brands And Clients</span>
            <span>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, placeat
                ad qui
                <br />
                voluptatum maiores fugit, facilis magnam vel nemo accusantium voluptas
                odio laborum aut
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, placeat
                 <br />
            </span>
            
                 <button className="button s-button"> Hire Me</button>
            
            <div className="blur s-blur" style={{ background: "#ABF1FF94" , fontFamily: "jokerman"}}>
               LOkesh
            </div>
      </div>

      {/* right side */}

        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </div>
            {/* background Circle */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>

        </div>

    </div>
  )
}

export default Works;