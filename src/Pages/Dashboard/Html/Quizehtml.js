import React, { useState, useEffect, useCallback } from "react";
const questions = [
  {
    question: "1. What does HTML stand for?",
    options: ["a) Hyper Text Markup Language", "b) Hyperlinks and Text Markup Language", "c) Home Tool Markup Language", "d) Hyper Text Makeup Language"],
    answer: "a) Hyper Text Markup Language"
  },
  {
    question: "2. Which HTML tag is used to define an internal style sheet?",
    options: ["a) <css>", "b) <style>", "c) <script>", "d) <link>"],
    answer: "b) <style>"
  },
  {
    question: "3. Which HTML element is used to display a picture?",
    options: ["a) <img>", "b) <image>", "c) <picture>", "d) <media>"],
    answer: "a) <img>"
  },
  {
    question: "4. Which of the following is used to create a hyperlink in HTML?",
    options: ["a) <hyperlink>", "b) <link>", "c) <a>", "d) <url>"],
    answer: "c) <a>"
  },
  {
    question: "5. How do you create a numbered list in HTML?",
    options: ["a) <ul>", "b) <ol>", "c) <li>", "d) <dl>"],
    answer: "b) <ol>"
  },
  {
    question: "6. What is the correct HTML element to define important text?",
    options: ["a) <strong>", "b) <b>", "c) <em>", "d) <i>"],
    answer: "a) <strong>"
  },
  {
    question: "7. Which tag is used to define a table in HTML?",
    options: ["a) <table>", "b) <tab>", "c) <tr>", "d) <td>"],
    answer: "a) <table>"
  },
  {
    question: "8. Which tag is used to define a row in a table?",
    options: ["a) <row>", "b) <tr>", "c) <td>", "d) <th>"],
    answer: "b) <tr>"
  },
  {
    question: "9. Which tag is used to define a cell in a table?",
    options: ["a) <row>", "b) <cell>", "c) <td>", "d) <th>"],
    answer: "c) <td>"
  },
  {
    question: "10. How can you make a list that is not numbered?",
    options: ["a) <ol>", "b) <ul>", "c) <li>", "d) <dl>"],
    answer: "b) <ul>"
  },
  {
    question: "11. Which HTML attribute is used to define inline styles?",
    options: ["a) class", "b) style", "c) font", "d) styles"],
    answer: "b) style"
  },
  {
    question: "12. Which tag is used to define an input field in HTML?",
    options: ["a) <input>", "b) <field>", "c) <text>", "d) <textarea>"],
    answer: "a) <input>"
  },
  {
    question: "13. What does the <form> tag do in HTML?",
    options: ["a) Collects data", "b) Displays content", "c) Defines a form to collect user input", "d) Creates buttons"],
    answer: "c) Defines a form to collect user input"
  },
  {
    question: "14. What tag is used to create a drop-down list?",
    options: ["a) <select>", "b) <list>", "c) <dropdown>", "d) <option>"],
    answer: "a) <select>"
  },
  {
    question: "15. Which tag is used to create a checkbox in HTML?",
    options: ["a) <check>", "b) <input type='checkbox'>", "c) <button>", "d) <checkbox>"],
    answer: "b) <input type='checkbox'>"
  },
  {
    question: "16. How do you make a bulleted list in HTML?",
    options: ["a) <ul>", "b) <ol>", "c) <li>", "d) <dl>"],
    answer: "a) <ul>"
  },
  {
    question: "17. Which HTML tag is used for displaying a video?",
    options: ["a) <media>", "b) <video>", "c) <source>", "d) <movie>"],
    answer: "b) <video>"
  },
  {
    question: "18. Which tag is used to display a horizontal rule (line) in HTML?",
    options: ["a) <hr>", "b) <line>", "c) <rule>", "d) <hline>"],
    answer: "a) <hr>"
  },
  {
    question: "19. How can you specify a link to an external stylesheet in HTML?",
    options: ["a) <link>", "b) <style>", "c) <css>", "d) <script>"],
    answer: "a) <link>"
  },
  {
    question: "20. How do you insert a comment in HTML?",
    options: ["a) <!-- comment -->", "b) // comment", "c) /* comment */", "d) # comment"],
    answer: "a) <!-- comment -->"
  },
  {
    question: "21. What is the correct HTML element for the largest heading?",
    options: ["a) <h6>", "b) <h5>", "c) <h1>", "d) <head>"],
    answer: "c) <h1>"
  },
  {
    question: "22. What is the correct HTML element to embed a JavaScript file?",
    options: ["a) <js>", "b) <script>", "c) <javascript>", "d) <embed>"],
    answer: "b) <script>"
  },
  {
    question: "23. Which tag is used to create an email link?",
    options: ["a) <a href='mailto:email@example.com'>", "b) <email>", "c) <link href='mailto:email@example.com'>", "d) <address>"],
    answer: "a) <a href='mailto:email@example.com'>"
  },
  {
    question: "24. What attribute is used to specify the URL of a linked page?",
    options: ["a) href", "b) src", "c) link", "d) url"],
    answer: "a) href"
  },
  {
    question: "25. Which HTML element defines navigation links?",
    options: ["a) <nav>", "b) <header>", "c) <footer>", "d) <section>"],
    answer: "a) <nav>"
  },
  {
    question: "26. Which tag is used to define the title of an HTML document?",
    options: ["a) <head>", "b) <meta>", "c) <title>", "d) <header>"],
    answer: "c) <title>"
  },
  {
    question: "27. How do you define the background color of a page in HTML?",
    options: ["a) <body style='background-color:#FF0000'>", "b) <body bg='#FF0000'>", "c) <body bgcolor='#FF0000'>", "d) <html bgcolor='#FF0000'>"],
    answer: "c) <body bgcolor='#FF0000'>"
  },
  {
    question: "28. How do you create a table cell that spans multiple rows?",
    options: ["a) rowspan", "b) colspan", "c) span", "d) merge"],
    answer: "a) rowspan"
  },
  {
    question: "29. Which HTML element is used to define a link to an external script?",
    options: ["a) <link>", "b) <script src=''></script>", "c) <src>", "d) <external>"],
    answer: "b) <script src=''></script>"
  },
  {
    question: "30. How do you add a background image in HTML?",
    options: ["a) background-image: url('image.jpg');", "b) <img src='background.jpg'>", "c) <body background='background.jpg'>", "d) <background>background.jpg</background>"],
    answer: "c) <body background='background.jpg'>"
  },
  {
    question: "31. Which tag is used to define an unordered list?",
    options: ["a) <ol>", "b) <ul>", "c) <li>", "d) <dl>"],
    answer: "b) <ul>"
  },
  {
    question: "32. What is the default value of the 'display' property in HTML?",
    options: ["a) inline", "b) block", "c) none", "d) inline-block"],
    answer: "b) block"
  },
  {
    question: "33. Which tag is used to define a line break in HTML?",
    options: ["a) <br>", "b) <hr>", "c) <break>", "d) <line>"],
    answer: "a) <br>"
  },
  {
    question: "34. What is the correct way to link an external JavaScript file?",
    options: ["a) <script src='file.js'></script>", "b) <link href='file.js'>", "c) <script href='file.js'></script>", "d) <java src='file.js'></java>"],
    answer: "a) <script src='file.js'></script>"
  },
  {
    question: "35. Which attribute is used to specify the text color in HTML?",
    options: ["a) color", "b) text-color", "c) font-color", "d) style='color'"],
    answer: "d) style='color'"
  },
  {
    question: "36. Which element is used to define the footer of a document?",
    options: ["a) <footer>", "b) <end>", "c) <bottom>", "d) <footer-section>"],
    answer: "a) <footer>"
  },
  {
    question: "37. How do you create a comment in HTML?",
    options: ["a) <!-- Comment -->", "b) // Comment", "c) /* Comment */", "d) # Comment"],
    answer: "a) <!-- Comment -->"
  },
  {
    question: "38. Which HTML element is used for drawing graphics?",
    options: ["a) <canvas>", "b) <img>", "c) <svg>", "d) <graphics>"],
    answer: "a) <canvas>"
  },
  {
    question: "39. Which HTML element is used to define metadata about a document?",
    options: ["a) <meta>", "b) <head>", "c) <header>", "d) <footer>"],
    answer: "a) <meta>"
  },
  {
    question: "40. How do you specify the character encoding in HTML?",
    options: ["a) <meta charset='UTF-8'>", "b) <meta encoding='UTF-8'>", "c) <meta charset='utf-8'>", "d) <encoding>UTF-8</encoding>"],
    answer: "a) <meta charset='UTF-8'>"
  },
  {
    question: "41. Which HTML tag is used to define a description list?",
    options: ["a) <dl>", "b) <dt>", "c) <dd>", "d) <list>"],
    answer: "a) <dl>"
  },
  {
    question: "42. Which tag is used to define the title of an HTML document?",
    options: ["a) <header>", "b) <head>", "c) <body>", "d) <title>"],
    answer: "d) <title>"
  },
  {
    question: "43. What does the 'alt' attribute of an image tag do?",
    options: ["a) Defines the image size", "b) Provides alternate text for the image", "c) Specifies the link of the image", "d) Specifies the image format"],
    answer: "b) Provides alternate text for the image"
  },
  {
    question: "44. What does the <meta> tag define in an HTML document?",
    options: ["a) The page title", "b) The character encoding", "c) The page header", "d) The page content"],
    answer: "b) The character encoding"
  },
  {
    question: "45. What is the purpose of the 'target' attribute in a link?",
    options: ["a) Specifies where to open the linked document", "b) Specifies the link destination", "c) Specifies the link color", "d) Specifies the size of the link"],
    answer: "a) Specifies where to open the linked document"
  },
  {
    question: "46. Which tag is used to define the header of an HTML document?",
    options: ["a) <header>", "b) <top>", "c) <head>", "d) <body>"],
    answer: "a) <header>"
  },
  {
    question: "47. Which HTML tag is used to define a footer for a document?",
    options: ["a) <footer>", "b) <bottom>", "c) <end>", "d) <section>"],
    answer: "a) <footer>"
  },
  {
    question: "48. What attribute does the <input> tag use to define the type of input field?",
    options: ["a) type", "b) name", "c) value", "d) format"],
    answer: "a) type"
  },
  {
    question: "49. How do you create a new line in HTML?",
    options: ["a) <break>", "b) <new-line>", "c) <line>", "d) <br>"],
    answer: "d) <br>"
  },
  {
    question: "50. Which of the following is the correct HTML element to link an external stylesheet?",
    options: ["a) <link href='style.css'>", "b) <stylesheet>style.css</stylesheet>", "c) <style src='style.css'>", "d) <css>style.css</css>"],
    answer: "a) <link href='style.css'>"
  }
];

const Html1 = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [lockedAnswers, setLockedAnswers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30); // Timer state
  const [isTimeOver, setIsTimeOver] = useState(false); // To check if the time is over

  const handleNext = useCallback(() => {
    // Lock the current question before moving forward
    const updatedLockedAnswers = [...lockedAnswers];
    updatedLockedAnswers[currentQuestionIndex] = true;
    setLockedAnswers(updatedLockedAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(30); // Reset timer for the next question
      setIsTimeOver(false); // Reset time over state
    }
  }, [lockedAnswers, currentQuestionIndex]);

  useEffect(() => {
    if (timer === 0) {
      handleNext(); // Move to the next question if time is over
      return;
    }

    const interval = setInterval(() => {
      if (timer > 0 && !isTimeOver) {
        setTimer((prevTimer) => prevTimer - 1); // Decrease timer
      }
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [timer, isTimeOver, handleNext]);


  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setTimer(30); // Reset timer when going to the previous question
    }
  };

  const handleAnswerSelection = (answer) => {
    // Allow answer selection only if the question is not locked
    if (lockedAnswers[currentQuestionIndex]) return;

    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    const calculatedScore = selectedAnswers.filter(
      (answer, index) => answer === questions[index].answer
    ).length;
    setScore(calculatedScore);
    setShowModal(true);
  };

  const currentQuestion = questions[currentQuestionIndex];
  const percentage = ((score / questions.length) * 100).toFixed(2);

  // Emoji logic based on score
  const getEmojiForScore = () => {
    if (score === questions.length) {
      return "🎉 Excellent!";
    } else if (score >= questions.length / 2) {
      return "🙂 Good Job!";
    } else {
      return "😞 Better luck next time!";
    }
  };

  return (
    <main className="py-5">
      <div
        className="container flex justify-center items-center flex-col border-gray-400"
        style={{ height: "80vh" }}
      >
        <div className="w-full max-w-xl mx-auto shadow-2xl py-4 px-3" style={{ position: "relative" }}  >
          <h2 className="fs-2 font-bold text-center">Html Quiz</h2>
          <p className="fs-5 font-bold text-center">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          <div
            className="timer-card"
            style={{
              position: "absolute",
              marginBottom: "5px",
              top: "10px",
              right: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="timer-circle"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#1d3557",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                border: "5px solid red",
                fontSize: "24px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {timer}
            </div>
          </div>

          <div className="py-3 space-y-2">
            <h3 className="fs-5 font-bold">{currentQuestion.question}</h3>
            <div className="space-y-2">
              {currentQuestion.options.map((option, index) => (
                <div
                  key={index}
                  className={`p-2 border rounded ${lockedAnswers[currentQuestionIndex]
                    ? option === currentQuestion.answer
                      ? "border-green-500"
                      : selectedAnswers[currentQuestionIndex] === option
                        ? "border-red-500"
                        : "border-gray-300"
                    : "border-gray-300"
                    }`}
                >
                  <input
                    type="radio"
                    name={`answer-${currentQuestionIndex}`}
                    value={option}
                    checked={selectedAnswers[currentQuestionIndex] === option}
                    onChange={() => handleAnswerSelection(option)}
                    disabled={lockedAnswers[currentQuestionIndex]} // Disable input if locked
                  />
                  <label className="ml-2">{option}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-red-700 text-white py-2 px-4 rounded-md hover:bg-purple-700 hover:text-white transition-all "
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            {currentQuestionIndex === questions.length - 1 ? (
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-green-700 hover:text-white transition-all"
                onClick={handleSubmit}
                disabled={!selectedAnswers[currentQuestionIndex]} // Disable if no answer is selected
              >
                Submit
              </button>
            ) : (
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-green-700 hover:text-white transition-all"
                onClick={handleNext}
                disabled={!selectedAnswers[currentQuestionIndex]} // Disable if no answer is selected
              >
                Next
              </button>
            )}
          </div>

          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white px-6 py-3 rounded-lg w-80 text-center">
                <h3 className="text-xl font-semibold mb-0">
                  Your Score: {score} / {questions.length}
                </h3>
                <div className="h-2 bg-gray-300 rounded">
                  <div
                    style={{ width: `${percentage}%` }}
                    className="h-full bg-green-500 text-center text-red-500 mt-5 leading-10"
                  >
                    {percentage}%
                  </div>
                </div>

                {/* Emoji based on score */}
                <p className="text-2xl mt-9 h-16">{getEmojiForScore()}</p>
                <button onClick={() => setShowModal(false)} className="mt-12 mb-4 bg-red-700 text-white py-2 px-4 rounded hover:bg-purple-600 "> Close </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Html1;


