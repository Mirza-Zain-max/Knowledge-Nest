import { Col, Row } from 'antd'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

import img from '../../../asset/Courses/msoffice.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCircle, faCirclePlay, faClock, faDna, faFilePdf, faMoneyBill1, faPhoneVolume, faStairs } from '@fortawesome/free-solid-svg-icons'
const Office = () => {
    const [isModel, setIsModel] = useState(false)
    const topics = [
        {
            name: "3 Months Computer Course Certification",
            link: "https://www.google.com/search?q=3+Months+Computer+Course+Certification",
        },
        {
            name: "Online Computer Certificate Courses Free",
            link: "https://www.google.com/search?q=Online+Computer+Certificate+Courses+Free",
        },
        {
            name: "Free Microsoft Office Computer Course with Certificate",
            link: "https://www.google.com/search?q=Free+Basic+Computer+Course+with+Certificate",
        },
        {
            name: "Microsoft Office online free Courses",
            link: "https://www.google.com/search?q=Computer+Certificate+Courses",
        },
        {
            name: "Microsoft Excel Free Courses",
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
                                <div className='text-black text-3xl sm:text-5xl font-semibold text-center w-2/3 mx-auto'>Ms Office Course</div>
                                <p className='text-xl text-muted pt-2 text-center'>Learn Full Ms Office Course</p>
                            </Col>
                        </Row>
                        <Row className='pt-5'>
                            <Col xs={24} sm={24} md={16} lg={13}>
                                <div className="card bg-white rounded-3 shadow-lg ">
                                    <img src={img} alt="Computer_Basic" className='img-fluid rounded-3' />
                                    <div className="body py-3 px-4">
                                        <p className='text-justify fs-2 text-red-500'>What is Ms Office ?</p>
                                        <p className='text-justify fs-6 py-2'>Microsoft Office, commonly referred to as MS Office, is a suite of productivity software applications developed by Microsoft. The suite includes a variety of programs that are designed to help users create, edit, and manage documents, spreadsheets, presentations, and more.</p>
                                        <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-2xl shadow-lg py-2">
                                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Discover Related Topics</h2>
                                            <ul className="space-y-3 text-black ">
                                                {topics.map((topic, index) => (
                                                    <li key={index}>
                                                        <Link to={topic.link} target="_blank" rel="noopener noreferrer" className="block text-black hover:underline text-lg"   > {topic.name} <FontAwesomeIcon className='float-end' icon={faChevronRight} /> </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className='pt-5'>
                                            <p className='text-justify fs-6'>Some of the most commonly used programs in the MS Office suite include:</p>
                                            <ul className='list-disc ms-4'>
                                                <li><b>Microsoft Word:</b> A word processing program used to create and edit documents, such as letters, reports, and resumes.</li>
                                                <li><b>Microsoft Excel:</b> A spreadsheet program used to create and manage data in tables and charts.</li>
                                                <li><b>Microsoft PowerPoint:</b> A presentation program used to create and display slideshows with images, text, and multimedia.</li>
                                            </ul>
                                            <p className='text-justify fs-6 pt-3'>MS Office is widely used in business, educational, and personal settings, and has become a standard tool for many professionals.</p>
                                        </div>
                                        <div>
                                            <p className='text-justify fs-2 text-red-500'>Ms Office Job Opportunities</p>
                                            <p className='text-justify fs-6 py-2'>Completing a course in Microsoft Office can open up a variety of job opportunities across different industries. Here are some examples of job roles that require proficiency in Microsoft Office</p>
                                            <ul className='list-decimal ms-4 pt-2'>
                                                <li> <b>Administrative Assistant: </b> Administrative assistants often use Microsoft Office applications such as Word, Excel, and PowerPoint to create documents, manage data, and prepare presentations.</li>
                                                <li><b>Customer Service Representative:</b> Customer service representatives often use Microsoft Outlook to manage email communication with customers and colleagues.</li>
                                                <li><b>Project Coordinator:</b> Project coordinators use Microsoft Project to plan and track projects, manage resources, and create project reports.</li>
                                                <li><b>Financial Analyst:</b> Financial analysts use Microsoft Excel to analyze and manipulate financial data, create financial models, and prepare financial reports.</li>
                                                <li><b>Human Resources Assistant:</b> Human resources assistants use Microsoft Word and Excel to create and manage employee documents, such as resumes, job descriptions, and performance evaluations.</li>
                                                <li><b>Marketing Assistant:</b> Marketing assistants use Microsoft PowerPoint to create presentations for sales meetings and marketing campaigns.</li>
                                            </ul>
                                            <p className='text-justify fs-6 py-3'>These are just a few examples of the many job opportunities that require proficiency in Microsoft Office applications. By taking a course in MS Office, you can develop the skills necessary to succeed in these roles and many others.</p>
                                            <div>
                                                <p className='text-justify fs-2 text-red-500'>Course Syllabus</p>
                                                <ul className='list-disc ms-4'>
                                                    <li>Microsoft Word</li>
                                                    <li>Microsoft Excel</li>
                                                    <li>Advance Excel</li>
                                                    <li>Microsoft Power Point</li>
                                                </ul>
                                                <p className='text-justify fs-6 pt-3'>Anyone can easily do this computer course online sitting at home.You can learn this course in Hindi language</p>
                                            </div>
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
                                            <FontAwesomeIcon className='text-green-600 pe-3 fs-4' icon={faMoneyBill1} />Rs.0.00 <del className='pe-2' >Rs.2500</del> | <span className='text-red-500'>100% Off </span>
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
                                        "Currently, there is no video available for this <i className='font-bold'>'Microsoft Office'</i> courses. It will be added soon. Thanks!  &#128522;"
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

export default Office