import React, { useState, useEffect, useCallback } from "react";
const questions = [
  {
    question: "1. What is Tally Prime?",
    options: ["Accounting Software", "Operating System", "Database Management Software", "Cloud Storage Platform"],
    answer: "Accounting Software"
  },
  {
    question: "2. Which of the following is NOT a feature of Tally Prime?",
    options: ["GST Compliance", "Multi-currency support", "Inventory Management", "Video Editing"],
    answer: "Video Editing"
  },
  {
    question: "3. In Tally Prime, which shortcut is used to create a new voucher?",
    options: ["Ctrl + N", "Ctrl + C", "Alt + N", "Alt + C"],
    answer: "Alt + N"
  },
  {
    question: "4. How can you enable GST in Tally Prime?",
    options: ["From the 'Accounting Masters' menu", "During company creation", "In the 'Features' menu", "In the 'Licenses' section"],
    answer: "During company creation"
  },
  {
    question: "5. Which key is used to access the 'Gateway of Tally' in Tally Prime?",
    options: ["Ctrl + G", "Alt + G", "F1", "F11"],
    answer: "Ctrl + G"
  },
  {
    question: "6. What is the default file extension for Tally Prime data?",
    options: [".tds", ".tsd", ".tpr", ".tally"],
    answer: ".tally"
  },
  {
    question: "7. In Tally Prime, the 'Inventory Vouchers' are used for?",
    options: ["Record sales and purchase transactions", "Manage cash transactions", "Maintain stock movements", "Track employee salaries"],
    answer: "Maintain stock movements"
  },
  {
    question: "8. What is the maximum number of companies you can manage in Tally Prime?",
    options: ["5", "10", "Unlimited", "100"],
    answer: "Unlimited"
  },
  {
    question: "9. How do you back up data in Tally Prime?",
    options: ["Using the 'Backup' option in the 'Gateway of Tally'", "Manually copying the data folder", "Using a third-party tool", "By exporting the data as CSV"],
    answer: "Using the 'Backup' option in the 'Gateway of Tally'"
  },
  {
    question: "10. What is the shortcut for 'F11: Features' in Tally Prime?",
    options: ["Ctrl + F1", "F1", "Ctrl + F2", "Alt + F11"],
    answer: "F1"
  },
  {
    question: "11. What is a ‘Group’ in Tally Prime?",
    options: ["A collection of similar accounts", "A list of transactions", "A collection of inventory items", "A sub-menu in the software"],
    answer: "A collection of similar accounts"
  },
  {
    question: "12. In Tally Prime, what is the shortcut to view the 'Balance Sheet'?",
    options: ["Ctrl + B", "Alt + B", "F2", "F3"],
    answer: "Alt + B"
  },
  {
    question: "13. What type of data can be entered in Tally Prime's 'Voucher Entry'?",
    options: ["Sales data", "Purchase data", "Payment data", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "14. What is the 'Daybook' in Tally Prime?",
    options: ["A register of transactions", "A list of inventory items", "A summary of monthly expenses", "A report of accounts receivable"],
    answer: "A register of transactions"
  },
  {
    question: "15. How can you enable multi-user functionality in Tally Prime?",
    options: ["By purchasing a multi-user license", "By upgrading the system to a network version", "By enabling the multi-user option in settings", "By entering multiple user details during installation"],
    answer: "By purchasing a multi-user license"
  },
  {
    question: "16. Which feature in Tally Prime is used for tax computation and filing?",
    options: ["Tax Deducted at Source (TDS)", "Goods and Services Tax (GST)", "Payroll Management", "Inventory Management"],
    answer: "Goods and Services Tax (GST)"
  },
  {
    question: "17. What does Tally Prime use to keep track of inventory?",
    options: ["Inventory Master", "Stock Groups", "Stock Items", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "18. In Tally Prime, the 'Contra Voucher' is used for?",
    options: ["Recording cash transactions", "Recording banking transactions", "Recording stock transactions", "Recording purchase transactions"],
    answer: "Recording banking transactions"
  },
  {
    question: "19. What is the shortcut for 'Create a new Ledger' in Tally Prime?",
    options: ["Ctrl + L", "Alt + L", "F7", "F8"],
    answer: "Ctrl + L"
  },
  {
    question: "20. Which key in Tally Prime is used for 'Accounting Vouchers'?",
    options: ["Alt + A", "Alt + B", "Ctrl + A", "Ctrl + B"],
    answer: "Alt + A"
  },
  {
    question: "21. How do you activate Tally Prime on a new computer?",
    options: ["By entering the license key during installation", "By connecting to the Tally server", "By registering with the Tally support team", "By installing the crack version"],
    answer: "By entering the license key during installation"
  },
  {
    question: "22. Which of the following options is available under the 'Reports' menu in Tally Prime?",
    options: ["Trial Balance", "Balance Sheet", "Profit & Loss Account", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "23. How can you export data from Tally Prime?",
    options: ["By using the 'Export' option in the 'Gateway of Tally'", "By exporting to Excel format", "By copying the data folder", "By using a third-party tool"],
    answer: "By using the 'Export' option in the 'Gateway of Tally'"
  },
  {
    question: "24. What is the main advantage of using Tally Prime?",
    options: ["Easy to use", "Time-saving features", "GST-compliance", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "25. In Tally Prime, how do you calculate GST for a transaction?",
    options: ["Automatically based on the GST settings", "Manually entering GST rates", "By applying the GST formula", "By using the in-built tax calculator tool"],
    answer: "Automatically based on the GST settings"
  },
  {
    question: "26. How do you create a new company in Tally Prime?",
    options: ["From the 'Gateway of Tally' menu", "By clicking on 'Create Company' option", "By importing from an existing company", "By using the 'Company' menu"],
    answer: "By clicking on 'Create Company' option"
  },
  {
    question: "27. Which option in Tally Prime helps to track employee salaries?",
    options: ["Payroll Management", "Accounting Vouchers", "Inventory Vouchers", "GST Vouchers"],
    answer: "Payroll Management"
  },
  {
    question: "28. In Tally Prime, which key is used to open the 'Voucher Type' screen?",
    options: ["Ctrl + V", "Ctrl + T", "Alt + V", "Alt + T"],
    answer: "Ctrl + T"
  },
  {
    question: "29. In Tally Prime, what is the function of the 'F12' key?",
    options: ["Configure company features", "View company reports", "Create a new voucher", "Exit from Tally"],
    answer: "Configure company features"
  },
  {
    question: "30. What is the primary role of the 'Ledger' in Tally Prime?",
    options: ["To record transaction entries", "To track stock items", "To record employee details", "To manage GST calculations"],
    answer: "To record transaction entries"
  },
  {
    question: "31. How can you apply filters while viewing reports in Tally Prime?",
    options: ["By selecting filters from the 'Filter' option", "By using the search bar", "By using F12 key", "By manually entering filter criteria"],
    answer: "By selecting filters from the 'Filter' option"
  },
  {
    question: "32. What is the default currency in Tally Prime?",
    options: ["USD", "INR", "EUR", "GBP"],
    answer: "INR"
  },
  {
    question: "33. How can you change the accounting period in Tally Prime?",
    options: ["By configuring it during company creation", "By using the 'Alter Company' option", "By entering the period manually", "By using F12 key settings"],
    answer: "By using the 'Alter Company' option"
  },
  {
    question: "34. What is the 'Group' option used for in Tally Prime?",
    options: ["To categorize similar types of accounts", "To view balance sheet items", "To track GST entries", "To manage employee information"],
    answer: "To categorize similar types of accounts"
  },
  {
    question: "35. Which report in Tally Prime shows a summary of all accounting transactions?",
    options: ["Daybook", "Trial Balance", "Cash Book", "Ledger Report"],
    answer: "Trial Balance"
  },
  {
    question: "36. In Tally Prime, what is 'Cost Centers' used for?",
    options: ["To track project-based or department-based expenses", "To calculate GST on each transaction", "To view financial statements", "To maintain payroll details"],
    answer: "To track project-based or department-based expenses"
  },
  {
    question: "37. Which of the following reports in Tally Prime helps with GST reconciliation?",
    options: ["GST Summary", "GST Return", "GST Voucher Report", "GST Reconciliation Report"],
    answer: "GST Reconciliation Report"
  },
  {
    question: "38. What is the shortcut to access the 'Gateway of Tally'?",
    options: ["Ctrl + G", "Ctrl + H", "Alt + G", "Alt + H"],
    answer: "Ctrl + G"
  },
  {
    question: "39. How do you handle data corruption issues in Tally Prime?",
    options: ["By restoring from backup", "By re-installing the software", "By using data repair tools", "By contacting Tally support"],
    answer: "By restoring from backup"
  },
  {
    question: "40. Which of the following features is available in Tally Prime?",
    options: ["Multi-currency support", "Payroll management", "GST compliance", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "41. How can you synchronize data between multiple users in Tally Prime?",
    options: ["By using the Tally Server", "By using the Tally.net feature", "By creating data backups", "By using a cloud server"],
    answer: "By using the Tally.net feature"
  },
  {
    question: "42. In Tally Prime, which voucher is used to enter payment transactions?",
    options: ["Payment Voucher", "Receipt Voucher", "Sales Voucher", "Purchase Voucher"],
    answer: "Payment Voucher"
  },
  {
    question: "43. What is the primary purpose of the 'Stock Group' in Tally Prime?",
    options: ["To categorize inventory items", "To track stock movements", "To manage GST calculations", "To calculate payroll expenses"],
    answer: "To categorize inventory items"
  },
  {
    question: "44. Which key in Tally Prime is used to view the 'Profit & Loss' statement?",
    options: ["Alt + P", "Ctrl + P", "Alt + F1", "Ctrl + F1"],
    answer: "Alt + P"
  },
  {
    question: "45. Which of the following reports shows a detailed breakdown of all expenses and incomes?",
    options: ["Profit & Loss Account", "Balance Sheet", "Trial Balance", "Cash Flow"],
    answer: "Profit & Loss Account"
  },
  {
    question: "46. Which option in Tally Prime is used to create a new stock item?",
    options: ["Inventory Masters", "Stock Groups", "Stock Item Creation", "Voucher Entry"],
    answer: "Stock Item Creation"
  },
  {
    question: "47. How do you alter an existing company in Tally Prime?",
    options: ["By selecting the 'Alter Company' option from the 'Gateway of Tally'", "By opening the company directly", "By deleting the company and creating a new one", "By accessing the 'Company Settings' in the menu"],
    answer: "By selecting the 'Alter Company' option from the 'Gateway of Tally'"
  },
  {
    question: "48. In Tally Prime, what is the use of the 'Cost Center'?",
    options: ["To track income and expenses for different departments or projects", "To calculate the overall profit of the company", "To calculate and manage taxes", "To manage employee salaries"],
    answer: "To track income and expenses for different departments or projects"
  },
  {
    question: "49. What is the main purpose of the 'Voucher Class' in Tally Prime?",
    options: ["To categorize transactions under different classes", "To apply default values for certain vouchers", "To record ledger details", "To create inventory items"],
    answer: "To apply default values for certain vouchers"
  },
  {
    question: "50. Which feature in Tally Prime helps in integrating the software with a bank for reconciliation?",
    options: ["Bank Reconciliation", "Data Synchronization", "Bank Payment Gateway", "Cheque Management"],
    answer: "Bank Reconciliation"
  }
];

const Tallyprime = () => {
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
          <h2 className="fs-2 font-bold text-center">Tallyprime Quiz</h2>
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

export default Tallyprime;



