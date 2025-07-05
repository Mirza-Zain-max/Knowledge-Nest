import { Col, Row } from 'antd'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

import img from '../../../asset/Courses/typing.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCirclePlay, faClock, faDna, faFilePdf, faMoneyBill1, faPhoneVolume, faStairs } from '@fortawesome/free-solid-svg-icons'
const Typing = () => {
    const [isModel,setIsModel]=useState(false)
    return (
        <>
            <main>
                <section className='py-5 px-sm-0 px-lg-5 bg-gray-200'>
                    <Container>
                        <Row>
                            <Col span={24}>
                                <div className='text-black text-3xl sm:text-5xl font-semibold text-center w-2/3 mx-auto'>English Typing Course</div>
                                <p className='text-xl text-muted pt-2 text-center'>Boost Your Typing Skills</p>
                            </Col>
                        </Row>
                        <Row className='pt-5'>
                            <Col xs={24} sm={24} md={16} lg={13}>
                                <div className="card bg-white rounded-3 shadow-lg ">
                                    <img src={img} alt="Computer_Basic" className='img-fluid rounded-3' />
                                    <div className="body py-3 px-4">
                                        <p className='text-justify fs-2 py-2 text-red-600'>About English Typing Course.</p>
                                        <p className='text-justify fs-4 py-2'>Welcome to Our English Typing Course</p>
                                        <p className='text-justify text-lg pt-2'>Unlock the full potential of your typing abilities with our comprehensive English typing course. Designed to cater to learners of all levels, our course provides you with the tools and techniques needed to improve your typing speed, accuracy, and overall efficiency. <br />In this english typing course, we will teach students everything. <br /> Such as :-</p>
                                        <ul className='list-decimal ps-4 pt-2 fs-6'>
                                            <li className='font-bold' >Fundamentals of Typing</li>
                                            <p className='' >Whether you are a beginner or looking to refresh your skills, we start with the basics of touch typing, ensuring you understand the layout and function of each key</p>
                                            <li className='font-bold' >Speed and Accuracy</li>
                                            <p className='' >Through structured exercises and real-time feedback, you will quickly increase your typing speed while maintaining a high level of accuracy.</p>
                                            <li className='font-bold' >Typing Practice</li>
                                            <p className='' >Engage with a variety of practice texts that range from simple sentences to complex paragraphs, helping you apply your skills in different contexts.</p>
                                            <li className='font-bold' >Advanced Techniques</li>
                                            <p className='' >Learn to handle special characters, numbers, and complex formats effortlessly, making you a versatile typist ready for any challenge.</p>
                                            <li className='font-bold' >Progress Tracking</li>
                                            <p className='' >Monitor your improvement with detailed statistics on your words per minute (WPM) and accuracy rates, motivating you to reach new milestones.</p>
                                        </ul>
                                        <p className='text-justify text-lg pt-2'> After doing this  computer course, you will be able to get many more jobs like data entry.</p>
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
                                            <FontAwesomeIcon className='text-green-600 pe-3 fs-4' icon={faMoneyBill1} />Rs.0.00 <del className='pe-2' >Rs.1700</del> | <span className='text-red-500'>100% Off </span>
                                        </div>
                                        <div className='flex space-x-2 fs-6 items-center'>
                                            <FontAwesomeIcon className='text-gray-600 pe-3 fs-4' icon={faClock} />6 Months Duration
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
                                    "Currently, there is no video available for this <i className='font-bold'>'English'</i> courses. It will be added soon. Thanks!  &#128522;"
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

export default Typing