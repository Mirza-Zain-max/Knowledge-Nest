import React, { useState, useEffect, useCallback } from "react";
const questions = [
    {
      question: "1. What is the correct syntax for referring to an external script called 'script.js'?",
      options: ["a) <script href='script.js'>", "b) <script src='script.js'>", "c) <script ref='script.js'>", "d) <script file='script.js'>"],
      answer: "b) <script src='script.js'>"
    },
    {
      question: "2. How do you create a function in JavaScript?",
      options: ["a) function = myFunction()", "b) function myFunction()", "c) function:myFunction()", "d) function: myFunction()"],
      answer: "b) function myFunction()"
    },
    {
      question: "3. Which of the following is the correct way to declare a variable in JavaScript?",
      options: ["a) var myVar;", "b) variable myVar;", "c) dim myVar;", "d) let myVar;"],
      answer: "a) var myVar;"
    },
    {
      question: "4. How can you add a comment in JavaScript?",
      options: ["a) // this is a comment", "b) # this is a comment", "c) /* this is a comment */", "d) both a and c"],
      answer: "d) both a and c"
    },
    {
      question: "5. Which operator is used to assign a value to a variable in JavaScript?",
      options: ["a) =", "b) =", "c) ==", "d) ==="],
      answer: "a) ="
    },
    {
      question: "6. How do you write 'Hello World' to the console in JavaScript?",
      options: ["a) print('Hello World');", "b) console.print('Hello World');", "c) System.out.println('Hello World');", "d) console.log('Hello World');"],
      answer: "d) console.log('Hello World');"
    },
    {
      question: "7. Which event occurs when the user clicks on an HTML element?",
      options: ["a) onmouseclick", "b) onclick", "c) onmouseover", "d) onkeydown"],
      answer: "b) onclick"
    },
    {
      question: "8. Which of the following is used to define an object in JavaScript?",
      options: ["a) {}", "b) []", "c) ()", "d) <>"],
      answer: "a) {}"
    },
    {
      question: "9. What is the correct way to write a JavaScript array?",
      options: ["a) var arr = (1, 2, 3);", "b) var arr = [1, 2, 3];", "c) var arr = {1, 2, 3};", "d) var arr = <1, 2, 3>;"],
      answer: "b) var arr = [1, 2, 3];"
    },
    {
      question: "10. How do you define a JavaScript function that returns a value?",
      options: ["a) function myFunction() { return value; }", "b) function myFunction() { yield value; }", "c) function myFunction() { return value }", "d) return function myFunction() { value; }"],
      answer: "a) function myFunction() { return value; }"
    },
    {
      question: "11. Which of the following is a correct way to check if a variable 'x' is an integer?",
      options: ["a) Number.isInteger(x);", "b) x.isInteger();", "c) isInteger(x);", "d) typeof(x) === 'int';"],
      answer: "a) Number.isInteger(x);"
    },
    {
      question: "12. How do you convert a string to an integer in JavaScript?",
      options: ["a) parseInt('123');", "b) toInt('123');", "c) int('123');", "d) Number('123');"],
      answer: "a) parseInt('123');"
    },
    {
      question: "13. Which of the following is used to declare a constant in JavaScript?",
      options: ["a) constant x = 10;", "b) const x = 10;", "c) var x = 10;", "d) let x = 10;"],
      answer: "b) const x = 10;"
    },
    {
      question: "14. How do you create a new object in JavaScript?",
      options: ["a) var obj = new Object();", "b) var obj = Object();", "c) var obj = new();", "d) var obj = {};"],
      answer: "a) var obj = new Object();"
    },
    {
      question: "15. Which JavaScript function is used to create a new array from an existing array?",
      options: ["a) Array.new()", "b) Array.slice()", "c) Array.concat()", "d) Array.push()"],
      answer: "b) Array.slice()"
    },
    {
      question: "16. What is the value of the expression '10' + 10 in JavaScript?",
      options: ["a) 20", "b) 1010", "c) NaN", "d) undefined"],
      answer: "b) 1010"
    },
    {
      question: "17. What is the result of the expression 5 + '5' in JavaScript?",
      options: ["a) 10", "b) '55'", "c) '5'", "d) 55"],
      answer: "b) '55'"
    },
    {
      question: "18. How do you create a JavaScript object?",
      options: ["a) var obj = new Object();", "b) var obj = {};", "c) var obj = Object();", "d) All of the above"],
      answer: "d) All of the above"
    },
    {
      question: "19. What does the 'this' keyword refer to in JavaScript?",
      options: ["a) The current function", "b) The current object", "c) The window object", "d) The document object"],
      answer: "b) The current object"
    },
    {
      question: "20. Which of the following is used to remove an item from an array in JavaScript?",
      options: ["a) delete array[0];", "b) array.pop();", "c) array.shift();", "d) array.remove();"],
      answer: "b) array.pop();"
    },
    {
      question: "21. How can you make a JavaScript array that holds different types of elements?",
      options: ["a) var arr = [1, 'hello', true];", "b) var arr = (1, 'hello', true);", "c) var arr = [1; 'hello; true];", "d) var arr = (1, 'hello', true)"],
      answer: "a) var arr = [1, 'hello', true];"
    },
    {
      question: "22. What is the purpose of the 'break' statement in JavaScript?",
      options: ["a) Exit the current loop", "b) Skip the current iteration of the loop", "c) Exit the entire program", "d) None of the above"],
      answer: "a) Exit the current loop"
    },
    {
      question: "23. What does 'NaN' stand for in JavaScript?",
      options: ["a) Not a Number", "b) Not a Name", "c) New and Necessary", "d) Not Assigned Number"],
      answer: "a) Not a Number"
    },
    {
      question: "24. Which function is used to find the length of a string in JavaScript?",
      options: ["a) length()", "b) string.length()", "c) string.size()", "d) getLength()"],
      answer: "b) string.length()"
    },
    {
      question: "25. What is the correct syntax to redirect a user to a new page in JavaScript?",
      options: ["a) window.location = 'url';", "b) location.url = 'url';", "c) window.redirect('url');", "d) location.href = 'url';"],
      answer: "a) window.location = 'url';"
    },
    {
      question: "26. Which method is used to add an element to the end of an array?",
      options: ["a) push()", "b) pop()", "c) shift()", "d) unshift()"],
      answer: "a) push()"
    },
    {
      question: "27. What is the correct way to create a new date object in JavaScript?",
      options: ["a) var date = new Date();", "b) var date = Date();", "c) var date = new date();", "d) var date = Date.new();"],
      answer: "a) var date = new Date();"
    },
    {
      question: "28. What does the 'typeof' operator do in JavaScript?",
      options: ["a) Returns the type of a variable", "b) Converts a variable into a specific type", "c) Checks if a variable is null", "d) None of the above"],
      answer: "a) Returns the type of a variable"
    },
    {
      question: "29. How do you define a regular expression in JavaScript?",
      options: ["a) var re = //abc/;", "b) var re = /abc/;", "c) var re = 'abc';", "d) var re = new RegExp('abc');"],
      answer: "b) var re = /abc/;"
    },
    {
      question: "30. Which of the following is a valid JavaScript data type?",
      options: ["a) string", "b) number", "c) boolean", "d) All of the above"],
      answer: "d) All of the above"
    },
    {
      question: "31. How do you check if a variable is an array in JavaScript?",
      options: ["a) Array.isArray()", "b) typeof() == 'array'", "c) isArray()", "d) array()"],
      answer: "a) Array.isArray()"
    },
    {
      question: "32. Which of the following is used to loop through each item in an array?",
      options: ["a) for()", "b) forEach()", "c) foreach()", "d) loop()"],
      answer: "b) forEach()"
    },
    {
      question: "33. What is the purpose of the 'continue' statement in JavaScript?",
      options: ["a) Skip the current iteration and continue with the next one", "b) Exit the current loop", "c) Exit the function", "d) None of the above"],
      answer: "a) Skip the current iteration and continue with the next one"
    },
    {
      question: "34. What will be the output of the following code: console.log(1 + '1');?",
      options: ["a) 2", "b) 11", "c) '1 1'", "d) NaN"],
      answer: "b) 11"
    },
    {
      question: "35. What is the scope of a variable declared with 'let' in JavaScript?",
      options: ["a) Global", "b) Function", "c) Block", "d) All of the above"],
      answer: "c) Block"
    },
    {
      question: "36. Which of the following is NOT a falsy value in JavaScript?",
      options: ["a) 0", "b) false", "c) null", "d) 1"],
      answer: "d) 1"
    },
    {
      question: "37. What is a closure in JavaScript?",
      options: ["a) A function inside another function", "b) A function that returns an object", "c) A variable inside a function", "d) None of the above"],
      answer: "a) A function inside another function"
    },
    {
      question: "38. What does the 'setTimeout' function do in JavaScript?",
      options: ["a) Executes a function after a specified delay", "b) Sets the time for a function to execute", "c) Sets a timeout for the browser", "d) None of the above"],
      answer: "a) Executes a function after a specified delay"
    },
    {
      question: "39. Which of the following is used to handle errors in JavaScript?",
      options: ["a) try-catch", "b) if-else", "c) throw-catch", "d) error-throw"],
      answer: "a) try-catch"
    },
    {
      question: "40. What is the purpose of the 'localStorage' object in JavaScript?",
      options: ["a) Stores data for the current session", "b) Stores data indefinitely", "c) Stores data in cookies", "d) Stores data in the server"],
      answer: "b) Stores data indefinitely"
    },
    {
      question: "41. How do you define a class in JavaScript?",
      options: ["a) class MyClass {}", "b) function MyClass {}", "c) var MyClass = class {}", "d) object MyClass {}"],
      answer: "a) class MyClass {}"
    },
    {
      question: "42. How do you define a getter function for a property in a JavaScript class?",
      options: ["a) get property()", "b) getProperty()", "c) def property()", "d) get:property()"],
      answer: "a) get property()"
    },
    {
      question: "43. What is a promise in JavaScript?",
      options: ["a) A way to handle asynchronous operations", "b) A method to handle data storage", "c) A function to handle errors", "d) A tool to work with localStorage"],
      answer: "a) A way to handle asynchronous operations"
    },
    {
      question: "44. Which of the following is NOT a method to manipulate arrays in JavaScript?",
      options: ["a) push()", "b) pop()", "c) concat()", "d) add()"],
      answer: "d) add()"
    },
    {
      question: "45. Which of the following is the correct syntax to create a new date object representing the current date and time?",
      options: ["a) var date = Date.new();", "b) var date = new Date();", "c) var date = new Date('now');", "d) var date = currentDate();"],
      answer: "b) var date = new Date();"
    },
    {
      question: "46. How do you define an anonymous function in JavaScript?",
      options: ["a) function() {}", "b) () => {}", "c) Both a and b", "d) None of the above"],
      answer: "c) Both a and b"
    },
    {
      question: "47. What is the purpose of the 'eval' function in JavaScript?",
      options: ["a) Evaluates JavaScript code represented as a string", "b) Evaluates mathematical expressions", "c) Executes code at a specified time", "d) None of the above"],
      answer: "a) Evaluates JavaScript code represented as a string"
    },
    {
      question: "48. What does the 'isNaN' function do in JavaScript?",
      options: ["a) Checks if a variable is NaN", "b) Checks if a variable is an integer", "c) Checks if a variable is null", "d) None of the above"],
      answer: "a) Checks if a variable is NaN"
    },
    {
      question: "49. What is the result of '1' + 1 in JavaScript?",
      options: ["a) '2'", "b) 2", "c) 11", "d) NaN"],
      answer: "c) 11"
    },
    {
      question: "50. What does the 'undefined' value represent in JavaScript?",
      options: ["a) The value is defined but has no value", "b) The variable has not been assigned a value", "c) The variable is deleted", "d) The variable is null"],
      answer: "b) The variable has not been assigned a value"
    }
  ];

  const JavaScript = () => {
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
            <h2 className="fs-2 font-bold text-center"> JavaScript Quiz</h2>
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
  
  export default JavaScript;
  
  
  
  
  
  
  
    

