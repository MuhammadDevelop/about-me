import React from 'react'
import porto from './Portfolio.module.scss'
import portfolioImgOne from '../../image/port.jpg'
import portfolioImgTwo from '../../image/porto2.png'
import portfolioImgThree from '../../image/porto3.jpg'
import portfolioImgFour from '../../image/porto4.png'
import portfolioImgFive from '../../image/porto5.png'
import portfolioImgSix from '../../image/porto7.png'
import portfolioImgNine from '../../image/porto8.jpg'
import portfolioImgTent from '../../image/porto12.jpg'

import portfolioImgSeven from '../../image/salovat.png'
import portfolioImgEight from '../../image/music.jpg'
import portfolioTwo from '../../image/netlify.webp'
import portfolioOne from '../../images/vercal.png'

import portfolioThree from '../../image/github.png'

const Portfolio = () => {
  return (
    <div id='portfolio' className={porto.portfolio}>
        <div className={porto.container}>
            <h1 className={porto.portfolioTit}>
                Portfolio
            </h1>
            <div className={porto.portfolioCardParent}>
                <div className={porto.portfolioCard}>
                    <img src={portfolioImgOne} alt="" className={porto.portfolioImg} />
                    <div className={porto.portfolioBtns}>
                        <a href='https://playthegame.netlify.app/'>
                            <img src={portfolioTwo} alt="" />
                            </a>
                            <a href=''>
                              <img src={portfolioThree} alt="" />
                            </a>
                    </div>
                </div>
                <div className={porto.portfolioCard}>
                <img src={portfolioImgTwo} alt="" className={porto.portfolioImg} />
                    <div className={porto.portfolioBtns}>
                        <a href='https://golden-strudel-d8af24.netlify.app/'>
                            <img src={portfolioTwo} alt="" />
                            </a>
                            <a href=''>
                              <img src={portfolioThree} alt="" />
                            </a>
                    </div>
                </div>
                <div className={porto.portfolioCard}>
                <img src={portfolioImgThree} alt="" className={porto.portfolioImg} />
                    <div className={porto.portfolioBtns}>
                        <a href='https://magnificent-sorbet-e447f4.netlify.app/'>
                            <img src={portfolioTwo} alt="" />
                            </a>
                            <a href='https://github.com/muham02/portfolio'>
                              <img src={portfolioThree} alt="" />
                            </a>
                    </div>
                </div>
                <div className={porto.portfolioCard}>
                <img src={portfolioImgFour} alt="" className={porto.portfolioImg} />
                    <div className={porto.portfolioBtns}>
                        <a href='https://rea-2ugf.vercel.app/'>
                            <img src={portfolioOne} alt="" />
                            </a>
                            <a href='https://github.com/muham02/react-18'>
                              <img src={portfolioThree} alt="" />
                            </a>
                    </div>
                </div>
                <div className={porto.portfolioCard}>
                <img src={portfolioImgFive} alt="" className={porto.portfolioImg} />
                    <div className={porto.portfolioBtns}>
                        <a href='https://react-15-seven.vercel.app/'>
                            <img src={portfolioOne} alt="" />
                            </a>
                            <a href='https://github.com/muham02/react-15'>
                              <img src={portfolioThree} alt="" />
                            </a>
                    </div>
                </div>
                <div className={porto.portfolioCard}>
                <img src={portfolioImgSix} alt="" className={porto.portfolioImg} />
                    <div className={porto.portfolioBtns}>
                        <a href='https://react4-wheat-iota.vercel.app/'>
                            <img src={portfolioOne} alt="" />
                            </a>
                            <a href='https://github.com/muham02/react4'>
                              <img src={portfolioThree} alt="" />
                            </a>
                    </div>
                </div>
                <div className={porto.portfolioCard}>
                <img src={portfolioImgSeven} alt="" className={porto.portfolioImg} />
                    <div className={porto.portfolioBtns}>
                        <a href='https://react4-wheat-iota.vercel.app/'>
                            <img src={portfolioOne} alt="" />
                            </a>
                            <a href='https://github.com/muham02/reactt'>
                              <img src={portfolioThree} alt="" />
                            </a>
                    </div>
                </div>
                <div className={porto.portfolioCard}>
                <img src={portfolioImgEight} alt="" className={porto.portfolioImg} />
                    <div className={porto.portfolioBtns}>
                        <a href='https://reac-dusky.vercel.app/'>
                            <img src={portfolioOne} alt="" />
                            </a>
                            <a href='https://github.com/muham02/reac'>  
                              <img src={portfolioThree} alt="" />
                            </a>
                    </div>
                </div>
                <div className={porto.portfolioCard}>
                <img src={portfolioImgNine} alt="" className={porto.portfolioImg} />
                    <div className={porto.portfolioBtns}>
                        <a href='https://pro-ochre-five.vercel.app/'>
                            <img src={portfolioOne} alt="" />
                            </a>
                            <a href='https://github.com/muham02/pro'>
                              <img src={portfolioThree} alt="" />
                            </a>
                    </div>
                </div>
                <div className={porto.portfolioCard}>
                <img src={portfolioImgTent} alt="" className={porto.portfolioImg} />
                    <div className={porto.portfolioBtns}>
                        <a href='#'>
                            <img src={portfolioTwo} alt="" />
                            </a>
                            <a href='https://github.com/muham02/porto'>
                              <img src={portfolioThree} alt="" />
                            </a>
                    </div>
                </div>
            <a href='https://pro-ochre-five.vercel.app/' className={porto.portfolioInnerBtn}>See More</a>
            </div>
        </div>
    </div>
  )
}

export default Portfolio