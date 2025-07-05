import { useNavigate } from 'react-router-dom';
import { Col, Row } from 'antd'
import { Container } from 'react-bootstrap'
const Quizepage = () => {
    const navigate = useNavigate();

    const quizzes = [
        { id: 'computerbasic', title: 'Basic Computer Quize', duration: '3 Months', fee: '0.00' },
        { id: 'webdevelopment', title: 'Web Development Quize', duration: '12 Months', fee: '0.00' },
        { id: 'englishtypiing', title: 'English Typing Quize', duration: '6 Months', fee: '0.00' },
        { id: 'tallyprime', title: 'Tally Prime Quize', duration: '1 Month', fee: '0.00' },
        { id: 'excel', title: 'Excel Quize', duration: '1 Month', fee: '0.00' },
        { id: 'msoffice', title: 'MS Office Quize', duration: '3 Months', fee: '0.00' },
        { id: 'tallyerp', title: 'Tally ERP 9 Quize', duration: '1 Month', fee: '0.00' },
        { id: 'html', title: 'HTML Quize', duration: '3 Months', fee: '0.00' },
        { id: 'css', title: 'CSS Quize', duration: '3 Months', fee: '0.00' },
        { id: 'css3', title: 'CSS 3 Quize', duration: '3 Months', fee: '0.00' },
        { id: 'javascript', title: 'JavaScript Quize', duration: '3 Months', fee: '0.00' },
        { id: 'photoshop', title: 'Photoshop Quize', duration: '3 Months', fee: '0.00' },
    ];
    return (
        <main>
            <section className='py-5 sm:px-15 md:px-0 lg:px-32'>
                <Container className='pb-5'>
                    <Row>
                        <Col span={24}>
                            <div className='text-black text-3xl sm:text-5xl font-semibold text-center w-2/3 mx-auto'>Computer Quize </div>
                        </Col>
                    </Row>
                    <Row className="pt-5" gutter={[8, 12]}>
                        {quizzes.map((quiz) => (
                            <Col xs={24} sm={12} md={8} lg={8} key={quiz.id}>
                                <div
                                    className="card px-2 shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-200 "
                                    onClick={() => navigate(`/dashboard/${quiz.id}`)}
                                >
                                    <div className="fs-3 text-center py-2">{quiz.title}</div>
                                    <hr />
                                    <div className="text-center py-2">
                                        <div className="fs-5 text-muted">Duration: {quiz.duration}</div>
                                        <div className="fs-5 text-muted">Fee: {quiz.fee}</div>
                                    </div>
                                    <hr />
                                    <div className="text-center py-2 my-2">
                                        <button className="border-2 border-blue-600 text-blue-700 py-2 px-3 font-bold hover:bg-blue-600 hover:text-white">
                                            Start Quiz
                                        </button>
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
export default Quizepage;
