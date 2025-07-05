import React, { useState, useEffect, useCallback } from "react";
const questions = [
    // Microsoft Word
    {
        number: 1,
        question: "Which tab in Microsoft Word contains the 'Font' group?",
        options: ["Insert", "Home", "Layout", "Review"],
        answer: "Home"
    },
    {
        number: 2,
        question: "What is the default page margin in Microsoft Word?",
        options: ["1 inch", "0.5 inch", "1.5 inches", "2 inches"],
        answer: "1 inch"
    },
    {
        number: 3,
        question: "What is the shortcut key to copy text in Microsoft Word?",
        options: ["Ctrl + V", "Ctrl + X", "Ctrl + C", "Ctrl + A"],
        answer: "Ctrl + C"
    },
    {
        number: 4,
        question: "Which feature allows you to review changes made to a document in Word?",
        options: ["Mail Merge", "Track Changes", "References", "Insert Tab"],
        answer: "Track Changes"
    },
    {
        number: 5,
        question: "In Word, what does the 'Ctrl + B' keyboard shortcut do?",
        options: ["Bold the selected text", "Open the bold font style options", "Open the Bulleted List", "Add a border to the text"],
        answer: "Bold the selected text"
    },
    {
        number: 6,
        question: "What is the default font style in Microsoft Word 2016?",
        options: ["Arial", "Calibri", "Times New Roman", "Verdana"],
        answer: "Calibri"
    },
    {
        number: 7,
        question: "Which of these options would you use to format text into two columns in Word?",
        options: ["Page Layout → Columns", "Home → Paragraph", "View → Split", "Insert → Tables"],
        answer: "Page Layout → Columns"
    },
    {
        number: 8,
        question: "Which is the shortcut for 'Save As' in Microsoft Word?",
        options: ["Ctrl + S", "Ctrl + Shift + S", "Ctrl + A", "Ctrl + P"],
        answer: "Ctrl + Shift + S"
    },
    {
        number: 9,
        question: "What feature in Word helps you correct spelling and grammar errors automatically?",
        options: ["AutoFormat", "Word Wrap", "AutoCorrect", "AutoText"],
        answer: "AutoCorrect"
    },
    {
        number: 10,
        question: "What is the keyboard shortcut to insert a page break in Word?",
        options: ["Ctrl + Enter", "Alt + Break", "Shift + Enter", "Alt + Page Up"],
        answer: "Ctrl + Enter"
    },

    // Microsoft Excel
    {
        number: 11,
        question: "What does the SUM function do in Excel?",
        options: ["Adds all the numbers in a range", "Subtracts numbers in a range", "Finds the average of numbers", "Finds the highest value in a range"],
        answer: "Adds all the numbers in a range"
    },
    {
        number: 12,
        question: "Which function returns the current date and time in Excel?",
        options: ["NOW()", "TODAY()", "TIME()", "DATE()"],
        answer: "NOW()"
    },
    {
        number: 13,
        question: "What is the keyboard shortcut to insert a new row in Excel?",
        options: ["Ctrl + Shift + N", "Ctrl + N", "Shift + F10", "Ctrl + Shift + '+'"],
        answer: "Ctrl + Shift + '+'"
    },
    {
        number: 14,
        question: "What is the maximum number of rows in Excel 2016?",
        options: ["65,536", "1,048,576", "32,768", "500,000"],
        answer: "1,048,576"
    },
    {
        number: 15,
        question: "How do you freeze the first row of a worksheet in Excel?",
        options: ["View → Freeze Panes → Freeze First", "Insert → Freeze Panes", "Page Layout → Freeze Panes", "Review → Freeze First Row"],
        answer: "View → Freeze Panes → Freeze First"
    },

    // Microsoft PowerPoint
    {
        number: 16,
        question: "Which key is used to start a slideshow in PowerPoint?",
        options: ["F5", "F12", "Shift + F5", "Ctrl + F5"],
        answer: "F5"
    },
    {
        number: 17,
        question: "What is the default slide layout in PowerPoint?",
        options: ["Title Slide", "Title and Content", "Blank", "Two Content"],
        answer: "Title and Content"
    },
    {
        number: 18,
        question: "Which of the following is the default file extension for a PowerPoint presentation?",
        options: [".pptx", ".ppt", ".pps", ".ppx"],
        answer: ".pptx"
    },
    {
        number: 19,
        question: "What is the shortcut to insert a new slide in PowerPoint?",
        options: ["Ctrl + M", "Ctrl + N", "Ctrl + S", "Ctrl + L"],
        answer: "Ctrl + M"
    },
    {
        number: 20,
        question: "How do you add a transition to a slide in PowerPoint?",
        options: ["Transitions Tab", "Insert Tab", "Animations Tab", "Review Tab"],
        answer: "Transitions Tab"
    },

    // Microsoft Outlook
    {
        number: 21,
        question: "Which of the following is used to create a new email message in Outlook?",
        options: ["Ctrl + N", "Ctrl + Shift + M", "Ctrl + E", "Ctrl + R"],
        answer: "Ctrl + Shift + M"
    },
    {
        number: 22,
        question: "Which feature in Outlook helps you organize emails into folders?",
        options: ["Rules", "Categories", "Flagging", "Archiving"],
        answer: "Folders"
    },
    {
        number: 23,
        question: "How do you schedule a meeting in Outlook?",
        options: ["File → New Meeting", "Home → New Items → Meeting", "Calendar → New Appointment", "Insert → Meeting Request"],
        answer: "Home → New Items → Meeting"
    },
    {
        number: 24,
        question: "What is the shortcut key to reply to an email in Outlook?",
        options: ["Ctrl + R", "Ctrl + Shift + R", "Ctrl + Alt + R", "Ctrl + F"],
        answer: "Ctrl + R"
    },
    {
        number: 25,
        question: "In Outlook, which tab is used to access your calendar?",
        options: ["Mail", "Calendar", "Contacts", "Tasks"],
        answer: "Calendar"
    },
    // Continuing from previous MCQs
    {
        number: 26,
        question: "Which of the following is used to insert a comment in Microsoft Word?",
        options: ["Insert → Comment", "Review → New Comment", "Home → Comment", "View → Comments"],
        answer: "Review → New Comment"
    },
    {
        number: 27,
        question: "How can you find and replace text in Microsoft Word?",
        options: ["Ctrl + F", "Ctrl + R", "Ctrl + H", "Ctrl + G"],
        answer: "Ctrl + H"
    },
    {
        number: 28,
        question: "Which feature allows you to change the layout of text in a Word document?",
        options: ["Page Layout", "Insert", "Design", "Format"],
        answer: "Page Layout"
    },
    {
        number: 29,
        question: "Which of these is used to make text larger in Word?",
        options: ["Ctrl + >", "Ctrl + Shift + >", "Ctrl + Shift + Up", "Ctrl + B"],
        answer: "Ctrl + Shift + >"
    },
    {
        number: 30,
        question: "What is the purpose of the 'Track Changes' feature in Word?",
        options: ["Track spelling mistakes", "Track formatting changes", "Track edits and revisions", "Track grammar changes"],
        answer: "Track edits and revisions"
    },
    {
        number: 31,
        question: "How can you add a page number to a Word document?",
        options: ["Insert → Page Number", "Design → Page Number", "Home → Page Number", "Layout → Page Number"],
        answer: "Insert → Page Number"
    },
    {
        number: 32,
        question: "Which is the default file format for Excel worksheets?",
        options: [".xls", ".xlsx", ".xlsm", ".csv"],
        answer: ".xlsx"
    },
    {
        number: 33,
        question: "In Excel, which function calculates the average of a range of cells?",
        options: ["SUM", "AVERAGE", "COUNT", "MAX"],
        answer: "AVERAGE"
    },
    {
        number: 34,
        question: "What function is used to find the highest value in a range of numbers in Excel?",
        options: ["MIN", "MAX", "AVERAGE", "COUNT"],
        answer: "MAX"
    },
    {
        number: 35,
        question: "What is the keyboard shortcut to open the Format Cells dialog box in Excel?",
        options: ["Ctrl + F", "Ctrl + 1", "Ctrl + Shift + F", "Ctrl + P"],
        answer: "Ctrl + 1"
    },
    {
        number: 36,
        question: "What is the main purpose of Pivot Tables in Excel?",
        options: ["Data Entry", "Data Analysis", "Data Storage", "Data Sorting"],
        answer: "Data Analysis"
    },
    {
        number: 37,
        question: "Which of the following functions in Excel is used to search for a value in a row or column?",
        options: ["VLOOKUP", "HLOOKUP", "MATCH", "INDEX"],
        answer: "VLOOKUP"
    },
    {
        number: 38,
        question: "Which of the following is a shortcut to add a comment in Excel?",
        options: ["Shift + F2", "Alt + F2", "Ctrl + F2", "F2"],
        answer: "Shift + F2"
    },
    {
        number: 39,
        question: "In Excel, which key is used to exit a cell editing mode?",
        options: ["Enter", "Esc", "Tab", "Spacebar"],
        answer: "Esc"
    },
    {
        number: 40,
        question: "Which tab is used to insert pictures in Excel?",
        options: ["Insert", "Page Layout", "Home", "View"],
        answer: "Insert"
    },
    {
        number: 41,
        question: "Which Excel function is used to combine text from different cells?",
        options: ["CONCATENATE", "MERGE", "JOIN", "COMBINE"],
        answer: "CONCATENATE"
    },
    {
        number: 42,
        question: "In PowerPoint, which option is used to apply a design template?",
        options: ["Design Tab", "Animations Tab", "Transitions Tab", "View Tab"],
        answer: "Design Tab"
    },
    {
        number: 43,
        question: "What is the default file extension for a PowerPoint presentation in Office 365?",
        options: [".pptx", ".pps", ".ppt", ".ppsx"],
        answer: ".pptx"
    },
    {
        number: 44,
        question: "Which of the following is used to insert a hyperlink in PowerPoint?",
        options: ["Insert → Link", "Insert → Hyperlink", "Home → Link", "Insert → Text Box"],
        answer: "Insert → Hyperlink"
    },
    {
        number: 45,
        question: "What is the shortcut key for 'Undo' in PowerPoint?",
        options: ["Ctrl + Z", "Ctrl + Y", "Ctrl + X", "Ctrl + S"],
        answer: "Ctrl + Z"
    },
    {
        number: 46,
        question: "In Outlook, which feature is used to organize emails automatically based on certain criteria?",
        options: ["Rules", "Flags", "Categories", "Folders"],
        answer: "Rules"
    },
    {
        number: 47,
        question: "Which key is used to move to the next email message in Outlook?",
        options: ["Tab", "Shift + Tab", "Arrow Down", "Ctrl + N"],
        answer: "Arrow Down"
    },
    {
        number: 48,
        question: "In Excel, what is the purpose of the CONCATENATE function?",
        options: ["Combines multiple text strings into one", "Splits text into multiple cells", "Finds the maximum value", "Calculates the average of values"],
        answer: "Combines multiple text strings into one"
    },
    {
        number: 49,
        question: "Which tab would you use to add a table in Microsoft Word?",
        options: ["Insert", "Home", "Design", "Layout"],
        answer: "Insert"
    },
    {
        number: 50,
        question: "How can you quickly search for a specific word or phrase in a Word document?",
        options: ["Ctrl + F", "Ctrl + H", "Ctrl + S", "Ctrl + P"],
        answer: "Ctrl + F"
    },
    // Continuing from previous MCQs
    {
        number: 51,
        question: "In Excel, which of the following is used to display data in a graphical format?",
        options: ["Charts", "Tables", "Text", "Shapes"],
        answer: "Charts"
    },
    {
        number: 52,
        question: "Which of the following is the default alignment of text in a cell in Excel?",
        options: ["Left", "Center", "Right", "Justify"],
        answer: "Left"
    },
    {
        number: 53,
        question: "In PowerPoint, which tab is used to add animations to slides?",
        options: ["Animations", "Design", "Insert", "Transitions"],
        answer: "Animations"
    },
    {
        number: 54,
        question: "Which of the following is used to create a new document in Microsoft Word?",
        options: ["Ctrl + N", "Ctrl + O", "Ctrl + P", "Ctrl + S"],
        answer: "Ctrl + N"
    },
    {
        number: 55,
        question: "Which of the following is the default page size in Word?",
        options: ["A4", "Letter", "Legal", "Executive"],
        answer: "A4"
    },
    {
        number: 56,
        question: "Which of the following is used to format the text color in Word?",
        options: ["Font Color", "Text Color", "Font Style", "Highlight Color"],
        answer: "Font Color"
    },
    {
        number: 57,
        question: "In Excel, what function would you use to calculate the total sum of a range of cells?",
        options: ["SUM", "ADD", "TOTAL", "CALC"],
        answer: "SUM"
    },
    {
        number: 58,
        question: "In Microsoft Excel, which of the following shortcuts is used to copy data?",
        options: ["Ctrl + C", "Ctrl + X", "Ctrl + V", "Ctrl + A"],
        answer: "Ctrl + C"
    },
    {
        number: 59,
        question: "Which of the following is used to apply a border to a cell in Excel?",
        options: ["Home → Font", "Insert → Border", "Page Layout → Borders", "Home → Borders"],
        answer: "Home → Borders"
    },
    {
        number: 60,
        question: "Which of the following options can be used to protect a worksheet in Excel?",
        options: ["Password", "Permissions", "Cell Protection", "File Protection"],
        answer: "Password"
    },
    {
        number: 61,
        question: "In Microsoft PowerPoint, which of the following is used to add a new slide?",
        options: ["Ctrl + M", "Ctrl + N", "Ctrl + Shift + N", "Ctrl + P"],
        answer: "Ctrl + M"
    },
    {
        number: 62,
        question: "Which of the following is a shortcut for bold text in Microsoft Word?",
        options: ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + T"],
        answer: "Ctrl + B"
    },
    {
        number: 63,
        question: "Which tab in Word is used to insert a picture into a document?",
        options: ["Insert", "Design", "Page Layout", "View"],
        answer: "Insert"
    },
    {
        number: 64,
        question: "In Microsoft Excel, which of the following functions is used to calculate the number of items in a list?",
        options: ["COUNT", "SUM", "IF", "AVERAGE"],
        answer: "COUNT"
    },
    {
        number: 65,
        question: "Which key is used to save a document in Microsoft Word?",
        options: ["Ctrl + S", "Ctrl + A", "Ctrl + P", "Ctrl + R"],
        answer: "Ctrl + S"
    },
    {
        number: 66,
        question: "In Microsoft Word, how can you remove formatting from a selection?",
        options: ["Ctrl + Spacebar", "Ctrl + Z", "Ctrl + Shift + Z", "Ctrl + Shift + F"],
        answer: "Ctrl + Spacebar"
    },
    {
        number: 67,
        question: "Which of the following is the default font in Excel 2016?",
        options: ["Arial", "Times New Roman", "Calibri", "Verdana"],
        answer: "Calibri"
    },
    {
        number: 68,
        question: "Which of the following Excel functions allows you to search for a value in a column and return a corresponding value from a different column?",
        options: ["VLOOKUP", "HLOOKUP", "MATCH", "INDEX"],
        answer: "VLOOKUP"
    },
    {
        number: 69,
        question: "In PowerPoint, which of the following allows you to change the layout of a slide?",
        options: ["Design", "Slide Layout", "Insert", "Transitions"],
        answer: "Slide Layout"
    },
    {
        number: 70,
        question: "Which of the following is used to hide a worksheet in Excel?",
        options: ["Right-click → Hide", "File → Hide", "View → Hide", "Home → Hide"],
        answer: "Right-click → Hide"
    },
    {
        number: 71,
        question: "Which function in Excel is used to calculate the average of a range of numbers?",
        options: ["AVERAGE", "SUM", "COUNT", "MAX"],
        answer: "AVERAGE"
    },
    {
        number: 72,
        question: "Which of the following is a valid way to start a new paragraph in Word?",
        options: ["Press Enter", "Press Space", "Press Shift + Enter", "Press Tab"],
        answer: "Press Enter"
    },
    {
        number: 73,
        question: "Which of the following in Word is used to add a hyperlink?",
        options: ["Insert → Hyperlink", "Home → Link", "Insert → Link", "Design → Hyperlink"],
        answer: "Insert → Hyperlink"
    },
    {
        number: 74,
        question: "Which of the following is a type of chart available in Excel?",
        options: ["Bar Chart", "Column Chart", "Pie Chart", "All of the above"],
        answer: "All of the above"
    },
    {
        number: 75,
        question: "In PowerPoint, which tab is used to add transitions between slides?",
        options: ["Transitions", "Animations", "Insert", "Design"],
        answer: "Transitions"
    },
    // Continuing from previous MCQs
    {
        number: 76,
        question: "Which of the following is the default file format for saving Excel workbooks?",
        options: [".xls", ".xlsx", ".xlsm", ".csv"],
        answer: ".xlsx"
    },
    {
        number: 77,
        question: "Which of the following is the shortcut key to open the 'Find and Replace' dialog in Word?",
        options: ["Ctrl + F", "Ctrl + R", "Ctrl + H", "Ctrl + E"],
        answer: "Ctrl + H"
    },
    {
        number: 78,
        question: "Which of the following is used to combine two or more cells into a single cell in Excel?",
        options: ["Merge Cells", "Combine Cells", "Concatenate", "Join Cells"],
        answer: "Merge Cells"
    },
    {
        number: 79,
        question: "In Excel, which of the following functions is used to round a number to a specified number of digits?",
        options: ["ROUND", "ROUNDDOWN", "ROUNDUP", "ALL OF THE ABOVE"],
        answer: "ALL OF THE ABOVE"
    },
    {
        number: 80,
        question: "Which of the following is the default font size in Word?",
        options: ["10", "11", "12", "14"],
        answer: "11"
    },
    {
        number: 81,
        question: "In PowerPoint, what is the default slide layout?",
        options: ["Title Slide", "Title and Content", "Blank", "Two Content"],
        answer: "Title and Content"
    },
    {
        number: 82,
        question: "Which of the following can be used to make a cell reference absolute in Excel?",
        options: ["$A$1", "A$1", "A1", "1$A$"],
        answer: "$A$1"
    },
    {
        number: 83,
        question: "In Excel, which of the following is used to calculate the compound interest?",
        options: ["PMT", "FV", "RATE", "CUMIPMT"],
        answer: "FV"
    },
    {
        number: 84,
        question: "Which of the following is the default file format for Word documents?",
        options: [".doc", ".docx", ".pdf", ".txt"],
        answer: ".docx"
    },
    {
        number: 85,
        question: "In Microsoft Excel, which of the following allows you to display data as a percentage?",
        options: ["% symbol", "Percentage format", "Currency format", "Accounting format"],
        answer: "Percentage format"
    },
    {
        number: 86,
        question: "Which of the following is a way to change the background color of a slide in PowerPoint?",
        options: ["Design → Background Styles", "Home → Format", "Insert → Color", "View → Background"],
        answer: "Design → Background Styles"
    },
    {
        number: 87,
        question: "In Microsoft Word, which of the following is used to create columns in a document?",
        options: ["Page Layout → Columns", "Insert → Columns", "Design → Layout", "Home → Columns"],
        answer: "Page Layout → Columns"
    },
    {
        number: 88,
        question: "Which of the following is the shortcut key for 'Bold' in Word?",
        options: ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + E"],
        answer: "Ctrl + B"
    },
    {
        number: 89,
        question: "In Excel, what would you use to highlight cells that meet a certain condition?",
        options: ["Conditional Formatting", "Data Validation", "Cell Format", "Cell Protection"],
        answer: "Conditional Formatting"
    },
    {
        number: 90,
        question: "Which of the following functions is used to calculate the minimum value in a range in Excel?",
        options: ["MIN", "MAX", "AVERAGE", "COUNT"],
        answer: "MIN"
    },
    {
        number: 91,
        question: "In PowerPoint, what feature is used to add sound effects to slides?",
        options: ["Insert → Audio", "Animations → Audio", "Design → Audio", "View → Audio"],
        answer: "Insert → Audio"
    },
    {
        number: 92,
        question: "Which of the following is used to change the paper size in Word?",
        options: ["Page Layout → Size", "Insert → Paper Size", "View → Size", "Design → Paper"],
        answer: "Page Layout → Size"
    },
    {
        number: 93,
        question: "Which of the following is used to add a footnote in Word?",
        options: ["References → Insert Footnote", "Insert → Footnote", "Design → Footnotes", "Layout → Footnotes"],
        answer: "References → Insert Footnote"
    },
    {
        number: 94,
        question: "Which of the following is a way to change the font size in PowerPoint?",
        options: ["Home → Font Size", "Design → Font Size", "Insert → Font Size", "View → Font Size"],
        answer: "Home → Font Size"
    },
    {
        number: 95,
        question: "Which of the following is the shortcut key for 'Undo' in Word?",
        options: ["Ctrl + Z", "Ctrl + Y", "Ctrl + X", "Ctrl + A"],
        answer: "Ctrl + Z"
    },
    {
        number: 96,
        question: "In Excel, which of the following is used to sort data in ascending order?",
        options: ["Sort A to Z", "Sort Z to A", "Sort", "Data → Sort"],
        answer: "Sort A to Z"
    },
    {
        number: 97,
        question: "Which of the following is used to insert a chart into a PowerPoint slide?",
        options: ["Insert → Chart", "Design → Chart", "Home → Chart", "Transitions → Chart"],
        answer: "Insert → Chart"
    },
    {
        number: 98,
        question: "Which of the following is the default chart type in Excel?",
        options: ["Column Chart", "Bar Chart", "Line Chart", "Pie Chart"],
        answer: "Column Chart"
    },
    {
        number: 99,
        question: "In Excel, what is the maximum number of rows available in a worksheet?",
        options: ["1,048,576", "1,000,000", "500,000", "100,000"],
        answer: "1,048,576"
    },
    {
        number: 100,
        question: "Which of the following is used to change the alignment of text in Word?",
        options: ["Home → Paragraph", "Insert → Text Align", "Layout → Paragraph", "Design → Text Alignment"],
        answer: "Home → Paragraph"
    }



];

const Office = () => {
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
                    <h2 className="fs-2 font-bold text-center">Microsotf Office Quiz</h2>
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

export default Office;




