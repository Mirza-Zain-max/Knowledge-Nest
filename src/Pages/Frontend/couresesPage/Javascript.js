import { Col, Row } from 'antd'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

import img from '../../../asset/Courses/javascript.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCirclePlay, faClock, faDna, faFilePdf, faMoneyBill1, faPhoneVolume, faStairs } from '@fortawesome/free-solid-svg-icons'
const Javascript = () => {
    const[isModel,setIsModel]=useState(false)
    return (
        <>
            <main>
                <section className='py-5 px-sm-0 px-lg-5 bg-gray-200'>
                    <Container>
                        <Row>
                            <Col span={24}>
                                <div className='text-black text-3xl sm:text-5xl font-semibold text-center w-2/3 mx-auto'>JavaScript Course</div>
                                <p className='text-xl text-muted pt-2 text-center'>Learn Programming with JavaScript</p>
                            </Col>
                        </Row>
                        <Row className='pt-5'>
                            <Col xs={24} sm={24} md={16} lg={13}>
                                <div className="card bg-white rounded-3 shadow-lg ">
                                    <img src={img} alt="Computer_Basic" className='img-fluid rounded-3' />
                                    <div className="body py-3 px-4">
                                        <p className='text-justify fs-2 text-red-500'>About JavaScript</p>
                                        <p className='text-justify fs-6 py-2'>JavaScript is a  Programming language After taking a JavaScript course, you can create any kind of feature and functionality in your website..</p>
                                        <div>
                                            <p className='text-justify fs-2 text-red-500'>Course Syllabus</p>
                                            <ul className='list-decimal ms-4 '>
                                                <li className='text-xl font-bold py-2' >Basics (Beginner Level)</li>
                                                <div>
                                                    <p className='text-justify fs-6 font-bold' >Core Concepts:</p>
                                                    <ul className='list-disc ms-4'>
                                                        <li>Learn HTML and CSS (prerequisites for JavaScript in web development).</li>
                                                        <li>What is JavaScript?</li>
                                                        <li>Control Flow</li>
                                                        <li>Functions</li>
                                                        <li>DOM Manipulation</li>
                                                        <li>Debugging</li>
                                                    </ul>
                                                </div>
                                                <li className='text-xl font-bold py-2'> Intermediate Level</li>
                                                <div>
                                                    <p className='text-justify fs-6 font-bold' >Advanced JavaScript Concepts:</p>
                                                    <ul className='list-disc ms-4'>
                                                        <li>Objects and Arrays</li>
                                                        <li>ES6+ Features</li>
                                                        <li>Error Handling</li>
                                                        <li>Asynchronous JavaScript</li>
                                                        <li>Browser APIs</li>
                                                    </ul>
                                                </div>
                                                <li className='text-xl font-bold py-2'>Advanced Level</li>
                                                <div>
                                                    <p className='text-justify fs-6 font-bold' >Performance and Optimization:</p>
                                                    <ul className='list-disc ms-4'>
                                                        <li>Deep Dive into JavaScript Engine</li>
                                                        <li>Data Structures</li>
                                                        <li>Design Patterns</li>
                                                        <li>Unit Testing</li>
                                                        <li>Build Tools</li>
                                                        <li>Error Monitoring and Debugging</li>
                                                    </ul>
                                                </div>
                                                <li className='text-xl font-bold py-2'>Advanced Topics</li>
                                                <div>
                                                    <ul className='list-disc ms-4'>
                                                        <li>TypeScript</li>
                                                        <li>GraphQL</li>
                                                        <li>Web Performance</li>
                                                        <li>Testing and CI/CD</li>
                                                    </ul>
                                                </div>
                                                <li className='text-xl font-bold py-2'>Projects and Practice</li>
                                                <div>
                                                    <p className='text-justify fs-6 font-bold' >Beginner Projects:</p>
                                                    <ul className='list-disc ms-4'>
                                                       <li>To-do app.</li>
                                                       <li>Calculator.</li>
                                                       <li>Interactive quiz.</li>
                                                    </ul>
                                                    <p className='text-justify fs-6 font-bold' >Intermediate Projects:</p>
                                                    <ul className='list-disc ms-4'>
                                                       <li>Weather app (using APIs).</li>
                                                       <li>Notes app with localStorage.</li>
                                                       <li>E-commerce front end.</li>
                                                    </ul>
                                                    <p className='text-justify fs-6 font-bold' >Advanced Projects:</p>
                                                    <ul className='list-disc ms-4'>
                                                       <li>Full-stack blog app (React + Node.js).</li>
                                                       <li>Real-time chat app with WebSockets.</li>
                                                       <li>Clone popular apps (e.g., Twitter, Instagram).</li>
                                                    </ul>
                                                </div>
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
                                            <FontAwesomeIcon className='text-gray-600 pe-3 fs-4' icon={faClock} />3 Months Duration
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
                                    "Currently, there is no video available for this <i className='font-bold'>'JavaScript'</i> courses. It will be added soon. Thanks!  &#128522;"
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

export default Javascript