import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Allcourse from './AllCourses'
import About from './About'
import Contact from './Contact'
import Privacy from './Privacy Policy'
import Terms from './Terms'
import Certification from './Certification'
import Notes from './Notes'

const Frontend = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='allcourses' element={<Allcourse />} />
        <Route path='aboutus' element={<About />} />
        <Route path='contactme' element={<Contact />} />
        <Route path='privacyPolicy' element={<Privacy />} />
        <Route path='termsConditions' element={<Terms />} />
        <Route path='certification' element={<Certification />} />                         
        <Route path='pdfNote' element={<Notes />} />                         
      </Routes>
      <Footer />
    </>
  )
}

export default Frontend