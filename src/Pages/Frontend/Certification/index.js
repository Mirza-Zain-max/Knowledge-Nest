import { Col, Image, Row } from 'antd'
import React from 'react'
import { Container } from 'react-bootstrap'

import img from '../../../asset/certicate.png'
const Certification = () => {
  return (
    <main>
      <section className='py-5 px-32'>
        <Container>
          <Row>
            <Col span={24}>
              <div className='text-black text-3xl sm:text-5xl font-semibold text-center w-2/3 mx-auto'>Our Certification</div>
            </Col>
          </Row>
          <Row className='pt-5'>
            <Col xs={24} sm={24} md={24} lg={12}>
              <div className='w-75'>
                <Image preview='true' src={img} alt="certicate_image" className='img-fluid' />
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
              <div className='text-justify space-y-2 text-xl pt-4'>
                <ul className='list-decimal space-y-2'>
                  <li>KnowledegeNest  Computer  Education is a Software Programming Computer Education Institute.</li>
                  <li>KnowledegeNest COMPUTER EDUCATION certificate will be valid in any government & Private job on the basis of terms and conditions given in that job, otherwise it will not be valid.</li>
                  <li>KnowledegeNest Computer Education Institute is Registered Under Ministery of MSME Government of PAKISTAN.</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}

export default Certification