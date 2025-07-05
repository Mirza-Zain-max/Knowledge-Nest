import React, { useState, useEffect, useCallback } from "react";
const questions = [
  {
    number: 1,
    question: "1. What is the shortcut for 'Undo' in Photoshop?",
    options: ["Ctrl+Z", "Ctrl+Y", "Ctrl+S", "Ctrl+U"],
    answer: "Ctrl+Z"
  },
  {
    number: 2,
    question: "2. Which tool is used to select a rectangular area in Photoshop?",
    options: ["Rectangular Marquee Tool", "Lasso Tool", "Magic Wand Tool", "Pen Tool"],
    answer: "Rectangular Marquee Tool"
  },
  {
    number: 3,
    question: "3. What is the shortcut for the 'Brush Tool' in Photoshop?",
    options: ["B", "P", "S", "E"],
    answer: "B"
  },
  {
    number: 4,
    question: "4. Which file format supports transparency in Photoshop?",
    options: [".jpg", ".png", ".gif", ".bmp"],
    answer: ".png"
  },
  {
    number: 5,
    question: "5. What does the 'Clone Stamp Tool' do in Photoshop?",
    options: ["Copies a selected part of the image", "Blurs the image", "Edits the image's color", "Changes the image's size"],
    answer: "Copies a selected part of the image"
  },
  {
    number: 6,
    question: "6. Which of the following is used to adjust the brightness and contrast in Photoshop?",
    options: ["Brightness/Contrast", "Hue/Saturation", "Levels", "Curves"],
    answer: "Brightness/Contrast"
  },
  {
    number: 7,
    question: "7. What is the shortcut for the 'Zoom Tool' in Photoshop?",
    options: ["Ctrl+Space", "Ctrl+Z", "Ctrl+Alt+Z", "Ctrl+Alt+Space"],
    answer: "Ctrl+Space"
  },
  {
    number: 8,
    question: "8. Which of the following is used to remove the red-eye effect from an image in Photoshop?",
    options: ["Red Eye Tool", "Spot Healing Brush Tool", "Clone Stamp Tool", "Patch Tool"],
    answer: "Red Eye Tool"
  },
  {
    number: 9,
    question: "9. Which menu option would you use to merge multiple layers in Photoshop?",
    options: ["Layer > Merge Layers", "Edit > Merge Layers", "Layer > Flatten Image", "Layer > Merge Visible"],
    answer: "Layer > Merge Layers"
  },
  {
    number: 10,
    question: "10. What does the 'Content-Aware Fill' feature in Photoshop do?",
    options: ["It fills a selection with matching pixels from the surrounding area", "It sharpens the image", "It adjusts the image's color balance", "It resizes the image"],
    answer: "It fills a selection with matching pixels from the surrounding area"
  },
  {
    number: 11,
    question: "11. Which of the following is NOT a Photoshop tool?",
    options: ["Paint Bucket Tool", "Healing Brush Tool", "Blur Tool", "Clone Fill Tool"],
    answer: "Clone Fill Tool"
  },
  {
    number: 12,
    question: "12. Which option is used to save an image with layers intact in Photoshop?",
    options: [".jpg", ".png", ".psd", ".tiff"],
    answer: ".psd"
  },
  {
    number: 13,
    question: "13. What does the 'Eraser Tool' do in Photoshop?",
    options: ["Deletes pixels from an image", "Reduces image size", "Sharpens the image", "Applies a filter"],
    answer: "Deletes pixels from an image"
  },
  {
    number: 14,
    question: "14. What is the shortcut for the 'Move Tool' in Photoshop?",
    options: ["V", "M", "T", "L"],
    answer: "V"
  },
  {
    number: 15,
    question: "15. How can you reset a tool to its default settings in Photoshop?",
    options: ["Right-click on the tool icon and select 'Reset Tool'", "Double-click the tool", "Click on 'Edit' and choose 'Reset Tool'", "Click the tool icon and hold the Shift key"],
    answer: "Right-click on the tool icon and select 'Reset Tool'"
  },
  {
    number: 16,
    question: "16. What is the purpose of the 'Healing Brush Tool' in Photoshop?",
    options: ["To blend the edges of a selected area", "To remove imperfections from the image", "To brighten an image", "To add shadows"],
    answer: "To remove imperfections from the image"
  },
  {
    number: 17,
    question: "17. What is the default file format used when saving a new file in Photoshop?",
    options: [".png", ".jpg", ".psd", ".tiff"],
    answer: ".psd"
  },
  {
    number: 18,
    question: "18. Which of the following can be used to adjust color and tone in Photoshop?",
    options: ["Levels", "Curves", "Hue/Saturation", "All of the above"],
    answer: "All of the above"
  },
  {
    number: 19,
    question: "19. Which Photoshop tool is used to create straight line selections?",
    options: ["Polygonal Lasso Tool", "Rectangular Marquee Tool", "Quick Selection Tool", "Magic Wand Tool"],
    answer: "Polygonal Lasso Tool"
  },
  {
    number: 20,
    question: "20. What is the shortcut for the 'Crop Tool' in Photoshop?",
    options: ["C", "V", "E", "T"],
    answer: "C"
  },
  {
    number: 21,
    question: "21. Which of the following is a non-destructive editing method in Photoshop?",
    options: ["Layer Masks", "Layer Flattening", "Direct Pixel Editing", "Merging Layers"],
    answer: "Layer Masks"
  },
  {
    number: 22,
    question: "22. What does the 'Magic Wand Tool' do in Photoshop?",
    options: ["Selects areas of similar color", "Creates a color gradient", "Removes unwanted objects", "Applies texture to an image"],
    answer: "Selects areas of similar color"
  },
  {
    number: 23,
    question: "23. How do you create a new layer in Photoshop?",
    options: ["Ctrl+Shift+N", "Ctrl+L", "Ctrl+N", "Ctrl+Alt+N"],
    answer: "Ctrl+Shift+N"
  },
  {
    number: 24,
    question: "24. What does the 'Blur Tool' do in Photoshop?",
    options: ["Sharpens an image", "Applies a gradient", "Blurs parts of an image", "Brightens the image"],
    answer: "Blurs parts of an image"
  },
  {
    number: 25,
    question: "25. Which tool is used to draw freehand lines in Photoshop?",
    options: ["Pen Tool", "Brush Tool", "Pencil Tool", "Path Tool"],
    answer: "Brush Tool"
  },
  {
    number: 26,
    question: "26. What is the shortcut to 'Select All' in Photoshop?",
    options: ["Ctrl+A", "Ctrl+S", "Ctrl+C", "Ctrl+P"],
    answer: "Ctrl+A"
  },
  {
    number: 27,
    question: "27. What Photoshop feature allows you to automatically adjust the size of an image while maintaining its proportions?",
    options: ["Transform", "Content-Aware Fill", "Free Transform", "Resize"],
    answer: "Free Transform"
  },
  {
    number: 28,
    question: "28. Which file format is most commonly used for web images in Photoshop?",
    options: [".jpg", ".png", ".gif", ".tiff"],
    answer: ".jpg"
  },
  {
    number: 29,
    question: "29. What does the 'Pen Tool' do in Photoshop?",
    options: ["Creates paths", "Draws shapes", "Colors an image", "Adds shadows"],
    answer: "Creates paths"
  },
  {
    number: 30,
    question: "30. Which of the following is used to apply a filter to an image in Photoshop?",
    options: ["Filter Menu", "Image Menu", "Layer Menu", "Edit Menu"],
    answer: "Filter Menu"
  },
  {
    number: 31,
    question: "31. What is the shortcut to open the 'Layer Styles' window?",
    options: ["Ctrl+Shift+L", "Ctrl+L", "F7", "Ctrl+E"],
    answer: "Ctrl+Shift+L"
  },
  {
    number: 32,
    question: "32. What is the function of the 'Gradient Tool' in Photoshop?",
    options: ["Applies a gradient effect", "Blurs parts of the image", "Removes objects", "Draws lines"],
    answer: "Applies a gradient effect"
  },
  {
    number: 33,
    question: "33. Which Photoshop feature helps you align elements easily on a canvas?",
    options: ["Guides", "Snapping", "Grid", "All of the above"],
    answer: "All of the above"
  },
  {
    number: 34,
    question: "34. What does the 'Text Tool' do in Photoshop?",
    options: ["Allows you to add text", "Draws shapes", "Creates paths", "Changes colors"],
    answer: "Allows you to add text"
  },
  {
    number: 35,
    question: "35. What is the function of the 'Patch Tool' in Photoshop?",
    options: ["Heals a selected area using pixels from another area", "Blurs parts of the image", "Resizes an image", "Removes unwanted objects"],
    answer: "Heals a selected area using pixels from another area"
  },
  {
    number: 36,
    question: "36. What does the 'Liquify' filter do in Photoshop?",
    options: ["Alters the shape of an image", "Applies a blur effect", "Adjusts the color of an image", "Creates texture effects"],
    answer: "Alters the shape of an image"
  },
  {
    number: 37,
    question: "37. Which Photoshop tool allows you to paint with a pattern?",
    options: ["Pattern Stamp Tool", "Paint Bucket Tool", "Brush Tool", "Clone Stamp Tool"],
    answer: "Pattern Stamp Tool"
  },
  {
    number: 38,
    question: "38. What does the 'Quick Selection Tool' do in Photoshop?",
    options: ["Selects areas automatically based on color", "Deselects parts of an image", "Applies a filter", "Creates a new layer"],
    answer: "Selects areas automatically based on color"
  },
  {
    number: 39,
    question: "39. Which Photoshop feature allows you to create a web gallery?",
    options: ["Adobe Bridge", "File > Export", "Adobe Camera Raw", "Layer > New Gallery"],
    answer: "Adobe Bridge"
  },
  {
    number: 40,
    question: "40. How do you adjust the opacity of a layer in Photoshop?",
    options: ["Through the Layers panel", "By using the Eraser Tool", "Through the Filter menu", "By using the Text Tool"],
    answer: "Through the Layers panel"
  },
  {
    number: 41,
    question: "41. What is the shortcut to duplicate a layer in Photoshop?",
    options: ["Ctrl+J", "Ctrl+D", "Ctrl+C", "Ctrl+L"],
    answer: "Ctrl+J"
  },
  {
    number: 42,
    question: "42. Which tool is used to change the size of a brush in Photoshop?",
    options: ["Brush Settings", "Eraser Tool", "Brush Tool Options", "Resize Tool"],
    answer: "Brush Settings"
  },
  {
    number: 43,
    question: "43. Which of the following is used to create a vignette effect in Photoshop?",
    options: ["Lens Correction", "Radial Filter", "Gaussian Blur", "Gradient Map"],
    answer: "Lens Correction"
  },
  {
    number: 44,
    question: "44. How can you add a border around an image in Photoshop?",
    options: ["Use the 'Stroke' option", "Use the 'Fill' option", "Use the 'Outline' option", "Use the 'Box' option"],
    answer: "Use the 'Stroke' option"
  },
  {
    number: 45,
    question: "45. Which of the following is used to resize an image in Photoshop?",
    options: ["Image > Image Size", "Image > Canvas Size", "Filter > Resize", "Edit > Transform"],
    answer: "Image > Image Size"
  },
  {
    number: 46,
    question: "46. Which tool is used to create a vector shape in Photoshop?",
    options: ["Pen Tool", "Shape Tool", "Rectangle Tool", "Lasso Tool"],
    answer: "Pen Tool"
  },
  {
    number: 47,
    question: "47. What does the 'Sharpen Tool' do in Photoshop?",
    options: ["Sharpens the selected areas", "Blurs the selected areas", "Colors the selected areas", "Removes pixelation"],
    answer: "Sharpens the selected areas"
  },
  {
    number: 48,
    question: "48. How do you change the canvas size in Photoshop?",
    options: ["Image > Canvas Size", "File > Document Settings", "Image > Image Size", "View > Resize Canvas"],
    answer: "Image > Canvas Size"
  },
  {
    number: 49,
    question: "49. Which tool is used to select a part of an image in Photoshop?",
    options: ["Lasso Tool", "Text Tool", "Brush Tool", "Pen Tool"],
    answer: "Lasso Tool"
  },
  {
    number: 50,
    question: "50. Which of the following is used to apply a distortion effect in Photoshop?",
    options: ["Distort Filter", "Liquify Filter", "Blurring Filter", "Transform Tool"],
    answer: "Distort Filter"
  }
];

const Photoshop = () => {
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
        style={{ height: "100vh" }}
      >
        <div className="w-full max-w-xl mx-auto shadow-2xl py-4 px-3" style={{ position: "relative" }}  >
          <h2 className="fs-2 font-bold text-center"> Photoshop Quiz</h2>
          <p className="fs-5 font-bold text-center">
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          <div
            className="timer-card mx-2 mb-5"
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

export default Photoshop;









