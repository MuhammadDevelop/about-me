import React from 'react'
import f  from './Footer.module.scss'
import {FaInstagramSquare ,FaFacebook,FaPhoneAlt  } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
const Footer = () => {
  return (
<footer className={f.footer}>
  <div className={f.container}>
    <nav className={f.footer__nav}>
      <p className={f.footer__text}>
       <a href="tel:+998889810206"> <FaPhoneAlt />
</a>
           Telefon:+998889810206
      </p>
      <p className={f.footer__text}>
    
        <CgMail style={{fontSize:"35px"}}/>
        Email:morif0202@gmail.com
      </p>
      <ul className={f.footer__list}>
        <li className={f.footer__listItem}>
<FaFacebook/>
        </li>
        <li className={f.footer__listItem}>
          <FaInstagramSquare/>
          </li>

      </ul>
      <p className={f.footer__text}>
        Maken @ 2024 by Muhammad projectName Portfolio
      </p>
    </nav>
  </div>
</footer>
  )
}

export default Footer