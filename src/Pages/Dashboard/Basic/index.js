import React, { useState, useEffect, useCallback } from "react";
const questions = [
    {
        question: "What does CPU stand for?",
        options: ["Central Process Unit", "Central Processing Unit", "Central Power Unit", "Computer Personal Unit"],
        answer: "Central Processing Unit"
    },
    {
        question: "Which of the following is an input device?",
        options: ["Monitor", "Keyboard", "Printer", "Speaker"],
        answer: "Keyboard"
    },
    {
        question: "What is the full form of RAM?",
        options: ["Read Access Memory", "Random Access Memory", "Random Active Memory", "Read Active Memory"],
        answer: "Random Access Memory"
    },
    {
        question: "Which of the following is the main circuit board in a computer?",
        options: ["CPU", "Motherboard", "Hard Drive", "Graphics Card"],
        answer: "Motherboard"
    },
    {
        question: "What does the acronym 'HTTP' stand for?",
        options: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HighText Transfer Protocol", "HighText Transmission Protocol"],
        answer: "HyperText Transfer Protocol"
    },
    {
        question: "Which of the following is used to store data permanently in a computer?",
        options: ["RAM", "ROM", "Cache", "Hard Disk"],
        answer: "Hard Disk"
    },
    {
        question: "Which of the following is a programming language?",
        options: ["HTML", "JavaScript", "CSS", "XML"],
        answer: "JavaScript"
    },
    {
        question: "Which company developed the Windows operating system?",
        options: ["Apple", "Microsoft", "Google", "IBM"],
        answer: "Microsoft"
    },
    {
        question: "What is the main function of the operating system?",
        options: ["Run applications", "Manage hardware", "Store data", "Display graphics"],
        answer: "Manage hardware"
    },
    {
        question: "What is the full form of 'USB'?",
        options: ["Universal Serial Bus", "Unified Serial Bus", "Universal System Bus", "Unified System Bus"],
        answer: "Universal Serial Bus"
    },
    {
        question: "Which of the following is an output device?",
        options: ["Scanner", "Keyboard", "Monitor", "Mouse"],
        answer: "Monitor"
    },
    {
        question: "Which of the following is the most common type of computer memory?",
        options: ["RAM", "ROM", "Cache", "Virtual Memory"],
        answer: "RAM"
    },
    {
        question: "Which component is responsible for executing instructions in a computer?",
        options: ["Hard Disk", "CPU", "RAM", "GPU"],
        answer: "CPU"
    },
    {
        question: "What does the term 'booting' refer to?",
        options: ["Starting up the computer", "Shutting down the computer", "Rebooting the computer", "Installing a program"],
        answer: "Starting up the computer"
    },
    {
        question: "Which of the following is used for storing data temporarily in a computer?",
        options: ["Hard Disk", "RAM", "Floppy Disk", "ROM"],
        answer: "RAM"
    },
    {
        question: "What is the full form of 'BIOS'?",
        options: ["Basic Integrated Operating System", "Basic Input Output System", "Binary Input Output System", "Basic Internal Operating System"],
        answer: "Basic Input Output System"
    },
    {
        question: "Which of the following is the smallest unit of data in a computer?",
        options: ["Byte", "Bit", "Kilobyte", "Megabyte"],
        answer: "Bit"
    },
    {
        question: "What is the function of the 'motherboard'?",
        options: ["Stores data", "Controls the computer's power", "Connects all the hardware components", "Performs calculations"],
        answer: "Connects all the hardware components"
    },
    {
        question: "What does the term 'URL' stand for?",
        options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Retrieval Locator", "Universal Retrieval Locator"],
        answer: "Uniform Resource Locator"
    },
    {
        question: "What does 'WWW' stand for?",
        options: ["World Wide Web", "World Web Wide", "Web World Wide", "Web Wide World"],
        answer: "World Wide Web"
    },
    {
        question: "Which of the following is an example of an antivirus software?",
        options: ["Norton", "Photoshop", "Chrome", "Word"],
        answer: "Norton"
    },
    {
        question: "What is the full form of 'DVD'?",
        options: ["Digital Video Disk", "Digital Versatile Disk", "Disk Video Disk", "Disk Versatile Disk"],
        answer: "Digital Versatile Disk"
    },
    {
        question: "Which of the following is an example of a web browser?",
        options: ["Windows Explorer", "Google Chrome", "Microsoft Word", "Excel"],
        answer: "Google Chrome"
    },
    {
        question: "Which part of the computer stores the operating system?",
        options: ["Hard Disk", "RAM", "Motherboard", "CPU"],
        answer: "Hard Disk"
    },
    {
        question: "What is the main function of an 'ALU' in a computer?",
        options: ["Control unit", "Arithmetic and logic operations", "Memory management", "Input-output operations"],
        answer: "Arithmetic and logic operations"
    },
    {
        question: "What is the primary function of a 'router'?",
        options: ["Transmit signals", "Store data", "Direct network traffic", "Create web pages"],
        answer: "Direct network traffic"
    },
    {
        question: "Which of the following is an operating system?",
        options: ["Linux", "Photoshop", "Chrome", "Word"],
        answer: "Linux"
    },
    {
        question: "What does the term 'cloud computing' refer to?",
        options: ["Storing data on physical disks", "Using software through the internet", "Computing using a local server", "Storing data in local storage"],
        answer: "Using software through the internet"
    },
    {
        question: "What is the full form of 'IP'?",
        options: ["Internet Protocol", "Internal Protocol", "Internet Program", "Internal Program"],
        answer: "Internet Protocol"
    },
    {
        question: "Which of the following is the brain of the computer?",
        options: ["CPU", "RAM", "Hard Disk", "Monitor"],
        answer: "CPU"
    },
    {
        question: "What is the primary function of an 'operating system'?",
        options: ["Manage hardware resources", "Provide internet access", "Run applications", "Store data"],
        answer: "Manage hardware resources"
    },
    {
        question: "What does 'URL' stand for?",
        options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Retrieval Locator", "Universal Retrieval Locator"],
        answer: "Uniform Resource Locator"
    },
    {
        question: "Which of the following is not a type of computer?",
        options: ["Desktop", "Laptop", "Server", "Television"],
        answer: "Television"
    }
];

const Basic = () => {
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
          <h2 className="fs-2 font-bold text-center">Computer Basic Quiz</h2>
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

export default Basic;



