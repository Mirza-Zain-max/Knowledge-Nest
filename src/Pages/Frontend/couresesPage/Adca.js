import React, { useState } from 'react'
import { Col, Row } from 'antd'
import { Container } from 'react-bootstrap'

import img from '../../../asset/Courses/adca.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCirclePlay, faClock, faDna, faFilePdf, faMoneyBill1, faPhoneVolume, faStairs } from '@fortawesome/free-solid-svg-icons'
const Adca = () => {
    const [isModel, setIsModel] = useState(false)
    return (
        <>
            <main>
                <section className='py-5 px-sm-0 px-lg-5 bg-gray-200'>
                    <Container>
                        <Row>
                            <Col span={24}>
                                <div className='text-black text-3xl sm:text-5xl font-semibold text-center w-2/3 mx-auto'>ADCA Course</div>
                                <p className='text-xl text-muted pt-2 text-center'>ADCA, Advance Diploma In Computer Application, Learn Full ADCA Course in Urdu</p>
                            </Col>
                        </Row>
                        <Row className='pt-5'>
                            <Col xs={24} sm={24} md={16} lg={13}>
                                <div className="card bg-white rounded-3 shadow-lg ">
                                    <img src={img} alt="Computer_Basic" className='img-fluid rounded-3' />
                                    <div className="body py-3 px-4">
                                        <p className='text-justify fs-2 py-2 text-red-600'>Full Form of ADCA in Computer</p>
                                        <p className='text-justify text-lg pt-2'>Advance Diploma in  Computer Applications (ADCA) is a type of academic program that teaches  computer applications and related skills. It is typically a long-term course that can be completed in one Year.</p>
                                        <p className='text-justify fs-2 py-2 text-red-600'>ADCA Job Opportunities</p>
                                        <p className='text-justify text-lg pt-2'>The goal of a ADCA program is to provide students with the knowledge and skills they need to use computers effectively in a variety of settings, including business, education, and personal efforts. Upon completing a ADCA program, students may be able to pursue entry-level positions in fields such as data entry, customer service, or office administration. Some ADCA graduates may also choose to continue their education by pursuing a bachelors degree in a related field, such as computer science or information technology.</p>
                                        <p className='text-justify fs-3 py-2 text-red-600  '>ADCA Course Syllabus</p>
                                        <ul className='pt-2 ms-4 list-disc text-lg'>
                                            <li>Complete Fundamental of Computer</li>
                                            <li>Manage all files and folders on the computer</li>
                                            <li>Microsoft Word</li>
                                            <li>Microsoft Excel</li>
                                            <li>Advance Excel</li>
                                            <li>Microsoft power point</li>
                                            <li>Tally Prime</li>
                                            <li>Photoshop</li>
                                            <li>Corel Draw</li>
                                            <li>InDesign</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>CSS 3</li>
                                        </ul>
                                        <p className='text-justify text-lg pt-2'>Anyone can easily do this computer course online sitting at home.You can learn this course in Hindi language</p>
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
                                            <FontAwesomeIcon className='text-green-600 pe-3 fs-4' icon={faMoneyBill1} />Rs.0.00 <del className='pe-2' >Rs.5000</del> | <span className='text-red-500'>100% Off </span>
                                        </div>
                                        <div className='flex space-x-2 fs-6 items-center'>
                                            <FontAwesomeIcon className='text-gray-600 pe-3 fs-4' icon={faClock} />12 Months Duration
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
                                        <button onClick={() => setIsModel(true)}  className="text-white text-xl text-center font-semibold box-decoration-slice bg-gradient-to-r from-green-900 to-green-700 px-4 py-3"> Watch All Videos </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        {isModel && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 mx-3">
                                <div className="bg-white rounded-lg p-6 w-full max-w-md">
                                    <h2 className="text-3xl font-semibold mb-4 text-center pt-2 text-green-600">Message</h2>
                                    <div className='text-lg pb-2 text-justify'>
                                    "Currently, there is no video available for this <i className='font-bold'>'ADCA'</i> courses. It will be added soon. Thanks!  &#128522;"
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

export default Adca