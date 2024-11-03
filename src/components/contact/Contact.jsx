import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { MdOutlinePhoneIphone, } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import contact  from './Contact.module.scss'
import { MdEmail } from "react-icons/md";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yo8u5wc', 'template_tmgy3lp', form.current, {
        publicKey: '1_CdCFdbiN6dW_pCB',
      })
      .then(
        () => {
          alert('Success! Your massege sent');
        },
        (error) => {
          alert(`${error.text} Your massege did not send`);
        },
      );
      
      if (form.current) {
        form.current.reset();
      }
    };
  return (
    <div id='contact' className={contact.contactBody}>
    <div className={contact.container}>
        <h1 className={contact.contacFisttTit}>
            Contact me
        </h1>
        <iframe className={contact.contactIframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48426.00330618043!2d72.19236268059979!3d40.66019145967705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc8e7780f2771f%3A0x8b87e914ee597fb6!2z0JDRgdCw0LrQsCwg0JDQvdC00LjQttCw0L3RgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1709136974336!5m2!1sru!2s" width={1000} height={500} sandbox='allow-scripts allow-modal' loading='eager'></iframe>
       
           <div className={contact.contact__cardParent}>
            <div className={contact.contact__cards}>
               <div className={contact.contact__card}>
          <  MdOutlinePhoneIphone style={{fontSize:"40px",color:"#fff"}}/>
                  <p className={contact.contactTit}>
the owner of the phone Muhammad</p>
               </div>
              
               <div className={contact.contact__card}>
               <FaLocationDot style={{fontSize:"40px", color:"#fff"}}/>

               <p className={contact.contactTit}>
                Country:Uzbekistan,District:Andijan,
                City:Asaka,Street:Yangisar,House:46
              </p>
               </div>
               <div className={contact.contact__card}>
               <MdEmail  style={{fontSize:"40px",color:"#fff"}}/>

               <p className={contact.contactTit}>
               My email is:morif0202@gmail.com
               </p>
               </div>
            </div>
            <div className={contact.contact__cardss}>
               
               <form className={contact.contactForm} ref={form} onSubmit={sendEmail}>
      <div style={{display:"flex",alignItems:"center",flexDirection:"column",marginRight:"50px",marginTop:"15px"}}>
      <input className={contact.contact__inp} type="text" name="to_name"placeholder='Name' />
      
      <input className={contact.contact__inp} type="email" name="from_name" placeholder='Email' />
      <button className={contact.contactBtn} type="submit">Send</button>
      </div>
      <textarea className={contact.contact__textTag} name="message" placeholder='Description'/>
      <br />
    </form>
          
            </div>
           
            </div> 
      
    </div>
  </div>
  )
}

export default Contact