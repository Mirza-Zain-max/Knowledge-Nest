import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Basic from './Basic'
import Footer from '../../../Components/Footer'
import Header from '../../../Components/Header'
import Graphic from './Graphic'
import Adca from './Adca'
import Tallyprime from './Talleypeime'
import Typing from './Typing'
import Webdeveloper from './Webdeveloper'
import Coral from './Coral'
import Css from './Css'
import Css3 from './Css3'
import Dca from './Dca'
import Excel from './Excel'
import Html from './Html'
import Javascript from './Javascript'
import Office from './Office'
import Erp9 from './Epr9'
import Photoshop from './Photoshop'

const Coursespage = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='computerbasic' element={<Basic />} />
        <Route path='grahicdesingning' element={<Graphic />} />
        <Route path='adca' element={<Adca />} />
        <Route path='tallyprime' element={<Tallyprime />} />
        <Route path='englishtyping' element={<Typing />} />
        <Route path='webdevelopment' element={<Webdeveloper />} />
        <Route path='coraldraw' element={<Coral />} />
        <Route path='css' element={<Css />} />
        <Route path='css3' element={<Css3 />} />
        <Route path='dca' element={<Dca />} />
        <Route path='excel' element={<Excel />} />
        <Route path='html' element={<Html />} />
        <Route path='javascript' element={<Javascript />} />
        <Route path='msoffice' element={<Office />} />
        <Route path='tallyErp9' element={<Erp9 />} />
        <Route path='photoshop' element={<Photoshop />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Coursespage