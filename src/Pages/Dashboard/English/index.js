import React, { useState, useEffect, useCallback } from "react";
const questions = [
    {
        question: "1. What is the standard keyboard layout used in most English-speaking countries?",
        options: ["a) QWERTY", "b) AZERTY", "c) Dvorak", "d) Colemak"],
        answer: "a) QWERTY"
    },
    {
        question: "2. What does the 'Caps Lock' key do on a keyboard?",
        options: [
            "a) Switches letters to uppercase until deactivated",
            "b) Deletes characters",
            "c) Locks the keyboard",
            "d) Inserts a new line"
        ],
        answer: "a) Switches letters to uppercase until deactivated"
    },
    {
        question: "3. Which finger is used to press the 'Enter' key in touch typing?",
        options: ["a) Right pinky", "b) Left pinky", "c) Right index", "d) Left index"],
        answer: "a) Right pinky"
    },
    {
        question: "4. What is the main purpose of the 'Shift' key on a keyboard?",
        options: [
            "a) To type capital letters or access secondary characters",
            "b) To move the cursor to the next line",
            "c) To lock the keyboard",
            "d) To delete characters"
        ],
        answer: "a) To type capital letters or access secondary characters"
    },
    {
        question: "5. In touch typing, which finger is used to press the 'Spacebar'?",
        options: ["a) Thumb", "b) Index finger", "c) Pinky finger", "d) Ring finger"],
        answer: "a) Thumb"
    },
    {
        question: "6. What is the term used for typing without looking at the keyboard?",
        options: ["a) Blind typing", "b) Touch typing", "c) Sight typing", "d) Fast typing"],
        answer: "b) Touch typing"
    },
    {
        question: "7. How many rows of keys are there on a standard QWERTY keyboard?",
        options: ["a) 4", "b) 5", "c) 6", "d) 3"],
        answer: "b) 5"
    },
    {
        question: "8. Which key is commonly used to delete characters to the left of the cursor?",
        options: ["a) Delete", "b) Backspace", "c) Escape", "d) Spacebar"],
        answer: "b) Backspace"
    },
    {
        question: "9. What does the 'Num Lock' key do?",
        options: [
            "a) Activates the numeric keypad",
            "b) Locks the keyboard",
            "c) Switches the keyboard layout",
            "d) Disables the keyboard"
        ],
        answer: "a) Activates the numeric keypad"
    },
    {
        question: "10. What is a good typing speed for a professional typist?",
        options: ["a) 40-50 WPM", "b) 50-60 WPM", "c) 70-80 WPM", "d) 90+ WPM"],
        answer: "c) 70-80 WPM"
    },
    {
        question: "11. Which finger is used to press the 'A' key in touch typing?",
        options: ["a) Left pinky", "b) Left ring finger", "c) Left middle finger", "d) Left index finger"],
        answer: "a) Left pinky"
    },
    {
        question: "12. Which key is commonly used to insert a tab space?",
        options: ["a) Tab", "b) Shift", "c) Spacebar", "d) Enter"],
        answer: "a) Tab"
    },
    {
        question: "13. Which key combination is often used to copy text?",
        options: ["a) Ctrl + X", "b) Ctrl + V", "c) Ctrl + C", "d) Ctrl + Z"],
        answer: "c) Ctrl + C"
    },
    {
        question: "14. Which key is used to switch between open applications in Windows?",
        options: ["a) Alt + Tab", "b) Ctrl + Tab", "c) Shift + Tab", "d) Ctrl + Shift"],
        answer: "a) Alt + Tab"
    },
    {
        question: "15. What does 'WPM' stand for in typing?",
        options: [
            "a) Words Per Minute",
            "b) Words Processed Minutely",
            "c) Writing Process Monitor",
            "d) Written Paragraph Metrics"
        ],
        answer: "a) Words Per Minute"
    },
    {
        question: "16. In touch typing, which finger is used to press the 'M' key?",
        options: ["a) Right index", "b) Right middle", "c) Right ring", "d) Right pinky"],
        answer: "b) Right middle"
    },
    {
        question: "17. What is the purpose of the 'Insert' key on a keyboard?",
        options: [
            "a) To overwrite text in a document",
            "b) To insert special characters",
            "c) To create a new file",
            "d) To move the cursor to the next line"
        ],
        answer: "a) To overwrite text in a document"
    },
    {
        question: "18. Which key combination is often used to paste text?",
        options: ["a) Ctrl + X", "b) Ctrl + V", "c) Ctrl + P", "d) Ctrl + A"],
        answer: "b) Ctrl + V"
    },
    {
        question: "19. What is the home row in touch typing?",
        options: [
            "a) The row where your fingers rest (ASDF JKL;)",
            "b) The row with numbers",
            "c) The bottom row of the keyboard",
            "d) The top row of the keyboard"
        ],
        answer: "a) The row where your fingers rest (ASDF JKL;)"
    },
    {
        question: "20. Which finger is used to press the 'P' key in touch typing?",
        options: ["a) Right index", "b) Right middle", "c) Right ring", "d) Right pinky"],
        answer: "d) Right pinky"
    },
    {
        question: "21. Which key combination is used to undo an action?",
        options: ["a) Ctrl + U", "b) Ctrl + X", "c) Ctrl + Z", "d) Ctrl + Y"],
        answer: "c) Ctrl + Z"
    },
    {
        question: "22. What does the 'Esc' key do?",
        options: [
            "a) Exits a program or cancels an action",
            "b) Deletes text",
            "c) Inserts a tab space",
            "d) Creates a new document"
        ],
        answer: "a) Exits a program or cancels an action"
    },
    {
        question: "23. How many keys are typically found on a standard QWERTY keyboard?",
        options: ["a) 88", "b) 100", "c) 101-104", "d) 110"],
        answer: "c) 101-104"
    },
    {
        question: "24. What is the purpose of the 'Alt' key on a keyboard?",
        options: [
            "a) To perform alternate functions or shortcuts",
            "b) To switch between uppercase and lowercase",
            "c) To delete text",
            "d) To insert special characters"
        ],
        answer: "a) To perform alternate functions or shortcuts"
    },
    {
        question: "25. Which finger is used to press the 'G' key in touch typing?",
        options: ["a) Left middle", "b) Left ring", "c) Left index", "d) Left pinky"],
        answer: "c) Left index"
    },
    {
        question: "26. Which finger is used to press the 'L' key in touch typing?",
        options: ["a) Right index", "b) Right middle", "c) Right ring", "d) Right pinky"],
        answer: "c) Right ring"
    },
    {
        question: "27. What is the function of the 'Ctrl + S' shortcut in most applications?",
        options: [
            "a) Save the current document",
            "b) Select all text",
            "c) Close the application",
            "d) Open a new file"
        ],
        answer: "a) Save the current document"
    },
    {
        question: "28. Which key combination is used to select all text in a document?",
        options: ["a) Ctrl + A", "b) Ctrl + C", "c) Ctrl + Z", "d) Ctrl + V"],
        answer: "a) Ctrl + A"
    },
    {
        question: "29. Which key is used to move the cursor to the beginning of the line?",
        options: ["a) Home", "b) End", "c) Page Up", "d) Ctrl"],
        answer: "a) Home"
    },
    {
        question: "30. What is the purpose of the 'F5' key in most web browsers?",
        options: [
            "a) Refresh the page",
            "b) Open a new tab",
            "c) Save the current page",
            "d) Close the browser"
        ],
        answer: "a) Refresh the page"
    },
    {
        question: "31. In touch typing, which finger is used to press the 'B' key?",
        options: ["a) Left index", "b) Right index", "c) Left middle", "d) Right middle"],
        answer: "a) Left index"
    },
    {
        question: "32. What does the 'Tab' key typically do when typing in a document?",
        options: [
            "a) Moves the cursor to the next tab stop",
            "b) Deletes a character",
            "c) Moves to the next line",
            "d) Saves the document"
        ],
        answer: "a) Moves the cursor to the next tab stop"
    },
    {
        question: "33. What does the 'Ctrl + P' shortcut do in most applications?",
        options: [
            "a) Prints the current document",
            "b) Opens a new file",
            "c) Pastes copied text",
            "d) Opens the settings menu"
        ],
        answer: "a) Prints the current document"
    },
    {
        question: "34. Which key combination is used to reopen a recently closed tab in most browsers?",
        options: ["a) Ctrl + Shift + T", "b) Ctrl + T", "c) Ctrl + R", "d) Ctrl + N"],
        answer: "a) Ctrl + Shift + T"
    },
    {
        question: "35. Which finger is used to press the 'Q' key in touch typing?",
        options: ["a) Left pinky", "b) Left index", "c) Left ring", "d) Left middle"],
        answer: "a) Left pinky"
    },
    {
        question: "36. Which key is commonly used to delete characters to the right of the cursor?",
        options: ["a) Backspace", "b) Delete", "c) Shift", "d) Ctrl"],
        answer: "b) Delete"
    },
    {
        question: "37. What does the 'Alt + F4' shortcut do in Windows?",
        options: [
            "a) Closes the active window",
            "b) Switches between windows",
            "c) Opens the file menu",
            "d) Opens the task manager"
        ],
        answer: "a) Closes the active window"
    },
    {
        question: "38. Which row of keys contains the letters 'ASDF JKL;' in touch typing?",
        options: ["a) Home row", "b) Top row", "c) Bottom row", "d) Number row"],
        answer: "a) Home row"
    },
    {
        question: "39. Which finger is used to press the semicolon (;) key in touch typing?",
        options: ["a) Right pinky", "b) Right ring", "c) Right middle", "d) Right index"],
        answer: "a) Right pinky"
    },
    {
        question: "40. Which key is used to move the cursor to the end of the line?",
        options: ["a) End", "b) Home", "c) Page Down", "d) Tab"],
        answer: "a) End"
    },
    {
        question: "41. What does the 'Ctrl + X' shortcut do in most applications?",
        options: ["a) Cuts the selected text", "b) Copies the selected text", "c) Deletes the selected text", "d) Pastes the selected text"],
        answer: "a) Cuts the selected text"
    },
    {
        question: "42. Which keyboard shortcut is used to redo an action?",
        options: ["a) Ctrl + Z", "b) Ctrl + Y", "c) Ctrl + X", "d) Ctrl + R"],
        answer: "b) Ctrl + Y"
    },
    {
        question: "43. What does the 'F12' key typically do in most browsers?",
        options: [
            "a) Opens developer tools",
            "b) Refreshes the page",
            "c) Opens a new window",
            "d) Saves the page as a file"
        ],
        answer: "a) Opens developer tools"
    },
    {
        question: "44. Which key combination is used to find text in a document?",
        options: ["a) Ctrl + F", "b) Ctrl + S", "c) Ctrl + A", "d) Ctrl + P"],
        answer: "a) Ctrl + F"
    },
    {
        question: "45. Which finger is used to press the 'E' key in touch typing?",
        options: ["a) Left index", "b) Left middle", "c) Left ring", "d) Left pinky"],
        answer: "b) Left middle"
    },
    {
        question: "46. Which key is used to access the context menu in Windows?",
        options: ["a) Context menu key", "b) Alt", "c) Shift", "d) Tab"],
        answer: "a) Context menu key"
    },
    {
        question: "47. What is the purpose of the 'Scroll Lock' key on a keyboard?",
        options: [
            "a) Toggles scrolling behavior in some applications",
            "b) Locks the keyboard",
            "c) Disables the arrow keys",
            "d) Enables fast scrolling"
        ],
        answer: "a) Toggles scrolling behavior in some applications"
    },
    {
        question: "48. Which key combination is used to switch between tabs in most browsers?",
        options: ["a) Ctrl + Tab", "b) Ctrl + Shift", "c) Alt + Tab", "d) Ctrl + F"],
        answer: "a) Ctrl + Tab"
    },
    {
        question: "49. Which finger is used to press the 'Z' key in touch typing?",
        options: ["a) Left pinky", "b) Left ring", "c) Left middle", "d) Left index"],
        answer: "a) Left pinky"
    },
    {
        question: "50. What is the primary purpose of the 'Fn' key on a keyboard?",
        options: [
            "a) Access additional functions for other keys",
            "b) Open the settings menu",
            "c) Enable shortcuts",
            "d) Lock the keyboard"
        ],
        answer: "a) Access additional functions for other keys"
    }
];

const English = () => {
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
  },[lockedAnswers,currentQuestionIndex]);

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
  }, [timer, isTimeOver,handleNext]);


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
        style={{ height: "80vh"}}
      >
        <div className="w-full max-w-xl mx-auto shadow-2xl py-4 px-3" style={{ position: "relative" }}  >
          <h2 className="fs-2 font-bold text-center">English Typing Quiz</h2>
          <p className="fs-5 font-bold text-center">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          <div
            className="timer-card"
            style={{
              position: "absolute",
              marginBottom:"5px",
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

export default English;



