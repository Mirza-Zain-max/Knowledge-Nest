import { faFacebook, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../asset/logo.png'
const Menu = () => {
    return (
        <footer className='bg-gray-900 text-white py-3'>
            <div className='container'>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={12} >
                        <div className='border-white py-2 px-2 border-x-2 border-y-2 sm:w-full md:w-2/3 lg:w-3/4 my-3 sm:text-md lg:text-2xl   font-normal flex justify-center items-center gap-2'>
                            <img src={logo} alt="knowledgeNest" className='img-fluid w-14 rounded-5' />
                            KnowledgeNest Computer Academy </div>
                        <div className='border-white py-3 px-2 border-x-2 border-y-2 sm:w-full md:w-2/3 lg:w-3/4 my-3 sm:text-lg lg:text-2xl font-normal flex justify-center items-center gap-3'>
                            Follow Us :
                            <Link><FontAwesomeIcon className='text-white fs-2' icon={faFacebook} /></Link>
                            <Link><FontAwesomeIcon className='text-white fs-2' icon={faInstagram} /></Link>
                            <Link><FontAwesomeIcon className='text-white fs-2' icon={faGithub} /></Link>
                            <Link><FontAwesomeIcon className='text-white fs-2' icon={faWhatsapp} /></Link>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={6}>
                        <div className='fs-4'>Usefull Links</div>
                        <div className='flex flex-col gap-2'>
                            <Link to='/' >Home Page</Link>
                            <Link to='/allcourses' >All Courses</Link>
                            <Link to='/pdfNote'>Pdf Notes</Link>
                            <Link to='/contactme'>Contact Us </Link>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={6}>
                        <div className='fs-4'>IMPORTANT LINKS</div>
                        <div className='flex flex-col gap-2'>
                            <Link to='/privacyPolicy'>Privacy Policy</Link>
                            <Link to='/aboutus'>About Us</Link>
                            <Link to='/termsConditions'>Terms & Conditions</Link>
                            <Link to='/certification'>Certification</Link>
                        </div>
                    </Col>
                </Row>
                <hr />
            </div>
        </footer>
    )
}

export default Menu