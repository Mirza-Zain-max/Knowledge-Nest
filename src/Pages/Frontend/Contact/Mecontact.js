import React, { useState } from "react";
const Mecontact = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle the active question
    };

    const faqs = [
        {
            question: "How to do Registration? - رجسٹریشن کیسے کرنا ہے؟",
            answer: "To register, go to the registration page, fill out the form, and submit it.",
        },
        {
            question: "How to do Login? - لاگ ان کیسے کرنا ہے؟",
            answer: "Log in using your registered email and password on the login page.",
        },
        {
            question: "How to take admission in the course? - کورس میں داخلہ کیسے لینا ہے؟",
            answer: "Click on the desired course and follow the enrollment process.",
        },
        {
            question: "How to Check Exam Date? - امتحان کی تاریخ کیسے چیک کریں؟",
            answer: "Check the exam date in the course dashboard under 'Exam Schedule'.",
        },
        {
            question: "When and where will the exam be held? - امتحان کب اور کہاں ہوگا؟",
            answer: "The exam details will be shared via email and on the dashboard.",
        },
        {
            question: "How to watch the course video? - کورس کی ویڈیو کیسے دیکھنی ہے؟",
            answer: "Navigate to the course section and click on the video lessons to watch.",
        },
        {
            question: "How to get the certificate? - سرٹیفکیٹ کیسے ملے گا؟",
            answer: "Certificates are available after completing the course and passing the exam.",
        },
        {
            question: "Where will the certificate be valid? - سرٹیفکیٹ کہاں قابل قبول ہوگا؟",
            answer: "Certificates are valid globally and recognized by leading institutions.",
        },
    ];

    return (
        <main>
            <section className="py-5">
                <div className=" container w-3/4 mx-auto p-4  bg-gray-100 shadow-lg border">
                    <h1 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
                    <div className="space-y-1">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border rounded-md">
                                {/* Question Section */}
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-700 hover:bg-gray-100"
                                >
                                    {faq.question}
                                    <span className="text-xl">
                                        {activeIndex === index ? "−" : "+"}
                                    </span>
                                </button>

                                {/* Answer Section */}
                                {activeIndex === index && (
                                    <div className="p-4 text-gray-600 bg-gray-50">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container mt-3 pt-5 w-3/4 bg-gray-200 shadow-lg rounded-lg border">
                    <div className="max-w-4xl mx-auto p-6 ">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Location</h2>
                        <p className="text-gray-600 mb-4 text-center">
                            Visit us at our main office. We’re located at:
                        </p>
                        <div className="space-y-2">
                            <p className="text-lg text-gray-700">
                                📍 <strong>Address:</strong> 123 Knowledge Street, Education City, Country
                            </p>
                            <p className="text-lg text-gray-700">
                                📞 <strong>Phone:</strong> +123 456 7890
                            </p>
                            <p className="text-lg text-gray-700">
                                ✉️ <strong>Email:</strong> contact@knowledgenest.com
                            </p>
                        </div>
                        <div className="mt-6">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096767!2d144.95373531541104!3d-37.816279742021336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57749b9898e6e0!2sKnowledgeNest!5e0!3m2!1sen!2sus!4v1617853558708!5m2!1sen!2sus"
                                width="100%"
                                height="300"
                                allowFullScreen=""
                                loading="lazy"
                                className="rounded-lg border"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Mecontact;



