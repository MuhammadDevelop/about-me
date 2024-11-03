import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Contact from '../contact/Contact'
import Games from '../games/Games'
import Home from '../home/Home'
import Portfolio from '../portfolio/Portfolio'
import Skills from '../skills/Skills'
import Footer from '../../routes/footer/Footer'
import Header from '../../routes/header/Header'

const All = () => {
  return (
<>
   <Header/>
<Home/>
  <Skills/>
<Games/>
  <Portfolio/>
  <Contact/>
  <Footer/>
    </>
  )
}

export default All