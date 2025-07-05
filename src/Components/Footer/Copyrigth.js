import { Col, Row } from 'antd'
import React from 'react'
import { Container } from 'react-bootstrap'

const Copyrigth = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='bg-gray-900 text-white py-3'>
            <Container>
                <Row>
                    <Col span={24}>
                    <div className='text-center '>Copyright &copy; {year} KnowledgeNest Computer Academy. All rights reserved</div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Copyrigth