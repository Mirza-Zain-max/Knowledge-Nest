import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

import img from '../../../asset/Courses/basic.png'
import img1 from '../../../asset/Courses/adca.png'
import img2 from '../../../asset/Courses/graphic.png'
import img3 from '../../../asset/Courses/tallyprime.png'
import img4 from '../../../asset/Courses/typing.png'
import img5 from '../../../asset/Courses/web.png'
import img6 from '../../../asset/Courses/core.png'
import img7 from '../../../asset/Courses/css.png'
import img8 from '../../../asset/Courses/css3.png'
import img9 from '../../../asset/Courses/dca.png'
import img10 from '../../../asset/Courses/excel.png'
import img11 from '../../../asset/Courses/html.png'
import img12 from '../../../asset/Courses/javascript.png'
import img13 from '../../../asset/Courses/msoffice.png'
import img14 from '../../../asset/Courses/photoshop.png'
import img15 from '../../../asset/Courses/tally.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'

const courses = [
    { id: 'adca', title: 'ADCA Course', img: img1, originalPrice: 5000, discountPrice: 0 },
    { id: 'tallyprime', title: 'Tally Prime Course', img: img3, originalPrice: 2000, discountPrice: 0 },
    { id: 'coraldraw', title: 'Coral Draw', img: img6, originalPrice: 1900, discountPrice: 0 },
    { id: 'css', title: 'CSS Course', img: img7, originalPrice: 1000, discountPrice: 0 },
    { id: 'css3', title: 'CSS 3 Course', img: img8, originalPrice: 1500, discountPrice: 0 },
    { id: 'dca', title: 'DCA Course', img: img9, originalPrice: 4000, discountPrice: 0 },
    { id: 'excel', title: 'Excel Course', img: img10, originalPrice: 2000, discountPrice: 0 },
    { id: 'html', title: 'HTML Course', img: img11, originalPrice: 1000, discountPrice: 0 },
    { id: 'photoshop', title: 'Photoshop Course', img: img14, originalPrice: 1700, discountPrice: 0 },
    { id: 'tallyErp9', title: 'Tally ERP 9 Course', img: img15, originalPrice: 2000, discountPrice: 0 },
    { id: 'javascript', title: 'JavaScripth Course', img: img12, originalPrice: 1500, discountPrice: 0 },
    { id: 'msoffice', title: 'Ms Office Course', img: img13, originalPrice: 2500, discountPrice: 0 },
    { id: 'grahicdesingning', title: 'Graphic Designing Course', img: img2, originalPrice: 2500, discountPrice: 0 },
    { id: 'englishtyping', title: 'English Typing Course', img: img4, originalPrice: 1700, discountPrice: 0 },
    { id: 'computerbasic', title: 'Computer Basic Course', img: img, originalPrice: 1500, discountPrice: 0 },
    { id: 'webdevelopment', title: 'Web Development Course', img: img5, originalPrice: 6000, discountPrice: 0 },
];
const Courses = () => {
    return (
        <main className='Courses'>
            <section className='py-5 '>
                <div className='container mx-auto'>
                    <Row className='pb-5'>
                        <Col span={24}>
                            <div className='text-black text-3xl sm:text-5xl font-semibold text-center w-2/3 mx-auto'>Our Courses</div>
                        </Col>
                    </Row>
                    <Row gutter={[20, 20]}>
                        {courses.map(course => (
                            <Col xs={24} sm={12} md={8} lg={6} key={course.id}>
                                <Link id='course_link' to={`/coursepages/${course.id}`}>
                                    <div className="card rounded-md py-3 px-2 course_box">
                                        <div className="card-header">
                                            <img src={course.img} className='img-fluid rounded-md' alt={course.title} />
                                        </div>
                                        <div className="card-body py-5">
                                            <div className="card-title">
                                                <h2 className='text-xl'>{course.title}</h2>
                                                <p className='text-xl'>&#40;4.8&#41; <FontAwesomeIcon className='text-yellow-400' icon={faStar} /> <FontAwesomeIcon className='text-yellow-400' icon={faStar} /> <FontAwesomeIcon className='text-yellow-400' icon={faStar} /> <FontAwesomeIcon className='text-yellow-400' icon={faStarHalfStroke} /> </p>
                                                <div className='flex space-x-3 pt-2'>
                                                    <ins className='no-underline'>
                                                        PKR {course.discountPrice}.00
                                                    </ins>
                                                    <del className='text-gray-500'>
                                                        PKR {course.originalPrice}
                                                    </del>
                                                    <p className='text-red-600'> |  100% OFF</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
        </main>
    )
}
export default Courses