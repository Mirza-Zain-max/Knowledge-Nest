import React, { useState, useEffect, useCallback } from "react";
const questions = [
    {
      question: "1. What is the default method of voucher numbering in Tally ERP 9?",
      options: ["a) Manual", "b) Automatic", "c) Both", "d) None"],
      answer: "b) Automatic"
    },
    {
      question: "2. Which of the following is NOT a type of voucher in Tally ERP 9?",
      options: ["a) Payment", "b) Receipt", "c) Journal", "d) Statement"],
      answer: "d) Statement"
    },
    {
      question: "3. Which shortcut key is used to display the 'Gateway of Tally' screen?",
      options: ["a) Alt + G", "b) F1", "c) Alt + F1", "d) Ctrl + G"],
      answer: "a) Alt + G"
    },
    {
      question: "4. What is the maximum number of companies that can be managed in Tally ERP 9?",
      options: ["a) 5", "b) 10", "c) 50", "d) Unlimited"],
      answer: "d) Unlimited"
    },
    {
      question: "5. Which option in Tally ERP 9 is used for creating new accounts?",
      options: ["a) Accounts Info", "b) Voucher Entry", "c) Reports", "d) Inventory Info"],
      answer: "a) Accounts Info"
    },
    {
      question: "6. Which voucher type is used to record sales in Tally ERP 9?",
      options: ["a) Sales", "b) Receipt", "c) Purchase", "d) Journal"],
      answer: "a) Sales"
    },
    {
      question: "7. In Tally ERP 9, the default currency symbol is which of the following?",
      options: ["a) ₹", "b) $", "c) £", "d) €"],
      answer: "a) ₹"
    },
    {
      question: "8. In Tally ERP 9, which of the following reports shows the status of stock in hand?",
      options: ["a) Balance Sheet", "b) Trial Balance", "c) Stock Summary", "d) Profit & Loss Account"],
      answer: "c) Stock Summary"
    },
    {
      question: "9. Which option in Tally ERP 9 is used to maintain multiple inventory locations?",
      options: ["a) Godown", "b) Inventory Vouchers", "c) Stock Items", "d) All of the above"],
      answer: "a) Godown"
    },
    {
      question: "10. How can you view the ledger in Tally ERP 9?",
      options: ["a) Go to Accounts Info", "b) Press F6", "c) Go to Display", "d) Both b and c"],
      answer: "d) Both b and c"
    },
    {
      question: "11. In Tally ERP 9, which function is used to view or print financial statements?",
      options: ["a) Display", "b) Reports", "c) Accounts Info", "d) Alter"],
      answer: "b) Reports"
    },
    {
      question: "12. Which of the following is used to record inventory-related transactions in Tally ERP 9?",
      options: ["a) Stock Vouchers", "b) Payment Vouchers", "c) Receipt Vouchers", "d) Journal Vouchers"],
      answer: "a) Stock Vouchers"
    },
    {
      question: "13. In Tally ERP 9, which feature is used to change the accounting period?",
      options: ["a) Accounting Info", "b) Alter", "c) Change Period", "d) Company Info"],
      answer: "d) Company Info"
    },
    {
      question: "14. What is the purpose of Tally ERP 9's 'Cost Centres' feature?",
      options: ["a) To manage budgets", "b) To allocate expenses to specific departments", "c) To calculate taxes", "d) To manage sales"],
      answer: "b) To allocate expenses to specific departments"
    },
    {
      question: "15. How can you enter a purchase transaction in Tally ERP 9?",
      options: ["a) Use the Purchase Voucher", "b) Use the Receipt Voucher", "c) Use the Payment Voucher", "d) Use the Journal Voucher"],
      answer: "a) Use the Purchase Voucher"
    },
    {
      question: "16. Which feature in Tally ERP 9 allows you to define and manage tax rates?",
      options: ["a) VAT", "b) Tax Computation", "c) Tax Types", "d) Sales Tax"],
      answer: "c) Tax Types"
    },
    {
      question: "17. In Tally ERP 9, which of the following options is used to modify or delete vouchers?",
      options: ["a) Voucher Entry", "b) Alter", "c) Ledger", "d) Display"],
      answer: "b) Alter"
    },
    {
      question: "18. In Tally ERP 9, which option is used to view the list of all outstanding receivables?",
      options: ["a) Outstanding Payables", "b) Sales Register", "c) Account Ledger", "d) Outstanding Receivables"],
      answer: "d) Outstanding Receivables"
    },
    {
      question: "19. What is the purpose of the 'Reconcile' feature in Tally ERP 9?",
      options: ["a) To reconcile bank and cash balances", "b) To calculate GST", "c) To generate trial balance", "d) To calculate profits"],
      answer: "a) To reconcile bank and cash balances"
    },
    {
      question: "20. Which of the following reports provides information about the income and expenses of a company?",
      options: ["a) Balance Sheet", "b) Trial Balance", "c) Profit & Loss Account", "d) Cash Flow"],
      answer: "c) Profit & Loss Account"
    },
    {
      question: "21. Which of the following is used to manage multiple company data in Tally ERP 9?",
      options: ["a) Gateway of Tally", "b) Company Info", "c) Alter", "d) Display"],
      answer: "b) Company Info"
    },
    {
      question: "22. In Tally ERP 9, how can you change the name of an existing ledger?",
      options: ["a) Use the Alter option", "b) Use the Modify option", "c) Use the Ledger Info", "d) Use the Rename option"],
      answer: "a) Use the Alter option"
    },
    {
      question: "23. In Tally ERP 9, which feature allows you to track the profitability of each department separately?",
      options: ["a) Cost Centres", "b) Profit Centres", "c) Departments", "d) Stock Groups"],
      answer: "a) Cost Centres"
    },
    {
      question: "24. Which of the following is a pre-configured group in Tally ERP 9?",
      options: ["a) Sales Account", "b) Sundry Debtors", "c) Bank Account", "d) All of the above"],
      answer: "d) All of the above"
    },
    {
      question: "25. In Tally ERP 9, the option for making a company password protected is located under which menu?",
      options: ["a) Display", "b) Company Info", "c) Alter", "d) Security Control"],
      answer: "b) Company Info"
    },
    {
      question: "26. Which of the following statements is true about 'Godown' in Tally ERP 9?",
      options: [
        "a) It is used to track inventory stock in multiple locations",
        "b) It helps in categorizing different sales and purchase items",
        "c) It is used to track financial transactions",
        "d) It cannot be modified once created"
      ],
      answer: "a) It is used to track inventory stock in multiple locations"
    },
    {
      question: "27. In Tally ERP 9, which of the following is used to print accounting vouchers?",
      options: ["a) Print", "b) Voucher Printing", "c) Export", "d) Print Preview"],
      answer: "b) Voucher Printing"
    },
    {
      question: "28. Which report in Tally ERP 9 displays the financial health of the company?",
      options: ["a) Balance Sheet", "b) Trial Balance", "c) Profit & Loss Account", "d) Both a and c"],
      answer: "d) Both a and c"
    },
    {
      question: "29. What is the main purpose of Tally ERP 9's 'Audit & Compliance' feature?",
      options: [
        "a) To perform VAT and GST calculations",
        "b) To ensure compliance with accounting standards",
        "c) To record audit logs",
        "d) All of the above"
      ],
      answer: "d) All of the above"
    },
    {
      question: "30. In Tally ERP 9, which function allows you to create a backup of your data?",
      options: ["a) Backup", "b) Restore", "c) Data Sync", "d) Export Data"],
      answer: "a) Backup"
    },
    {
      question: "31. What is the shortcut for displaying the 'Day Book' in Tally ERP 9?",
      options: ["a) Alt + F5", "b) F3", "c) F5", "d) Ctrl + D"],
      answer: "a) Alt + F5"
    },
    {
      question: "32. What is the primary function of the 'Bank Reconciliation' feature in Tally ERP 9?",
      options: ["a) To reconcile inventory stock", "b) To reconcile bank statements with the cash book", "c) To reconcile purchase transactions", "d) To reconcile sales transactions"],
      answer: "b) To reconcile bank statements with the cash book"
    },
    {
      question: "33. In Tally ERP 9, which of the following can be used to track and manage GST returns?",
      options: ["a) GST Reports", "b) Tax Reports", "c) Audit & Compliance", "d) All of the above"],
      answer: "d) All of the above"
    },
    {
      question: "34. In Tally ERP 9, which type of report displays all the transactions of a particular ledger?",
      options: ["a) Cash Book", "b) Day Book", "c) Ledger Report", "d) Trial Balance"],
      answer: "c) Ledger Report"
    },
    {
      question: "35. How do you view the 'Stock Register' in Tally ERP 9?",
      options: ["a) Go to Display > Stock Register", "b) Go to Inventory Info > Stock Register", "c) Press F7", "d) Go to Accounting Info > Stock Register"],
      answer: "a) Go to Display > Stock Register"
    },
    {
      question: "36. Which of the following options in Tally ERP 9 helps in generating sales invoices?",
      options: ["a) Sales Voucher", "b) Sales Receipt", "c) Sales Register", "d) Sales Invoice"],
      answer: "a) Sales Voucher"
    },
    {
      question: "37. In Tally ERP 9, which option is used to generate the GST tax report?",
      options: ["a) GST Reports", "b) Tax Analysis", "c) Audit Reports", "d) Sales Register"],
      answer: "a) GST Reports"
    },
    {
      question: "38. In Tally ERP 9, which of the following is used to maintain credit limits for customers?",
      options: ["a) Credit Control", "b) Ledger Configuration", "c) Accounts Info", "d) Customer Information"],
      answer: "b) Ledger Configuration"
    },
    {
      question: "39. In Tally ERP 9, the 'Alter' function allows you to make changes to which of the following?",
      options: ["a) Vouchers", "b) Ledgers", "c) Stock Items", "d) All of the above"],
      answer: "d) All of the above"
    },
    {
      question: "40. What is the shortcut for creating a new company in Tally ERP 9?",
      options: ["a) Alt + C", "b) Alt + N", "c) Ctrl + C", "d) F2"],
      answer: "a) Alt + C"
    },
    {
      question: "41. How can you enable the use of GST in Tally ERP 9?",
      options: ["a) Enable GST under Company Info", "b) Enable GST under Accounting Info", "c) Enable GST under Reports", "d) Enable GST under Display"],
      answer: "a) Enable GST under Company Info"
    },
    {
      question: "42. What is the purpose of using 'Voucher Class' in Tally ERP 9?",
      options: ["a) To define different types of vouchers", "b) To classify transactions", "c) To assign voucher types", "d) All of the above"],
      answer: "d) All of the above"
    },
    {
      question: "43. In Tally ERP 9, which option is used to generate financial statements at the end of a financial year?",
      options: ["a) Display > Financial Statements", "b) Reports > Financial Statements", "c) Display > Profit & Loss Account", "d) Both a and b"],
      answer: "d) Both a and b"
    },
    {
      question: "44. Which of the following vouchers is used for transferring amounts from one ledger to another?",
      options: ["a) Journal Voucher", "b) Payment Voucher", "c) Receipt Voucher", "d) Contra Voucher"],
      answer: "a) Journal Voucher"
    },
    {
      question: "45. In Tally ERP 9, the 'Cash Flow' report helps to determine the movement of which of the following?",
      options: ["a) Cash and Bank", "b) Expenses", "c) Profits", "d) Sales"],
      answer: "a) Cash and Bank"
    },
    {
      question: "46. How do you view the 'Trial Balance' in Tally ERP 9?",
      options: ["a) Go to Reports > Trial Balance", "b) Go to Display > Trial Balance", "c) Go to Ledger > Trial Balance", "d) Press F8"],
      answer: "b) Go to Display > Trial Balance"
    },
    {
      question: "47. In Tally ERP 9, which of the following is used to create a new inventory item?",
      options: ["a) Inventory Info", "b) Stock Group", "c) Stock Item", "d) Godown Info"],
      answer: "c) Stock Item"
    },
    {
      question: "48. In Tally ERP 9, what is the default currency symbol used for transactions?",
      options: ["a) ₹", "b) $", "c) £", "d) €"],
      answer: "a) ₹"
    },
    {
      question: "49. What is the shortcut key for printing a voucher in Tally ERP 9?",
      options: ["a) Alt + P", "b) F12", "c) Ctrl + P", "d) Shift + P"],
      answer: "a) Alt + P"
    },
    {
      question: "50. How do you activate the multi-user mode in Tally ERP 9?",
      options: ["a) By configuring the Tally.ini file", "b) By going to 'Company Info' and selecting 'Enable Multi User'", "c) By clicking on 'Activate Multi User' from the Gateway", "d) By modifying the 'License' section"],
      answer: "b) By going to 'Company Info' and selecting 'Enable Multi User'"
    }
  ];
  
  const TallyEPR = () => {
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
            <h2 className="fs-2 font-bold text-center"> TallyEPR Quiz</h2>
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
  
  export default TallyEPR;
  
  
  
  
