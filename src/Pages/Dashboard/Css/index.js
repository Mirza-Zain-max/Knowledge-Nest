import React, { useState, useEffect, useCallback } from "react";
const questions = [
  {
    number: 1,
    question: "Which property is used to change the background color of an element in CSS?",
    options: ["color", "background-color", "bg-color", "background"],
    answer: "background-color"
  },
  {
    number: 2,
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    number: 3,
    question: "Which property is used to change the font of an element?",
    options: ["font-style", "font-family", "font-weight", "text-font"],
    answer: "font-family"
  },
  {
    number: 4,
    question: "How do you select an element with the id 'header' in CSS?",
    options: ["#header", ".header", "header", "div#header"],
    answer: "#header"
  },
  {
    number: 5,
    question: "Which property is used to change the text color in CSS?",
    options: ["color", "font-color", "text-color", "background-color"],
    answer: "color"
  },
  {
    number: 6,
    question: "Which CSS property controls the layout of a page?",
    options: ["display", "position", "layout", "visibility"],
    answer: "display"
  },
  {
    number: 7,
    question: "How do you add a comment in CSS?",
    options: ["// This is a comment", "/* This is a comment */", "<!-- This is a comment -->", "# This is a comment"],
    answer: "/* This is a comment */"
  },
  {
    number: 8,
    question: "Which CSS property is used to add space between the content and the border of an element?",
    options: ["padding", "margin", "border", "spacing"],
    answer: "padding"
  },
  {
    number: 9,
    question: "How do you make a list not display bullet points in CSS?",
    options: ["list-style-type: none;", "list-style: none;", "display: none;", "list-type: none;"],
    answer: "list-style-type: none;"
  },
  {
    number: 10,
    question: "Which property is used to set the space between words in CSS?",
    options: ["letter-spacing", "word-spacing", "line-spacing", "space-between"],
    answer: "word-spacing"
  },
  {
    number: 11,
    question: "What is the default value of the 'position' property in CSS?",
    options: ["absolute", "relative", "fixed", "static"],
    answer: "static"
  },
  {
    number: 12,
    question: "How can you make text bold in CSS?",
    options: ["font-weight: bold;", "font-style: bold;", "font: bold;", "text-weight: bold;"],
    answer: "font-weight: bold;"
  },
  {
    number: 13,
    question: "Which CSS property is used to change the size of the text?",
    options: ["text-size", "font-size", "text-height", "font-height"],
    answer: "font-size"
  },
  {
    number: 14,
    question: "What is the correct CSS syntax to make a link bold?",
    options: ["a {text-style: bold;}", "a {font-weight: bold;}", "a {font: bold;}", "a {weight: bold;}"],
    answer: "a {font-weight: bold;}"
  },
  {
    number: 15,
    question: "Which of the following is the correct CSS syntax for adding a background image?",
    options: ["background: url('image.jpg');", "background-image: 'image.jpg';", "background-image: url('image.jpg');", "background-image: image.jpg;"],
    answer: "background-image: url('image.jpg');"
  },
  {
    number: 16,
    question: "How do you apply CSS to a specific class?",
    options: [".class", "#class", "class", "className"],
    answer: ".class"
  },
  {
    number: 17,
    question: "Which of the following CSS properties can you use to align text?",
    options: ["text-align", "align", "align-text", "text-position"],
    answer: "text-align"
  },
  {
    number: 18,
    question: "What is the default value for the 'display' property in CSS?",
    options: ["block", "inline", "flex", "none"],
    answer: "block"
  },
  {
    number: 19,
    question: "Which property is used to control the visibility of an element in CSS?",
    options: ["display", "visibility", "position", "opacity"],
    answer: "visibility"
  },
  {
    number: 20,
    question: "Which of the following CSS properties is used to add shadows to text?",
    options: ["box-shadow", "text-shadow", "shadow", "font-shadow"],
    answer: "text-shadow"
  },
  {
    number: 21,
    question: "Which property is used to change the background color of an element in CSS?",
    options: ["background-color", "color", "bg-color", "bg"],
    answer: "background-color"
  },
  {
    number: 22,
    question: "How can you change the color of a hyperlink when it is clicked in CSS?",
    options: ["a:visited {color: blue;}", "a:active {color: blue;}", "a:focus {color: blue;}", "a:click {color: blue;}"],
    answer: "a:visited {color: blue;}"
  },
  {
    number: 23,
    question: "Which property is used to specify the space between the content of a box and its border?",
    options: ["margin", "border-spacing", "padding", "border-width"],
    answer: "padding"
  },
  {
    number: 24,
    question: "How do you make an element center-aligned in CSS?",
    options: ["text-align: center;", "align-items: center;", "margin: 0 auto;", "center-align: true;"],
    answer: "margin: 0 auto;"
  },
  {
    number: 25,
    question: "Which property in CSS is used to set the font size?",
    options: ["font-size", "text-size", "text-font", "font-style"],
    answer: "font-size"
  },
  {
    number: 26,
    question: "Which of the following is used to set the distance between the top and bottom borders of a box in CSS?",
    options: ["padding", "margin", "border-width", "height"],
    answer: "padding"
  },
  {
    number: 27,
    question: "Which of the following CSS properties is used to control the flow of content?",
    options: ["display", "overflow", "flex", "align-items"],
    answer: "overflow"
  },
  {
    number: 28,
    question: "Which of the following CSS properties is used to specify the width of a border?",
    options: ["border-width", "border-size", "border-thickness", "width"],
    answer: "border-width"
  },
  {
    number: 29,
    question: "Which of the following CSS properties can be used to create a flexible layout?",
    options: ["float", "grid", "flexbox", "position"],
    answer: "flexbox"
  },
  {
    number: 30,
    question: "Slect the rigth property of float?",
    options: ["float-right", "float-top", "float-bottom", "float-center"],
    answer: "float-right"
  },
  {
    number: 31,
    question: "Which of the following is used to apply a style to an element only when it is being hovered over?",
    options: [":hover", ":active", ":focus", ":visited"],
    answer: ":hover"
  },
  {
    number: 32,
    question: "Which CSS property is used to control the font style of text?",
    options: ["font-style", "font-variant", "text-style", "font-weight"],
    answer: "font-style"
  },
  {
    number: 33,
    question: "Which of the following is the correct way to select all <p> elements inside a <div>?",
    options: ["div p", "div > p", ".div p", "#div p"],
    answer: "div p"
  },
  {
    number: 34,
    question: "Which of the following is a valid way to set the font family for an element?",
    options: ["font-family: Arial, sans-serif;", "font: Arial;", "text-family: Arial;", "font: Arial, sans-serif;"],
    answer: "font-family: Arial, sans-serif;"
  },
  {
    number: 35,
    question: "How do you make text italic in CSS?",
    options: ["font-style: italic;", "text-style: italic;", "font-weight: italic;", "text-align: italic;"],
    answer: "font-style: italic;"
  },
  {
    number: 36,
    question: "Which of the following CSS properties can be used to add a gradient to the background of an element?",
    options: ["background-gradient", "background-color", "background-image", "background"],
    answer: "background-image"
  },
  {
    number: 37,
    question: "Which property is used to specify the number of columns in a multi-column layout?",
    options: ["columns", "column-count", "column-width", "column-spacing"],
    answer: "column-count"
  },
  {
    number: 38,
    question: "How can you remove the underline from a link in CSS?",
    options: ["text-decoration: none;", "remove-underline: true;", "font-decoration: none;", "text-underline: none;"],
    answer: "text-decoration: none;"
  },
  {
    number: 39,
    question: "Which of the following CSS properties is used to control the space between grid items in a grid layout?",
    options: ["grid-gap", "gap", "grid-spacing", "column-gap"],
    answer: "gap"
  },
  {
    number: 40,
    question: "Which of the following is used to apply a style to an element when it is in focus?",
    options: [":focus", ":active", ":hover", ":visited"],
    answer: ":focus"
  },
  {
    number: 41,
    question: "Which of the following is the correct CSS syntax to set the background color to red?",
    options: ["background-color: red;", "bg-color: red;", "color: red;", "background: red;"],
    answer: "background-color: red;"
  },
  {
    number: 42,
    question: "Which of the following is used to set the space between the outer edge of a box and other elements?",
    options: ["padding", "margin", "border", "width"],
    answer: "margin"
  },
  {
    number: 43,
    question: "What does the 'clear' property do in CSS?",
    options: ["Clears floating elements", "Clears text", "Clears background", "Clears the browser cache"],
    answer: "Clears floating elements"
  },
  {
    number: 44,
    question: "What is the correct CSS syntax to make a div invisible without removing it from the layout?",
    options: ["visibility: hidden;", "display: none;", "visibility: none;", "display: hidden;"],
    answer: "visibility: hidden;"
  },
  {
    number: 45,
    question: "Which of the following CSS properties can be used to create a drop shadow effect?",
    options: ["box-shadow", "text-shadow", "shadow", "outline"],
    answer: "box-shadow"
  },
  {
    number: 46,
    question: "Which of the following values for the 'position' property is used to fix an element to the top of the viewport?",
    options: ["absolute", "relative", "fixed", "sticky"],
    answer: "fixed"
  },
  {
    number: 47,
    question: "How can you change the color of the text when the user hovers over a link?",
    options: ["a:hover {color: red;}", "a:active {color: red;}", "a:focus {color: red;}", "a:visited {color: red;}"],
    answer: "a:hover {color: red;}"
  },
  {
    number: 48,
    question: "Which of the following is used to set the font weight to bold in CSS?",
    options: ["font-weight: bold;", "font-size: bold;", "font-style: bold;", "text-weight: bold;"],
    answer: "font-weight: bold;"
  },
  {
    number: 49,
    question: "Which of the following CSS properties is used to set the height of an element?",
    options: ["height", "width", "size", "space"],
    answer: "height"
  },
  {
    number: 50,
    question: "Which of the following is used to create a flexible grid layout in CSS?",
    options: ["display: flex;", "grid-template-columns", "flex-direction", "grid-template-areas"],
    answer: "display: flex;"
  }
];
const CSS = () => {
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
          <h2 className="fs-2 font-bold text-center"> CSS Quiz</h2>
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

export default CSS;







