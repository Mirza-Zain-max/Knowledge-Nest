import React from 'react';
import { Col, Row, Button } from 'antd';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const courses = [
    { id: "basic-computer", title: "Basic Computer Notes", duration: "3 Months", fee: "0.00" },
    { id: "webnotes", title: "Web Development Notes", duration: "12 Months", fee: "0.00" },
    { id: "typing", title: "English Typing Notes", duration: "6 Months", fee: "0.00" },
    { id: "tally-prime", title: "Tally Prime Notes", duration: "1 Month", fee: "0.00" },
    { id: "excel", title: "Excel Notes", duration: "1 Month", fee: "0.00" },
    { id: "ms-office", title: "Ms Office Notes", duration: "3 Months", fee: "0.00" },
    { id: "tally-erp", title: "Tally ERP 9 Notes", duration: "1 Month", fee: "0.00" },
    { id: "html", title: "HTML Notes", duration: "3 Months", fee: "0.00" },
    { id: "css", title: "CSS Notes", duration: "3 Months", fee: "0.00" },
    { id: "css3", title: "CSS 3 Notes", duration: "3 Months", fee: "0.00" },
    { id: "javascript", title: "JavaScript Notes", duration: "3 Months", fee: "0.00" },
    { id: "photoshop", title: "Photoshop Notes", duration: "3 Months", fee: "0.00" },
];

const Notecourses = () => {
    const navigate = useNavigate();

    return (
        <main>
            <section className='py-5 sm:px-15 md:px-0 lg:px-32'>
                <Container>
                    <Row>
                        <Col span={24}>
                            <div className='text-black text-3xl sm:text-5xl font-semibold text-center w-2/3 mx-auto'>
                                Computer Pdf Notes
                            </div>
                        </Col>
                    </Row>
                    <Row className='pt-5' gutter={[8, 12]}>
                        {courses.map((course) => (
                            <Col key={course.id} xs={24} sm={12} md={8} lg={8}>
                                <div className="card px-2 shadow-lg">
                                    <div className="fs-3 text-center py-2">{course.title}</div>
                                    <hr />
                                    <div className='text-center py-2'>
                                        <div className="fs-5 text-muted">Duration: {course.duration}</div>
                                        <div className="fs-5 text-muted">Fee: {course.fee}</div>
                                    </div>
                                    <hr />
                                    <div className='text-center py-2 my-2'>
                                        <Button 
                                            onClick={() => navigate(`/pdfnotes/${course.id}`)}
                                            className='border-2 border-blue-600 text-blue-700 py-2 px-3 font-bold hover:bg-blue-600 hover:text-white'
                                        >
                                            Notes Details
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </main>
    );
};

export default Notecourses;
