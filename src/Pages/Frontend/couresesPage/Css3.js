import { Col, Row } from 'antd'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

import img from '../../../asset/Courses/css3.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCircle, faCirclePlay, faClock, faDna, faFilePdf, faMoneyBill1, faPhoneVolume, faStairs } from '@fortawesome/free-solid-svg-icons'
const Css3 = () => {
    const [isModel,setIsModel]=useState(false)
    const topics = [
        {
            name: "Design Course",
            link: "https://www.google.com/search?q=3+Months+Computer+Course+Certification",
        },
        {
            name: "Computer Certificate",
            link: "https://www.google.com/search?q=Online+Computer+Certificate+Courses+Free",
        },
        {
            name: "CSS3 full courses",
            link: "https://www.google.com/search?q=Free+Basic+Computer+Course+with+Certificate",
        },
        {
            name: "Website Design",
            link: "https://www.google.com/search?q=Computer+Certificate+Courses",
        },
        {
            name: "O level computer course",
            link: "https://www.google.com/search?q=Free+Online+Computer+Courses",
        },
    ];
    return (
        <>
            <main>
                <section className='py-5 px-sm-0 px-lg-5 bg-gray-200'>
                    <Container>
                        <Row>
                            <Col span={24}>
                                <div className='text-black text-3xl sm:text-5xl font-semibold text-center w-2/3 mx-auto'>CSS 3 Course</div>
                                <p className='text-xl text-muted pt-2 text-center'>Design & use effects in your website using CSS 3.</p>
                            </Col>
                        </Row>
                        <Row className='pt-5'>
                            <Col xs={24} sm={24} md={16} lg={13}>
                                <div className="card bg-white rounded-3 shadow-lg ">
                                    <img src={img} alt="Computer_Basic" className='img-fluid rounded-3' />
                                    <div className="body py-3 px-4">
                                        <p className='text-justify fs-2 text-red-500'>About CSS 3</p>
                                        <p className='text-justify fs-6 py-2'>CSS3 is the Updated Version of Cascading Style Sheet</p>
                                        <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-2xl shadow-lg">
                                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Discover Related Topics</h2>
                                            <ul className="space-y-3 text-black ">
                                                {topics.map((topic, index) => (
                                                    <li key={index}>
                                                        <Link to={topic.link} target="_blank" rel="noopener noreferrer" className="block text-black hover:underline text-lg"   > {topic.name} <FontAwesomeIcon className='float-end' icon={faChevronRight} /> </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <p className='text-justify fs-6 py-2'>If you already know the HTML language then you can learn CSS</p>
                                        <hr />

                                        <div>
                                        <p className='text-justify fs-2 text-red-500'>Course Syllabus</p>
                                            <ul className='list-disc ms-4'>
                                             <li>Ch-1 Introduction to CSS3</li>
                                             <li>Ch-2 CSS3 Responsive Web Design Part 1</li>
                                             <li>Ch-2 CSS3 Responsive Web Design Part 2</li>
                                             <li>Ch-2 CSS3 Responsive web design part 3 (@media query)</li>
                                             <li>Ch-2 CSS3 Responsive Web Design Part 4</li>
                                             <li>Ch-2 CSS3 Responsive Web Design Part 5</li>
                                             <li>Ch-3 CSS3 Custom Scrollbar Designing</li>
                                             <li>Ch-4 CSS3 Flex</li>
                                             <li>Ch-5 CSS3 Properties</li>
                                             <li>Ch-6 Shorthand Properties Part 1</li>
                                             <li>Ch-6 Shorthand Properties Part 2</li>
                                             <li>Ch-7 CSS3 Animation Part 1</li>
                                             <li>Ch-7 CSS3 Animation Part 2</li>
                                             <li>Ch-7 CSS3 Animation Part 3</li>
                                             <li>Ch-7 CSS3 Animation Part 4</li>
                                             <li>Ch-7 CSS3 Animation Part 5</li>
                                             <li>Ch-7 CSS3 Animation Part 6</li>
                                             <li>Ch-7 CSS3 Animation Part 7</li>
                                             <li>Ch-7 CSS3 Animation Part 8</li>
                                             <li>Ch-7 CSS3 Animation Part 9</li>
                                             <li>Ch-7 CSS3 Animation Part 10</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className='pt-4'>
                            <Col xs={24} sm={24} md={16} lg={13}>
                                <div className="card rounded-3 shadow-lg">
                                    <div className="caed-header rounded-3">
                                        <div className="text-white text-3xl font-extrabold box-decoration-slice bg-gradient-to-r from-blue-900 to-blue-700 px-2 py-3"> Course Details </div>
                                    </div>
                                    <div className="card-body space-y-3">
                                        <div className='flex space-x-2 fs-6 items-center'>
                                            <FontAwesomeIcon className='text-green-600 pe-3 fs-4' icon={faMoneyBill1} />Rs.0.00 <del className='pe-2' >Rs.1500</del> | <span className='text-red-500'>100% Off </span>
                                        </div>
                                        <div className='flex space-x-2 fs-6 items-center'>
                                            <FontAwesomeIcon className='text-gray-600 pe-3 fs-4' icon={faClock} />1 Months Duration
                                        </div>
                                        <div className='flex space-x-2 fs-6 items-center'>
                                            <FontAwesomeIcon className='text-amber-500 pe-3 fs-4' icon={faStairs} />Beginner to Advance Level
                                        </div>
                                        <div className='flex space-x-2 fs-6 items-center'>
                                            <FontAwesomeIcon className='text-blue-700 pe-3 fs-4' icon={faCirclePlay} />Video Recording Classes
                                        </div>
                                        <div className='flex space-x-2 fs-6 items-center'>
                                            <FontAwesomeIcon className='text-red-600 pe-3 fs-4' icon={faCircle} />Live QNA on Every Sunday 6:00PM
                                        </div>
                                        <div className='flex space-x-2 fs-6 items-center'>
                                            <FontAwesomeIcon className='text-yellow-600 pe-3 fs-4' icon={faFilePdf} />PDF Notes Support
                                        </div>
                                        <div className='flex space-x-2 fs-6 items-center'>
                                            <FontAwesomeIcon className='text-cyan-400 pe-3 fs-4' icon={faPhoneVolume} /> Call Support Morning 10 AM to 10 PM
                                        </div>
                                        <div className='flex space-x-2 fs-6 items-center'>
                                            <FontAwesomeIcon className='text-fuchsia-600 pe-3 fs-4' icon={faDna} /> Lifetime Course Access
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={16} lg={13}>
                                <div className="card mt-4 rounded-3 shadow-lg">
                                    <div className="caed-header rounded-3">
                                        <div className="text-white text-3xl font-extrabold box-decoration-slice bg-gradient-to-r from-blue-900 to-blue-700 px-2 py-3"> Course Videos </div>
                                    </div>
                                    <div className="card-body">
                                    <button onClick={() => setIsModel(true)} className="text-white text-xl text-center font-semibold box-decoration-slice bg-gradient-to-r from-green-900 to-green-700 px-4 py-3"> Watch All Videos </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        {isModel && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 mx-3">
                                <div className="bg-white rounded-lg p-6 w-full max-w-md">
                                    <h2 className="text-3xl font-semibold mb-4 text-center pt-2 text-green-600">Message</h2>
                                    <div className='text-lg pb-2 text-justify'>
                                    "Currently, there is no video available for this <i className='font-bold'>'CSS 3'</i> courses. It will be added soon. Thanks!  &#128522;"
                                    </div>
                                    <div className="text-right">
                                        <button type="button" onClick={() => setIsModel(false)} className="bg-green-600 text-white px-4 py-2 rounded-lg mr-3 hover:bg-gray-500" >  Ok </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Container>
                </section>
            </main>
        </>
    )
}

export default Css3