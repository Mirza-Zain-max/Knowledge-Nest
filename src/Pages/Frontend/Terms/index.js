import { Col, Row } from 'antd'
import React from 'react'
import { Container } from 'react-bootstrap'

const Terms = () => {
  return (
    <main>
      <section className='py-5 sm:px-0 md:px-0 lg:px-32'>
        <Container>
          <Row>
            <Col span={24}>
              <div className='text-black text-3xl sm:text-5xl font-semibold text-center w-2/3 mx-auto'>Terms and Conditions</div>
            </Col>
          </Row>
          <Row className='pt-5'>
            <Col span={24}>
              <div className='text-justify space-y-2 text-xl'>
                <ul className='list-decimal space-y-2 px-2 '>
                  <li>KnowledegeNest Computer Education Provide 100% Free Computer Courses to Students and Individuals Only.</li>
                  <li>KnowledegeNest Computer Website is not for Commercial Uses.</li>
                  <li>Free computer Courses of KnowledegeNest Computer Education is not for any Institutions and Organisations.</li>
                  <li>If Any Institute and Organisation Use This KnowledegeNest Computer Website for Their Profit then We Will Take a legal Action on Institute and Organisation.</li>
                  <li>You Can Enroll in One Course at a Time after Completing the first Course, You can Enroll in other Course.</li>
                  <li>KnowledegeNest Computer Education certificate will be valid in any government & Private job on the basis of terms and conditions given in that job, otherwise it will not be valid.</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}

export default Terms