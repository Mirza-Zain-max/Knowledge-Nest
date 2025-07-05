import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import "swiper/css/autoplay";
import { Col, Row } from "antd";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      name: "John Doe",
      course: "Web Development",
      feedback: "The course was amazing, and I learned so much!",
      rating: 5,
    },
    {
      name: "Jane Smith",
      course: "Graphic Design",
      feedback: "Great course! The instructor explained everything in detail.",
      rating: 4.5,
    },
    {
      name: "Michael Lee",
      course: "Computer Basic",
      feedback: "Very helpful for beginners. Highly recommend!",
      rating: 4,
    },
    {
      name: "Sara Khan",
      course: "Advance Excel",
      feedback: "Loved it! The examples were practical and easy to follow.",
      rating: 5,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    feedback: "",
    rating: "",
  });

  const courses = [
    "English Typing",
    "Computer Basic",
    "Web Development",
    "Tally Prime",
    "Graphic Design",
    "ADCA",
    "Advance Excel",
    "Coral Draw",
    "Microsoft Office",
    "Photoshop",
    "DCA",
    "Tally ERP9",
    "HTML",
    "CSS",
    "CSS3",
    "JavaScript",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.course || !formData.feedback || !formData.rating) {
      alert("Please fill in all the fields.");
      return;
    }

    // Add the new review to the reviews list
    setReviews((prevReviews) => [
      ...prevReviews,
      { ...formData, rating: parseFloat(formData.rating) },
    ]);
    window.notify("Your review has Successfully added", 'success')

    // Clear the form
    setFormData({ name: "", course: "", feedback: "", rating: "" });
    // Close the modal
    setIsModalOpen(false);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />
        ))}
        {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-400" />}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <FontAwesomeIcon key={i + fullStars} icon={faStar} className="text-gray-300" />
        ))}
      </>
    );
  };

  return (
    <main className="review">
      <div className="container">
        <Row className='pb-5'>
          <Col span={24}>
            <div className='text-black text-3xl sm:text-5xl font-semibold text-center w-2/3 mx-auto'>Student Reviews</div>
          </Col>
        </Row>
      </div>
      <div className="container mx-auto py-10">
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4">Add Your Review</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Course </label>
                  <select name="course" value={formData.course} onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" required >
                    <option value="" disabled>  Choose a course  </option>
                    {courses.map((course) => (
                      <option key={course} value={course}>  {course}  </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1"> Your Feedback </label>
                  <textarea name="feedback" value={formData.feedback} onChange={handleInputChange} rows="4" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" required></textarea>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">  Rating (1 to 5) </label>
                  <input type="number" name="rating" value={formData.rating} onChange={handleInputChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" min="1" max="5" step="0.5" required />
                </div>
                <div className="text-right">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="bg-gray-400 text-white px-4 py-2 rounded-lg mr-3 hover:bg-gray-500" >  Cancel </button>
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" >  Submit</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Carousel */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-300 rounded-lg p-4 shadow-md">
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-500">Course: {review.course}</p>
                <div className="flex items-center my-2">{renderStars(review.rating)}</div>
                <p className="text-sm mt-2">{review.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mb-6 mt-5">
          <button onClick={() => setIsModalOpen(true)} className="bg-green-800 text-white px-4 py-3 rounded-lg text-xl font-semibold hover:bg-blue-600 hover:text-white focus:ring-4 focus:ring-blue-300 transition duration-300"  > Add Review <FontAwesomeIcon icon={faPlus} /></button>
        </div>
      </div>
    </main>
  );
};

export default Reviews;
