import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Row, Space } from 'antd'
import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Hero = () => {
  const handleSearch = (query) => {
    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(googleSearchURL, "_blank"); // Opens the search in a new tab
  };

  return (
    <main className='Hero'>
      <section className='Hero_Section'>
        <Container className=''>
          <Row>
            <Col span={24} className='w-2/4 mx-auto text-center'>
              <div className='text-white text-3xl sm:text-5xl font-extrabold text-center w-2/3 mx-auto'>Learn Free Computer Courses, With
                Free Call Support.</div>
              <div className='text-yellow-500 text-center py-3 text-2xl font-semibold tracking-wide mb-5'>
                Mon to Sat - Call Timing Morning 10Am to 10Pm
              </div>
              <div className='mb-5'>
                <Space>
                  <button onClick={() => handleSearch("Graphic Design")} className="bg-white text-blue-700 px-3 py-1 rounded-lg transition duration-300"><FontAwesomeIcon icon={faGraduationCap} />Graphic Design</button>
                  <button onClick={() => handleSearch(" Microsotf Office")} className="bg-white text-blue-700 px-3 py-1 rounded-lg transition duration-300"><FontAwesomeIcon icon={faGraduationCap} />Microsotf Office</button>
                </Space>
              </div>
              <Link className='bg-white text-black px-6 py-3 rounded-lg text-xl font-semibold hover:bg-blue-600 hover:text-white focus:ring-4 focus:ring-blue-300  transition duration-300'>Start Learning</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  )
}

export default Hero