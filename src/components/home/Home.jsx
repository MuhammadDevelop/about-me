import {useEffect, useState} from 'react'
import home from './Home.module.scss'
import me from '../../../public/me.png'
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { FaTelegram,FaInstagramSquare  ,FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
const DOWLOAD_CV = "https://https://me-ivory-two.vercel.app//Orifjonov.pdf"
const Home = () => {
  const [number, setNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const totalWords = ["Frontend Developer"]
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random()*100);
const pariod = 2000
useEffect(()=>{
let ticker = setInterval(()=>{
tick()
},delta)
return()=>{clearInterval(ticker)}
},[text])
const tick = () =>{
  let i = number % totalWords.length;
  let fullText = totalWords[i]
  let updateText = isDeleting ? fullText.substring(0,text.length - 1) :  fullText.substring(0,text.length +1) 
  setText(updateText)
  if(isDeleting){
    setDelta(prev=>prev /2)
  }
  if(!isDeleting&& updateText ===fullText){
    setIsDeleting(true)
    setDelta(pariod)
  }else if (isDeleting&& updateText ===""){
    setIsDeleting(false)
    setNumber(number + 1)
    setDelta(500)
  }
}
const dowloadFile = (url) =>{
  const fileName = url.split("/").pop()
const aTag = document.createElement("a")
aTag.href = url
aTag.setAttribute('download',fileName)
document.body.appendChild(aTag)
aTag.click()
aTag.remove()
}
  return (
   <div id='about' className={home.home}>
    <div className={home.container}>  
      <img src={me} alt="" className={home.home__img} />
      <div className={home.homeCard}>
        <h2 className={home.home__tit}> {`Muhammad`} <br /> <span>{text}</span></h2>
        <p className={home.home__text}>
        My name is Muhammad.I am 21 years old.Nowadays,I am busy with making Protfolio.Everyday,I think diffirent idea  to make the best Portfolio.I will be Frontend Developer in the Future,InShaAlloh.And then  if I will be the best Developer,Certanly,I always help poor people!
        </p>
        <div className={home.home__icons}>
          <a href="https://t.me/MuhammadDevelop" className={home.home__link}><FaTelegram/></a>
          <a href="https://www.instagram.com/ibnmuhammad_1442/" className={home.home__link}><FaInstagramSquare/></a>
          <a href="" className={home.home__link}><CgMail/></a>
          <a href="" className={home.home__link}><FaLinkedin/></a>
        </div>
        <div className={home.home__btn}>
        <Button onClick={()=>dowloadFile(DOWLOAD_CV)} type="primary" icon={<DownloadOutlined />}>
            Download CV
          </Button>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Home