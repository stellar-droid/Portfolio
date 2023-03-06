import React from 'react'
import './Contacts.css';
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';
import { useState } from 'react';

function Contacts() {

    const form = useRef();
    const [done,Setdone]=useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7ysvies', 'template_qx1299k', form.current, 'HT7GQgqB3LIAZad8o')
      .then((result) => {
          console.log(result.text);
          const a = true;
          Setdone(a);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user" placeholder='name' />
                <input type="email" name="user_email"  className="user" placeholder='email'/>
                <textarea name="message" className='user' placeholder='message ' ></textarea>
                <input type="submit" value="Send" className='button' />
                <span>{done && "Thanks for contacting"}</span>
                <div className="blur c-blur1" style={{background:"var(--purple)"}}>
                 </div>

            </form>

        </div>
    </div>
  )
}

export default Contacts;