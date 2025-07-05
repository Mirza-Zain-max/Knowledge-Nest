import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Html1 from "./Html"
import Basic from './Basic'
import Web from './Web'
import English from './English'
import Tallyprime from './Tallyprime'
import Excel from './Excel'
import TallyEPR from './TallyErp'
import Office from './Ms'
import CSS from './Css'
import Css3 from './Css3'
import JavaScript from './javascript'
import Photoshop from './Photoshop'
import Quize from './Quize'

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path='quize' element={<Quize />} />
        <Route path='html' element={<Html1 />} />
        <Route path='computerbasic' element={<Basic />} />
        <Route path='webdevelopment' element={<Web />} />
        <Route path='englishtypiing' element={<English />} />
        <Route path='tallyprime' element={<Tallyprime />} />
        <Route path='excel' element={<Excel />} />
        <Route path='msOffice' element={<Office />} />
        <Route path='tallyerp' element={<TallyEPR />} />
        <Route path='css' element={<CSS />} />
        <Route path='css3' element={<Css3 />} />
        <Route path='javascript' element={<JavaScript />} />
        <Route path='Photoshop' element={<Photoshop />} />
      </Routes>
    </>
  )
}

export default Dashboard