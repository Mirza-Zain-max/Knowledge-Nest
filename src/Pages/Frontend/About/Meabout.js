import React from 'react'
import { Col, Row } from 'antd'

import logo from '../../../asset/logo.png'
import bilal from '../../../asset/bilal.png'
const Meabout = () => {
    return (
        <main>
            <section className='py-5'>
                <div className="container">
                    <Row>
                        <Col span={24} className='text-center flex justify-center'>
                            <div className='text-center'>
                                <img src={logo} alt="Website_logo" className='img-fluid w-36 rounded-lg' />
                            </div>
                        </Col>
                        <Col span={24}>
                            <p className='text-2xl  font-bold text-center pt-4'>About of KnowlegeNest Computer Education</p>
                            <p className='w-3/4 mx-auto pt-3 text-lg text-justify'>KnowlegeNest  Computer  Education is the world's best No.1 computer institute. It is the only institute globally that offers free computer courses along with complimentary certification, you are not charged even 1PKR for the certificate.
                                This certificate is valid in both private and government jobs, and you can use it anywhere in Pakistan.</p>
                            <hr className='mt-4' />
                        </Col>
                        <Col span={24}>
                            <p className='text-2xl  font-bold text-center pt-4'>Role of  KnowlegeNest  Computer  Education</p>
                            <p className='w-3/4 mx-auto pt-3 text-lg text-justify'> At KnowledgeNest, we believe that knowledge is the foundation of growth and opportunity. That’s why we offer **free courses** to empower learners from all walks of life. Whether you’re a beginner or looking to enhance your skills, our platform is your go-to place for learning without limits.
                                Join the Nest today and unlock your potential—because education should be accessible to everyone!</p>
                            <hr className='mt-4' />
                        </Col>
                        <Col span={24} >
                            <div className='text-2xl font-bold text-center pt-4'>
                                Founder and Director of KnowlegeNest Computer Education
                            </div>
                            <div className='flex justify-center items-center pt-3 pb-3'>
                                <img src={bilal} alt="CEO_of_website" className='img-fluid w-40' />
                            </div>
                            <div className='text-center'>
                                <p className='text-2xl font-bold'>  Muhammad Bilal</p>
                                <p className='text-lg'> The Founder and Director of KnowlegeNest Computer Education is <b>Muhammad Bilal</b> </p>
                            </div>
                        </Col>
                        <Col span={24}>
                            <p className='w-3/4 mx-auto pt-3 text-lg text-justify'>
                                Greetings,
                            </p>
                            <p className='w-3/4 mx-auto pt-1 fs-6 text-justify'>
                                I'm Muhammad Bilal, a seasoned Web developer and dedicated computer teacher. My passion for technology and education converged in a dream—to bring quality computer education to people worldwide. Today, I'm proud to share that this dream is now a reality.
                            </p>
                            <p className='w-3/4 mx-auto pt-1 fs-6 text-justify'>
                                As a Web developer, I bring substantial expertise to the table. My commitment to education has led to the realization of my vision—providing free computer courses along with certificates, all without any financial burden. I firmly believe that knowledge is a powerful catalyst for personal and professional growth.
                            </p>
                            <p className='w-3/4 mx-auto pt-1 fs-6 text-justify'>
                                I invite you to join me on this educational journey. The free computer course I offer is crafted to empower you with essential skills and knowledge. I trust this learning experience will not only be enriching but also pave the way for significant success in your life.
                            </p>
                            <p className='w-3/4 mx-auto pt-1 fs-6 text-justify'> 
                                Thank you for choosing to be a part of this educational initiative. I look forward to witnessing your achievements and the positive impact they'll have on your future.
                            </p>
                            <p className='w-3/4 mx-auto pt-3 fs-6 text-justify'>   Best regards,   Muhammad Bilal</p>
                        </Col>
                    </Row>
                </div>
            </section>
        </main>
    )
}

export default Meabout