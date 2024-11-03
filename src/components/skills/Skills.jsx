
import React from 'react'
import { FaHtml5,FaSass,FaBootstrap,FaReact  } from "react-icons/fa";
import { PiFileCssBold } from "react-icons/pi";
import { SiRedux } from "react-icons/si";
import { RiJavascriptFill,RiNextjsFill  } from "react-icons/ri";
import skil from './Skills.module.scss'
import ant from '../../images/ant.png'
const Skills = () => {
  return (
   <div id='skills' className={skil.skills}>
    <div className={skil.container}>
      <h1 className={skil.skills__name}>
        My Skills
      </h1>
      <div className={skil.skills__codingBox}>
     <div className={skil.skills__codingLeft}>
     <div className={skil.skills__coding}>
       <FaHtml5 style={{color:"#fff",fontSize:"45px"}}/>
          <div className={skil.skills__codingBar}>
            <span className={skil.skills__persentOne}></span>
          </div>
        </div>
        <div className={skil.skills__coding}>
          <PiFileCssBold style={{color:"#fff",fontSize:"45px"}}/>
          <div className={skil.skills__codingBar}>
            <span  className={skil.skills__persentTwo}></span>
          </div>
        </div>
        <div className={skil.skills__coding}>
        <FaSass style={{color:"#fff",fontSize:"45px"}}/>
          <div className={skil.skills__codingBar}>
            <span className={skil.skills__persentThree}></span>
          </div>
        </div>
        <div className={skil.skills__coding}>
        <FaBootstrap style={{color:"#fff",fontSize:"45px"}}/>
          <div className={skil.skills__codingBar}>
            <span className={skil.skills__persentFour}></span>
          </div>
        </div>
        <div className={skil.skills__coding}>
        <RiJavascriptFill style={{color:"#fff",fontSize:"45px"}}/>
          <div className={skil.skills__codingBar}>
            <span className={skil.skills__persentFive}></span>
          </div>
        </div>
     </div>
       <div className={skil.skills__codingRifht}>
       <div className={skil.skills__coding}>
       <FaReact style={{color:"#fff",fontSize:"45px"}}/>
          <div className={skil.skills__codingBar}>
            <span className={skil.skills__persentSix}></span>
          </div>
          
        </div>
        <div className={skil.skills__coding}>
        <RiNextjsFill style={{color:"#fff",fontSize:"45px"}}/>
          <div className={skil.skills__codingBar}>
            <span className={skil.skills__persentSeven}></span>
          </div>
          
        </div>
        <div className={skil.skills__coding}>
        <SiRedux style={{color:"#fff",fontSize:"45px"}}/>
          <div className={skil.skills__codingBar}>
            <span className={skil.skills__persentEight}></span>
          </div>
        </div>
        <div className={skil.skills__coding}>
        <SiRedux style={{color:"#fff",fontSize:"45px"}}/><h2>REDUX TOOLKIT</h2>
          <div className={skil.skills__codingBar}>
            <span className={skil.skills__persentNine}></span>
          </div>
        </div>
        <div className={skil.skills__coding}>
          <h2>REST API</h2>
         
          <div className={skil.skills__codingBar}>
            <span className={skil.skills__persentTen}></span>
          </div>
          
          
        </div>
        <div className={skil.skills__coding}>
          <img className={skil.skills__img} src={ant} alt="" />
          <div className={skil.skills__codingBar}>
            <span className={skil.skills__persent11}></span>
          </div>
          </div>
       </div>
       
      </div>
    </div>
   </div>
  )
}

export default Skills