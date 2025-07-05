import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Coursespage from './Frontend/couresesPage'
import Dashboard from './Dashboard'
import NotesPdf from './Dashboard/NotesPdf'

const Index = () => {
  return (
    <>
    <Routes>
        <Route path='/*' element={<Frontend/>}/>
        <Route path='dashboard/*' element={<Dashboard/>}/>
        <Route path='coursepages/*' element={<Coursespage/>}/>
        <Route path='pdfnotes/*' element={<NotesPdf/>}/>
    </Routes>
    </>
  )
}

export default Index