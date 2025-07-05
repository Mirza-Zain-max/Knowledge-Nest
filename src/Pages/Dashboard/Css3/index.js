import React, { useState, useEffect, useCallback } from "react";
const questions = [
  {
    number: 1,
    question: "1. Which of the following is a new feature introduced in CSS3?",
    options: ["Border radius", "Box shadows", "Text shadows", "All of the above"],
    answer: "All of the above"
  },
  {
    number: 2,
    question: "2. Which CSS3 property is used to apply a rounded corner to a box?",
    options: ["border-radius", "border", "corner-radius", "radius-border"],
    answer: "border-radius"
  },
  {
    number: 3,
    question: "3. Which of the following is used to apply a box shadow in CSS3?",
    options: ["box-shadow", "text-shadow", "shadow-box", "shadow-text"],
    answer: "box-shadow"
  },
  {
    number: 4,
    question: "4. In CSS3, which property is used to create a gradient background?",
    options: ["background-gradient", "gradient", "background-image", "background-color"],
    answer: "background-image"
  },
  {
    number: 5,
    question: "5. What property is used to specify the number of columns in a multi-column layout in CSS3?",
    options: ["column-count", "column-width", "columns", "column-spacing"],
    answer: "column-count"
  },
  {
    number: 6,
    question: "6. Which of the following is used for animation in CSS3?",
    options: ["animation", "transition", "keyframes", "All of the above"],
    answer: "All of the above"
  },
  {
    number: 7,
    question: "7. Which CSS property is used to control the visibility of an element?",
    options: ["visibility", "display", "opacity", "all of the above"],
    answer: "visibility"
  },
  {
    number: 8,
    question: "8. Which CSS3 property is used to apply multiple background images?",
    options: ["background-image", "background", "background-repeat", "background-layer"],
    answer: "background-image"
  },
  {
    number: 9,
    question: "9. What is the purpose of the CSS3 'transform' property?",
    options: ["It changes the element's position", "It changes the element's size", "It applies visual effects like rotate and scale", "It controls text alignment"],
    answer: "It applies visual effects like rotate and scale"
  },
  {
    number: 10,
    question: "10. Which of the following is used to set the maximum height of an element in CSS3?",
    options: ["max-height", "height", "min-height", "height-limit"],
    answer: "max-height"
  },
  {
    number: 11,
    question: "11. In CSS3, how do you specify a font family?",
    options: ["font-family", "font", "text-family", "family-font"],
    answer: "font-family"
  },
  {
    number: 12,
    question: "12. Which CSS3 property allows you to set a box to be completely transparent?",
    options: ["opacity", "visibility", "background-color", "none"],
    answer: "opacity"
  },
  {
    number: 13,
    question: "13. Which CSS3 property is used to add text shadow effects?",
    options: ["text-shadow", "box-shadow", "shadow", "text-effect"],
    answer: "text-shadow"
  },
  {
    number: 14,
    question: "14. What is the default value of the 'box-sizing' property in CSS3?",
    options: ["border-box", "content-box", "padding-box", "box-box"],
    answer: "content-box"
  },
  {
    number: 15,
    question: "15. Which of the following is used to apply a hover effect in CSS3?",
    options: ["a:hover", "a:active", "a:focus", "a:visited"],
    answer: "a:hover"
  },
  {
    number: 16,
    question: "16. Which CSS3 property allows you to control the layout of columns in a multi-column layout?",
    options: ["column-gap", "column-width", "column-span", "column-align"],
    answer: "column-gap"
  },
  {
    number: 17,
    question: "17. Which CSS3 property is used to specify the font size?",
    options: ["font-size", "font-weight", "font-style", "font-family"],
    answer: "font-size"
  },
  {
    number: 18,
    question: "18. What property is used to create a flexbox layout in CSS3?",
    options: ["display: flex", "display: grid", "flex: 1", "flexbox: true"],
    answer: "display: flex"
  },
  {
    number: 19,
    question: "19. Which of the following is used to set an element to be fixed at the top of the screen while scrolling?",
    options: ["position: fixed", "position: relative", "position: absolute", "position: sticky"],
    answer: "position: fixed"
  },
  {
    number: 20,
    question: "20. In CSS3, what property is used to set the transparency of an element?",
    options: ["opacity", "visibility", "transparency", "alpha"],
    answer: "opacity"
  },
  {
    number: 21,
    question: "21. Which of the following CSS3 properties allows you to create a flexible layout?",
    options: ["flex", "display: flex", "grid", "column"],
    answer: "display: flex"
  },
  {
    number: 22,
    question: "22. What is the function of the 'border-radius' property?",
    options: ["It adds a shadow to the border", "It creates rounded corners", "It defines the width of the border", "It sets the border color"],
    answer: "It creates rounded corners"
  },
  {
    number: 23,
    question: "23. Which of the following properties is used to define the alignment of items in a flexbox container?",
    options: ["align-items", "justify-content", "flex-align", "item-align"],
    answer: "align-items"
  },
  {
    number: 24,
    question: "24. What is the default value of the 'display' property for a div element?",
    options: ["block", "inline", "inline-block", "flex"],
    answer: "block"
  },
  {
    number: 25,
    question: "25. Which CSS3 property is used to control the spacing between characters in a text?",
    options: ["letter-spacing", "line-height", "word-spacing", "text-spacing"],
    answer: "letter-spacing"
  },
  {
    number: 26,
    question: "26. Which of the following is used to create a smooth scrolling effect in CSS3?",
    options: ["scroll-behavior", "scroll-smooth", "smooth-scroll", "scrolling"],
    answer: "scroll-behavior"
  },
  {
    number: 27,
    question: "27. Which CSS3 property is used to create multi-column layouts?",
    options: ["column-count", "columns", "column-width", "column-gap"],
    answer: "columns"
  },
  {
    number: 28,
    question: "28. Which property is used in CSS3 to create a smooth animation?",
    options: ["transition", "animation", "keyframe", "transform"],
    answer: "transition"
  },
  {
    number: 29,
    question: "29. How do you specify the duration of a CSS3 transition?",
    options: ["transition-duration", "transition-time", "duration", "time"],
    answer: "transition-duration"
  },
  {
    number: 30,
    question: "30. Which property is used to change the position of an element in CSS3?",
    options: ["position", "top", "left", "transform"],
    answer: "transform"
  },
  {
    number: 31,
    question: "31. What is the function of the 'box-shadow' property in CSS3?",
    options: ["Creates a shadow around the element", "Changes the color of the box", "Adds a border to the box", "Sets the background of the box"],
    answer: "Creates a shadow around the element"
  },
  {
    number: 32,
    question: "32. Which of the following properties is used to add space between the items in a flex container?",
    options: ["justify-content", "align-items", "gap", "item-space"],
    answer: "gap"
  },
  {
    number: 33,
    question: "33. Which CSS3 property is used to define the background of an element?",
    options: ["background", "background-color", "background-image", "all of the above"],
    answer: "all of the above"
  },
  {
    number: 34,
    question: "34. Which property is used to make an element invisible but still take up space in the layout?",
    options: ["visibility: hidden", "display: none", "opacity: 0", "visibility: collapse"],
    answer: "visibility: hidden"
  },
  {
    number: 35,
    question: "35. Which CSS3 property is used to create a multi-line text block with ellipses for overflow?",
    options: ["text-overflow", "overflow-wrap", "word-wrap", "overflow"],
    answer: "text-overflow"
  },
  {
    number: 36,
    question: "36. Which CSS3 property is used to change the order of flex items?",
    options: ["order", "flex-order", "item-order", "layout-order"],
    answer: "order"
  },
  {
    number: 37,
    question: "37. Which CSS3 property controls the size of a background image?",
    options: ["background-size", "background-repeat", "background-position", "background-color"],
    answer: "background-size"
  },
  {
    number: 38,
    question: "38. Which CSS3 property defines the layout of a grid?",
    options: ["display: grid", "grid-template", "grid-template-columns", "grid-template-areas"],
    answer: "display: grid"
  },
  {
    number: 39,
    question: "39. Which property is used to add space between items in a grid layout?",
    options: ["grid-gap", "item-spacing", "column-gap", "row-gap"],
    answer: "grid-gap"
  },
  {
    number: 40,
    question: "40. What is the purpose of the 'flex-wrap' property?",
    options: ["Allows flex items to wrap into multiple lines", "Changes the flex container layout", "Resizes the flex items", "Makes the container fixed size"],
    answer: "Allows flex items to wrap into multiple lines"
  },
  {
    number: 41,
    question: "41. What is the default value of the 'position' property?",
    options: ["static", "absolute", "relative", "fixed"],
    answer: "static"
  },
  {
    number: 42,
    question: "42. Which CSS3 property is used to hide an element?",
    options: ["display: none;", "visibility: hidden;", "opacity: 0;", "All of the above"],
    answer: "All of the above"
  },
  {
    number: 43,
    question: "43. Which property is used to center a block element horizontally in CSS3?",
    options: ["margin: 0 auto;", "text-align: center;", "display: flex;", "float: center;"],
    answer: "margin: 0 auto;"
  },
  {
    number: 44,
    question: "44. Which of the following is used to control the space between flex items in CSS3?",
    options: ["justify-content", "gap", "align-items", "flex-space"],
    answer: "gap"
  },
  {
    number: 45,
    question: "45. Which of the following properties is used to make the background of an element fixed while scrolling?",
    options: ["background-attachment", "background-fixed", "position: fixed", "background-position"],
    answer: "background-attachment"
  },
  {
    number: 46,
    question: "46. Which CSS3 property defines the shape of a border's edges?",
    options: ["border-radius", "border-edge", "corner-radius", "border-shape"],
    answer: "border-radius"
  },
  {
    number: 47,
    question: "47. Which of the following is used to create a flexible grid layout in CSS3?",
    options: ["display: flex;", "grid-template-columns", "flex-direction", "grid-template-areas"],
    answer: "display: flex;"
  },
  {
    number: 48,
    question: "48. How do you add a border to an element in CSS3?",
    options: ["border: 1px solid #000;", "border-style: solid;", "border-color: black;", "all of the above"],
    answer: "all of the above"
  },
  {
    number: 49,
    question: "49. Which CSS3 property is used to specify how the content of an element should be aligned within the container?",
    options: ["align-items", "justify-content", "align-content", "justify-items"],
    answer: "justify-content"
  },
  {
    number: 50,
    question: "50. Which of the following is used to hide an element in CSS3 while still keeping the element in the document flow?",
    options: ["visibility: hidden;", "display: none;", "opacity: 0;", "none"],
    answer: "visibility: hidden;"
  }
];

const Css3 = () => {
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
          <h2 className="fs-2 font-bold text-center"> Css3 Quiz</h2>
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

export default Css3;









