import React, { useState, useEffect, useCallback } from "react";
const questions = [
  {
    question: "1. What is the shortcut key to open a new workbook in Excel?",
    options: ["Ctrl + N", "Ctrl + O", "Ctrl + P", "Ctrl + W"],
    answer: "Ctrl + N"
  },
  {
    question: "2. What function is used to find the largest number in a set of values?",
    options: ["MIN", "MAX", "SUM", "AVERAGE"],
    answer: "MAX"
  },
  {
    question: "3. Which of the following is used to remove duplicates from a dataset?",
    options: ["Data Validation", "Remove Duplicates", "Find and Replace", "Sort & Filter"],
    answer: "Remove Duplicates"
  },
  {
    question: "4. What is the extension of an Excel file?",
    options: [".xls", ".xlsx", ".csv", ".txt"],
    answer: ".xlsx"
  },
  {
    question: "5. In Excel, how do you add a new worksheet?",
    options: ["Right-click on the sheet tab and click 'Insert'", "Press Shift + F11", "Click 'File' and select 'New Sheet'", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "6. Which function in Excel will return the current date?",
    options: ["NOW()", "DATE()", "TODAY()", "TIME()"],
    answer: "TODAY()"
  },
  {
    question: "7. How do you freeze the top row in Excel?",
    options: ["View → Freeze Panes → Freeze Top Row", "View → Lock Cells → Freeze Row", "Window → Freeze Row", "None of the above"],
    answer: "View → Freeze Panes → Freeze Top Row"
  },
  {
    question: "8. What does the VLOOKUP function do in Excel?",
    options: ["Looks up data vertically in a table", "Looks up data horizontally in a table", "Summarizes data", "Formats cells based on conditions"],
    answer: "Looks up data vertically in a table"
  },
  {
    question: "9. Which of the following is not a valid Excel data type?",
    options: ["Text", "Integer", "Logical", "Currency"],
    answer: "Integer"
  },
  {
    question: "10. What is the shortcut key to add a new row in Excel?",
    options: ["Alt + N", "Ctrl + Shift + +", "Ctrl + R", "Ctrl + Shift + N"],
    answer: "Ctrl + Shift + +"
  },
  {
    question: "11. What function is used to count the number of cells that contain numbers?",
    options: ["COUNT", "COUNTA", "COUNTIF", "COUNTBLANK"],
    answer: "COUNT"
  },
  {
    question: "12. What does the SUMIF function do?",
    options: ["Sums values in a range based on a condition", "Counts cells with specific values", "Summarizes data", "Checks if a condition is met"],
    answer: "Sums values in a range based on a condition"
  },
  {
    question: "13. In Excel, which of the following is used to merge cells?",
    options: ["Ctrl + M", "Alt + Enter", "Merge & Center", "Ctrl + Shift + M"],
    answer: "Merge & Center"
  },
  {
    question: "14. What is the maximum number of rows allowed in Excel 2016?",
    options: ["1,048,576", "65,536", "1,000,000", "50,000"],
    answer: "1,048,576"
  },
  {
    question: "15. Which Excel function would you use to calculate the average of a range of numbers?",
    options: ["AVERAGE", "SUM", "MEAN", "MEDIAN"],
    answer: "AVERAGE"
  },
  {
    question: "16. What is the purpose of the CONCATENATE function?",
    options: ["It combines the values of two or more cells", "It finds the sum of multiple cells", "It counts the number of words", "It formats text in cells"],
    answer: "It combines the values of two or more cells"
  },
  {
    question: "17. What type of chart would you use to display trends over time?",
    options: ["Bar Chart", "Pie Chart", "Line Chart", "Column Chart"],
    answer: "Line Chart"
  },
  {
    question: "18. How can you select an entire column in Excel?",
    options: ["Click on the column header", "Press Ctrl + Space", "Right-click and choose 'Select Column'", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "19. What does the IF function do?",
    options: ["Checks whether a condition is true or false", "Counts cells based on a condition", "Sums values based on a condition", "Returns the average of a range of cells"],
    answer: "Checks whether a condition is true or false"
  },
  {
    question: "20. Which of the following is not a valid cell reference in Excel?",
    options: ["A1", "B2", "$C$3", "A#5"],
    answer: "A#5"
  },
  {
    question: "21. What is the shortcut for the 'Find' function in Excel?",
    options: ["Ctrl + F", "Ctrl + H", "Ctrl + R", "Ctrl + E"],
    answer: "Ctrl + F"
  },
  {
    question: "22. How can you change the font size of a cell in Excel?",
    options: ["Right-click and select 'Font Size'", "Use the 'Font' group on the Ribbon", "Use the 'Format Cells' dialog", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "23. Which of the following Excel functions can you use to round numbers?",
    options: ["ROUND", "ROUNDDOWN", "ROUNDUP", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "24. How do you insert a comment in a cell in Excel?",
    options: ["Right-click and select 'Insert Comment'", "Use the 'Review' tab", "Press Ctrl + Alt + C", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "25. What is a pivot table used for in Excel?",
    options: ["Summarizing and analyzing data", "Creating charts", "Performing calculations", "Formatting cells"],
    answer: "Summarizing and analyzing data"
  },
  {
    question: "26. Which of the following functions would you use to find the current time in Excel?",
    options: ["NOW()", "TIME()", "DATE()", "TODAY()"],
    answer: "NOW()"
  },
  {
    question: "27. What does the COUNTIF function do?",
    options: ["Counts the number of cells in a range that meet a specific condition", "Counts the total number of cells", "Counts the number of text values", "Counts the number of unique values"],
    answer: "Counts the number of cells in a range that meet a specific condition"
  },
  {
    question: "28. How do you add a border around a cell?",
    options: ["Right-click and choose 'Format Cells' > 'Borders'", "Use the 'Borders' button in the 'Home' tab", "Press Ctrl + B", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "29. How can you change the cell format to currency?",
    options: ["Use the 'Format Cells' dialog", "Click the 'Currency' option on the 'Home' tab", "Press Ctrl + Shift + C", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "30. What is the maximum number of sheets allowed in an Excel workbook?",
    options: ["255", "100", "Unlimited", "1000"],
    answer: "Unlimited"
  },
  {
    question: "31. Which Excel feature allows you to highlight cells that meet certain conditions?",
    options: ["Conditional Formatting", "Data Validation", "Cell Styles", "AutoFilter"],
    answer: "Conditional Formatting"
  },
  {
    question: "32. How do you convert a text value to a number in Excel?",
    options: ["Use the VALUE function", "Use the TEXT function", "Use the CONVERT function", "None of the above"],
    answer: "Use the VALUE function"
  },
  {
    question: "33. What is the function of the 'Find and Replace' tool in Excel?",
    options: ["To find specific data and replace it", "To search for a value in the entire workbook", "To filter data based on conditions", "None of the above"],
    answer: "To find specific data and replace it"
  },
  {
    question: "34. How do you insert a hyperlink in Excel?",
    options: ["Right-click and select 'Insert Hyperlink'", "Use the 'Insert' tab", "Press Ctrl + K", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "35. What type of chart is used to display percentages of a whole?",
    options: ["Column Chart", "Pie Chart", "Line Chart", "Bar Chart"],
    answer: "Pie Chart"
  },
  {
    question: "36. What does the F4 key do in Excel?",
    options: ["Repeats the last action", "Finds the next occurrence of the search term", "Opens the 'Find' dialog", "None of the above"],
    answer: "Repeats the last action"
  },
  {
    question: "37. How do you apply a cell style in Excel?",
    options: ["Use the 'Cell Styles' option under the 'Home' tab", "Press Ctrl + Shift + S", "Right-click and select 'Apply Style'", "None of the above"],
    answer: "Use the 'Cell Styles' option under the 'Home' tab"
  },
  {
    question: "38. Which of the following is not a valid Excel function?",
    options: ["SUM", "AVERAGE", "COUNTIF", "AVERAGEIF"],
    answer: "AVERAGEIF"
  },
  {
    question: "39. How do you create a drop-down list in Excel?",
    options: ["Use Data Validation", "Use a Form Control", "Insert a Combo Box", "Use the 'List' option in the 'Insert' tab"],
    answer: "Use Data Validation"
  },
  {
    question: "40. How do you protect a worksheet in Excel?",
    options: ["Go to 'Review' and select 'Protect Sheet'", "Right-click on the sheet and select 'Protect'", "Press Ctrl + Alt + P", "None of the above"],
    answer: "Go to 'Review' and select 'Protect Sheet'"
  },
  {
    question: "41. What does the SUBSTITUTE function do?",
    options: ["Replaces a specified text with another text", "Finds the sum of a range", "Searches for a value in a range", "None of the above"],
    answer: "Replaces a specified text with another text"
  },
  {
    question: "42. How do you insert a page break in Excel?",
    options: ["Go to the 'Page Layout' tab and click 'Breaks'", "Press Ctrl + Shift + Enter", "Right-click and select 'Insert Page Break'", "None of the above"],
    answer: "Go to the 'Page Layout' tab and click 'Breaks'"
  },
  {
    question: "43. How can you quickly insert the current date into a cell?",
    options: ["Press Ctrl + ;", "Press Ctrl + Shift + D", "Use the NOW() function", "Use the DATE() function"],
    answer: "Press Ctrl + ;"
  },
  {
    question: "44. What does the LEFT function do?",
    options: ["Returns the leftmost characters from a text string", "Returns the rightmost characters from a text string", "Finds the length of a string", "Concatenates two strings"],
    answer: "Returns the leftmost characters from a text string"
  },
  {
    question: "45. What type of chart is used to compare individual items in Excel?",
    options: ["Bar Chart", "Pie Chart", "Line Chart", "Scatter Plot"],
    answer: "Bar Chart"
  },
  {
    question: "46. How do you calculate the total sum of a range of cells?",
    options: ["Use the SUM function", "Use the COUNT function", "Use the AVERAGE function", "Use the MAX function"],
    answer: "Use the SUM function"
  },
  {
    question: "47. What does the RAND function do?",
    options: ["Generates a random number between 0 and 1", "Generates a random number between two specified values", "Rounds numbers to a given number of decimal places", "None of the above"],
    answer: "Generates a random number between 0 and 1"
  },
  {
    question: "48. What does the TERM function do?",
    options: ["Returns a specific text value", "Finds the first character of a text string", "Finds the number of characters in a text string", "None of the above"],
    answer: "None of the above"
  },
  {
    question: "49. How do you change the cell format to percentage in Excel?",
    options: ["Click on the 'Percent Style' button in the 'Number' group", "Press Ctrl + Shift + P", "Right-click and select 'Format Cells' → 'Percentage'", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "50. How do you insert a comment in Excel?",
    options: ["Right-click on a cell and select 'Insert Comment'", "Use the 'Review' tab", "Press Ctrl + Shift + C", "All of the above"],
    answer: "All of the above"
  }
];

const Excel = () => {
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
          <h2 className="fs-2 font-bold text-center">Excel Quiz</h2>
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

export default Excel;





