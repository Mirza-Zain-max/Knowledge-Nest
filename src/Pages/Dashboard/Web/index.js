import React, { useState, useEffect, useCallback } from "react";
const questions = [
    // HTML Questions
    {
        question: "1. What does HTML stand for?",
        options: ["a) Hyper Text Markup Language", "b) Hyperlinks and Text Markup Language", "c) Home Tool Markup Language", "d) Hyper Tool Markup Language"],
        answer: "a) Hyper Text Markup Language"
    },
    {
        question: "2. Which HTML element is used for the largest heading?",
        options: ["a) <heading>", "b) <h1>", "c) <h6>", "d) <head>"],
        answer: "b) <h1>"
    },
    {
        question: "3. What is the correct HTML element for inserting a line break?",
        options: ["a) <break>", "b) <br>", "c) <lb>", "d) <hr>"],
        answer: "b) <br>"
    },
    {
        question: "4. Which attribute specifies a unique identifier for an HTML element?",
        options: ["a) id", "b) class", "c) style", "d) name"],
        answer: "a) id"
    },
    {
        question: "5. How can you create an ordered list in HTML?",
        options: ["a) <ul>", "b) <ol>", "c) <li>", "d) <dl>"],
        answer: "b) <ol>"
    },
    {
        question: "6. Which attribute is used to provide an alternative text for an image?",
        options: ["a) src", "b) alt", "c) title", "d) caption"],
        answer: "b) alt"
    },
    {
        question: "7. What is the correct way to create a hyperlink in HTML?",
        options: ["a) <a url='link'>", "b) <a href='link'>", "c) <link href='link'>", "d) <url link='link'>"],
        answer: "b) <a href='link'>"
    },
    {
        question: "8. Which HTML element is used to define a division or section?",
        options: ["a) <div>", "b) <section>", "c) <article>", "d) All of the above"],
        answer: "d) All of the above"
    },
    {
        question: "9. How can you make a list that lists items with bullets?",
        options: ["a) <ul>", "b) <ol>", "c) <list>", "d) <bullet>"],
        answer: "a) <ul>"
    },
    {
        question: "10. What is the purpose of the <title> tag in HTML?",
        options: ["a) To set the browser tab title", "b) To define a heading", "c) To create a title for an article", "d) None of the above"],
        answer: "a) To set the browser tab title"
    },
    {
        question: "11. Which HTML tag is used to define an internal style sheet?",
        options: ["a) <style>", "b) <css>", "c) <script>", "d) <design>"],
        answer: "a) <style>"
    },
    {
        question: "12. What is the correct way to add a background color in HTML?",
        options: ["a) <body bgColor='red'>", "b) <body style='background-color:red;'>", "c) <background color='red'>", "d) <bg style='color:red;'>"],
        answer: "b) <body style='background-color:red;'>"
    },
    {
        question: "13. Which HTML element is used to play audio files?",
        options: ["a) <audio>", "b) <sound>", "c) <play>", "d) <music>"],
        answer: "a) <audio>"
    },
    {
        question: "14. What is the purpose of the <meta> tag in HTML?",
        options: ["a) To define metadata", "b) To create a link", "c) To embed multimedia", "d) To define a table"],
        answer: "a) To define metadata"
    },
    {
        question: "15. Which tag is used to display an image in HTML?",
        options: ["a) <img>", "b) <image>", "c) <picture>", "d) <src>"],
        answer: "a) <img>"
    },
    {
        question: "16. How do you create a comment in HTML?",
        options: ["a) <!-- comment -->", "b) // comment", "c) /* comment */", "d) # comment"],
        answer: "a) <!-- comment -->"
    },
    {
        question: "17. Which input type is used to select multiple options in a form?",
        options: ["a) radio", "b) checkbox", "c) text", "d) select"],
        answer: "b) checkbox"
    },
    {
        question: "18. Which tag is used to create a table in HTML?",
        options: ["a) <table>", "b) <tr>", "c) <td>", "d) All of the above"],
        answer: "d) All of the above"
    },
    {
        question: "19. What does the <iframe> tag in HTML do?",
        options: ["a) Embeds another document", "b) Creates an inline style", "c) Embeds an image", "d) None of the above"],
        answer: "a) Embeds another document"
    },
    {
        question: "20. Which HTML tag is used to define emphasized text?",
        options: ["a) <em>", "b) <strong>", "c) <i>", "d) <b>"],
        answer: "a) <em>"
    },
    //   css
    {
        question: "21. What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Creative Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },
    {
        question: "22. Which property is used to change the background color in CSS?",
        options: ["color", "background-color", "bgcolor", "background"],
        answer: "background-color"
    },
    {
        question: "23. What is the default position value of an HTML element?",
        options: ["static", "relative", "absolute", "fixed"],
        answer: "static"
    },
    {
        question: "24. Which property is used to change the font size of text in CSS?",
        options: ["font", "text-size", "font-size", "size"],
        answer: "font-size"
    },
    {
        question: "25. What does the 'z-index' property in CSS control?",
        options: [
            "The stacking order of elements",
            "The size of an element",
            "The opacity of an element",
            "The border of an element"
        ],
        answer: "The stacking order of elements"
    },
    {
        question: "26. Which CSS property is used to change the text color of an element?",
        options: ["fgcolor", "text-color", "color", "font-color"],
        answer: "color"
    },
    {
        question: "27. How do you make each word in a text start with a capital letter in CSS?",
        options: [
            "text-transform: capitalize",
            "text-style: capitalize",
            "transform: capitalize",
            "font-variant: small-caps"
        ],
        answer: "text-transform: capitalize"
    },
    {
        question: "28. Which CSS property controls the text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        answer: "font-size"
    },
    {
        question: "29. Which CSS property is used to create a flexible and responsive layout?",
        options: ["grid", "position", "flex", "align"],
        answer: "flex"
    },
    {
        question: "30. What is the correct CSS syntax to center a block element horizontally?",
        options: [
            "margin-left: auto; margin-right: auto;",
            "text-align: center;",
            "padding: center;",
            "align: center;"
        ],
        answer: "margin-left: auto; margin-right: auto;"
    },
    {
        question: "31. Which CSS property is used to specify the space inside an element?",
        options: ["margin", "padding", "border", "spacing"],
        answer: "padding"
    },
    {
        question: "32. How do you apply a shadow to an element in CSS?",
        options: [
            "shadow: 10px 10px 5px #888;",
            "box-shadow: 10px 10px 5px #888;",
            "text-shadow: 10px 10px 5px #888;",
            "border-shadow: 10px 10px 5px #888;"
        ],
        answer: "box-shadow: 10px 10px 5px #888;"
    },
    {
        question: "33. Which CSS property is used to specify the transparency of an element?",
        options: ["opacity", "visibility", "transparency", "filter"],
        answer: "opacity"
    },
    {
        question: "34. Which value of the display property is used to hide an element but still occupy space?",
        options: ["none", "hidden", "inline", "block"],
        answer: "hidden"
    },
    {
        question: "35. What does the 'overflow' property control in CSS?",
        options: [
            "Visibility of text outside the container",
            "Spacing between elements",
            "Alignment of text",
            "Font size"
        ],
        answer: "Visibility of text outside the container"
    },
    {
        question: "36. What is the use of the 'float' property in CSS?",
        options: [
            "To create space around elements",
            "To position elements side-by-side",
            "To align text vertically",
            "To set the transparency of elements"
        ],
        answer: "To position elements side-by-side"
    },
    {
        question: "37. Which CSS property is used to add rounded corners to an element?",
        options: ["border-radius", "corner-radius", "border-round", "round-radius"],
        answer: "border-radius"
    },
    {
        question: "38. How do you select elements with a specific class in CSS?",
        options: [
            "#classname { ... }",
            ".classname { ... }",
            "classname { ... }",
            "*classname { ... }"
        ],
        answer: ".classname { ... }"
    },
    {
        question: "39. Which pseudo-class is used to apply styles when an element is hovered?",
        options: [":hover", ":focus", ":active", ":visited"],
        answer: ":hover"
    },
    {
        question: "40. Which property is used to control the spacing between lines of text?",
        options: ["text-indent", "line-height", "letter-spacing", "word-spacing"],
        answer: "line-height"
    },
    // Bootstrap
    {
        question: "41. What does the 'container' class do in Bootstrap?",
        options: [
            "Defines a fixed-width container",
            "Provides a full-width container",
            "Adds padding to the page",
            "Creates a fluid grid layout"
        ],
        answer: "Defines a fixed-width container"
    },
    {
        question: "42. Which class is used to create a responsive grid system in Bootstrap?",
        options: ["container", "row", "grid", "column"],
        answer: "row"
    },
    {
        question: "43. What is the default grid system in Bootstrap?",
        options: ["12 columns", "16 columns", "8 columns", "10 columns"],
        answer: "12 columns"
    },
    {
        question: "44. Which class is used to create a button with a primary style in Bootstrap?",
        options: ["btn-primary", "btn-default", "btn-success", "btn-dark"],
        answer: "btn-primary"
    },
    {
        question: "45. Which Bootstrap class is used to create a rounded button?",
        options: ["btn-rounded", "btn-sm", "btn-circle", "btn-outline"],
        answer: "btn-circle"
    },
    {
        question: "46. What class is used to make an image responsive in Bootstrap?",
        options: ["img-fluid", "img-responsive", "img-auto", "img-fixed"],
        answer: "img-fluid"
    },
    {
        question: "47. Which class is used to hide an element in Bootstrap?",
        options: ["hidden", "d-none", "hide", "invisible"],
        answer: "d-none"
    },
    {
        question: "48. Which Bootstrap class is used to create a navigation bar?",
        options: ["navbar", "nav", "navigation", "nav-bar"],
        answer: "navbar"
    },
    {
        question: "49. Which of the following is the correct class for adding a background color in Bootstrap?",
        options: ["bg-primary", "background-color-primary", "bg-color", "background-primary"],
        answer: "bg-primary"
    },
    {
        question: "50. How do you create a modal in Bootstrap?",
        options: [
            "Using .modal class",
            "Using .popup class",
            "Using .alert class",
            "Using .dialog class"
        ],
        answer: "Using .modal class"
    },
    {
        question: "51. What class is used to center align text in Bootstrap?",
        options: ["text-center", "align-center", "text-align-center", "center-text"],
        answer: "text-center"
    },
    {
        question: "52. Which class is used to create a card in Bootstrap?",
        options: ["card", "panel", "box", "block"],
        answer: "card"
    },
    {
        question: "53. Which class in Bootstrap is used to create a large-sized button?",
        options: ["btn-lg", "btn-xl", "btn-large", "btn-big"],
        answer: "btn-lg"
    },
    {
        question: "54. Which class is used to create a success alert box in Bootstrap?",
        options: ["alert-success", "alert-info", "alert-warning", "alert-danger"],
        answer: "alert-success"
    },
    {
        question: "55. Which class in Bootstrap is used to create a responsive table?",
        options: ["table-responsive", "table-fixed", "table-fluid", "table-responsive-lg"],
        answer: "table-responsive"
    },
    {
        question: "56. Which class is used to create a column that spans 4 out of 12 grid columns in Bootstrap?",
        options: ["col-4", "col-12", "col-3", "col-6"],
        answer: "col-4"
    },
    {
        question: "57. Which class is used to add a background color for a section in Bootstrap?",
        options: ["bg-primary", "background-primary", "section-bg", "section-primary"],
        answer: "bg-primary"
    },
    {
        question: "58. Which class is used to add a small-sized button in Bootstrap?",
        options: ["btn-sm", "btn-xs", "btn-small", "btn-mini"],
        answer: "btn-sm"
    },
    {
        question: "59. How can you make a Bootstrap navbar fixed at the top of the page?",
        options: [
            "navbar-fixed-top",
            "navbar-fixed",
            "navbar-top",
            "navbar-stick-top"
        ],
        answer: "navbar-fixed-top"
    },
    {
        question: "60. Which Bootstrap class is used to display a collapsed menu in a mobile view?",
        options: ["navbar-collapse", "navbar-menu", "nav-collapse", "menu-collapse"],
        answer: "navbar-collapse"
    },
    {
        question: "61. Which class is used to add a dark background color to a Bootstrap navbar?",
        options: ["navbar-dark", "navbar-black", "navbar-dark-bg", "navbar-dark-mode"],
        answer: "navbar-dark"
    },
    {
        question: "62. What class is used to make the text uppercase in Bootstrap?",
        options: ["text-uppercase", "text-bold", "text-allcaps", "upper-text"],
        answer: "text-uppercase"
    },
    {
        question: "63. Which class is used to create a border on the edges of a Bootstrap card?",
        options: ["card-border", "card", "card-outline", "card-shadow"],
        answer: "card"
    },
    {
        question: "64. Which class in Bootstrap is used to create a responsive grid with 12 equal-width columns?",
        options: ["col-12", "col-md-12", "col-xl-12", "col-sm-12"],
        answer: "col-12"
    },
    {
        question: "65. Which Bootstrap class is used to hide an element on large screens?",
        options: ["d-none d-lg-block", "d-block d-lg-none", "d-lg-hide", "d-lg-none"],
        answer: "d-none d-lg-block"
    },
    //   JavaScripth
    {
        question: "66. What is the result of `typeof null` in JavaScript?",
        options: ["a) object", "b) null", "c) undefined", "d) string"],
        answer: "a) object"
    },
    {
        question: "67. Which method is used to remove whitespace from both ends of a string?",
        options: ["a) trim()", "b) slice()", "c) replace()", "d) split()"],
        answer: "a) trim()"
    },
    {
        question: "68. What will the expression `[] + []` evaluate to in JavaScript?",
        options: ["a) 0", "b) an empty string", "c) NaN", "d) undefined"],
        answer: "b) an empty string"
    },
    {
        question: "69. Which JavaScript method is used to add elements to the beginning of an array?",
        options: ["a) push()", "b) pop()", "c) shift()", "d) unshift()"],
        answer: "d) unshift()"
    },
    {
        question: "70. What is the purpose of `Array.prototype.map()` in JavaScript?",
        options: [
            "a) To modify all elements of an array",
            "b) To filter elements in an array",
            "c) To create a new array with the results of a function",
            "d) To find an element in an array"
        ],
        answer: "c) To create a new array with the results of a function"
    },
    {
        question: "71. What will `console.log(1 + '1')` output?",
        options: ["a) 2", "b) 11", "c) '2'", "d) Error"],
        answer: "b) 11"
    },
    {
        question: "72. How do you create a promise in JavaScript?",
        options: [
            "a) let promise = new Promise()",
            "b) let promise = Promise.create()",
            "c) let promise = new Promise((resolve, reject) => {})",
            "d) let promise = promise.create(() => {})"
        ],
        answer: "c) let promise = new Promise((resolve, reject) => {})"
    },
    {
        question: "73. Which JavaScript method is used to convert a number to a string?",
        options: ["a) toString()", "b) stringify()", "c) parseInt()", "d) split()"],
        answer: "a) toString()"
    },
    {
        question: "74. Which statement correctly defines a template literal?",
        options: [
            "a) String enclosed in single quotes",
            "b) String enclosed in double quotes",
            "c) String enclosed in backticks (` `)",
            "d) String enclosed in square brackets"
        ],
        answer: "c) String enclosed in backticks (` `)"
    },
    {
        question: "75. What will the expression `[1, 2] == '1,2'` evaluate to?",
        options: ["a) true", "b) false", "c) undefined", "d) NaN"],
        answer: "a) true"
    },
    {
        question: "76. Which function is used to serialize an object into a JSON string?",
        options: ["a) JSON.parse()", "b) JSON.stringify()", "c) JSON.serialize()", "d) JSON.objectify()"],
        answer: "b) JSON.stringify()"
    },
    {
        question: "77. What will `console.log('5' - 2)` output?",
        options: ["a) 3", "b) '3'", "c) Error", "d) NaN"],
        answer: "a) 3"
    },
    {
        question: "78. Which keyword is used to handle exceptions in JavaScript?",
        options: ["a) catch", "b) throw", "c) try", "d) All of the above"],
        answer: "d) All of the above"
    },
    {
        question: "79. How do you declare a default parameter in a function?",
        options: [
            "a) function myFunc(param = value) {}",
            "b) function myFunc(param default value) {}",
            "c) function myFunc(default: value) {}",
            "d) function myFunc(value = param) {}"
        ],
        answer: "a) function myFunc(param = value) {}"
    },
    {
        question: "80. What will the expression `true + true` evaluate to?",
        options: ["a) 2", "b) true", "c) 'truetrue'", "d) NaN"],
        answer: "a) 2"
    },
    {
        question: "81. Which method is used to iterate over all elements in an array?",
        options: ["a) map()", "b) forEach()", "c) filter()", "d) reduce()"],
        answer: "b) forEach()"
    },
    {
        question: "82. What is the output of `typeof NaN`?",
        options: ["a) number", "b) NaN", "c) undefined", "d) object"],
        answer: "a) number"
    },
    {
        question: "83. What is the value of `undefined == null`?",
        options: ["a) true", "b) false", "c) undefined", "d) null"],
        answer: "a) true"
    },
    {
        question: "84. Which method is used to check if an array includes a certain element?",
        options: ["a) find()", "b) filter()", "c) includes()", "d) indexOf()"],
        answer: "c) includes()"
    },
    {
        question: "85. What will `console.log(!!false)` output?",
        options: ["a) true", "b) false", "c) undefined", "d) NaN"],
        answer: "b) false"
    },
    {
        question: "86. Which method is used to find the index of the first occurrence of a specified element in an array?",
        options: ["a) indexOf()", "b) findIndex()", "c) includes()", "d) find()"],
        answer: "a) indexOf()"
    },
    {
        question: "87. What is the correct way to check if a variable is an array in JavaScript?",
        options: [
            "a) Array.isArray(variable)",
            "b) typeof variable === 'array'",
            "c) variable instanceof Array",
            "d) Both a and c"
        ],
        answer: "d) Both a and c"
    },
    {
        question: "88. What will the expression `[] == ![]` evaluate to?",
        options: ["a) true", "b) false", "c) undefined", "d) NaN"],
        answer: "a) true"
    },
    {
        question: "89. Which of the following can be used to copy an array in JavaScript?",
        options: [
            "a) array.slice()",
            "b) [...array]",
            "c) Array.from(array)",
            "d) All of the above"
        ],
        answer: "d) All of the above"
    },
    {
        question: "90. What will the output of `console.log(typeof function() {})` be?",
        options: ["a) function", "b) object", "c) undefined", "d) string"],
        answer: "a) function"
    },
    {
        question: "91. What is the purpose of the `async` keyword in JavaScript?",
        options: [
            "a) It creates a synchronous function",
            "b) It creates a function that returns a promise",
            "c) It pauses function execution",
            "d) None of the above"
        ],
        answer: "b) It creates a function that returns a promise"
    },
    {
        question: "92. Which method is used to sort the elements of an array?",
        options: ["a) sort()", "b) order()", "c) arrange()", "d) sequence()"],
        answer: "a) sort()"
    },
    {
        question: "93. Which of the following is not a valid JavaScript loop?",
        options: ["a) for", "b) while", "c) do-while", "d) foreach"],
        answer: "d) foreach"
    },
    {
        question: "94. What does the `new` keyword do in JavaScript?",
        options: [
            "a) It creates a new object",
            "b) It creates a new function",
            "c) It initializes a variable",
            "d) None of the above"
        ],
        answer: "a) It creates a new object"
    },
    {
        question: "95. How can you add properties to an existing object in JavaScript?",
        options: [
            "a) Using dot notation",
            "b) Using bracket notation",
            "c) Using Object.assign()",
            "d) All of the above"
        ],
        answer: "d) All of the above"
    },
    {
        question: "96. What will `console.log(1 == '1' && 1 === '1')` output?",
        options: ["a) true", "b) false", "c) undefined", "d) Error"],
        answer: "b) false"
    },
    {
        question: "97. Which method is used to execute a function after a specified delay?",
        options: ["a) setTimeout()", "b) setInterval()", "c) delay()", "d) wait()"],
        answer: "a) setTimeout()"
    },
    {
        question: "98. What does the `bind()` method do in JavaScript?",
        options: [
            "a) Creates a new function with a specific `this` value",
            "b) Executes a function immediately",
            "c) Loops through an array",
            "d) None of the above"
        ],
        answer: "a) Creates a new function with a specific `this` value"
    },
    {
        question: "99. What is the purpose of the `finally` block in a try-catch-finally structure?",
        options: [
            "a) To handle specific exceptions",
            "b) To execute code regardless of an error",
            "c) To return a value",
            "d) To stop error propagation"
        ],
        answer: "b) To execute code regardless of an error"
    },
    {
        question: "100. What will the output of `console.log([] + {})` be?",
        options: ["a) [object Object]", "b) {}", "c) [object]", "d) Error"],
        answer: "a) [object Object]"
    },
    //   react
    {
        question: "101. What is React?",
        options: ["A database", "A library for building user interfaces", "A backend framework", "A CSS preprocessor"],
        answer: "A library for building user interfaces"
    },
    {
        question: "102. Which company developed React?",
        options: ["Facebook", "Google", "Microsoft", "Netflix"],
        answer: "Facebook"
    },
    {
        question: "103. What is JSX in React?",
        options: ["A JavaScript extension for HTML", "A new version of JavaScript", "A CSS preprocessor", "A form of JavaScript object"],
        answer: "A JavaScript extension for HTML"
    },
    {
        question: "104. What does 'state' represent in React?",
        options: ["Static data in a component", "Dynamic data in a component", "Style properties of a component", "The lifecycle of a component"],
        answer: "Dynamic data in a component"
    },
    {
        question: "105. What is the purpose of the 'render' method in React?",
        options: ["To return JSX", "To manage the component state", "To perform side effects", "To call the constructor method"],
        answer: "To return JSX"
    },
    {
        question: "106. Which of the following is used to handle events in React?",
        options: ["onClick", "addEventListener", "onclick", "addEvent"],
        answer: "onClick"
    },
    {
        question: "107. How do you update the state in a React component?",
        options: ["this.setState()", "this.updateState()", "this.changeState()", "state.update()"],
        answer: "this.setState()"
    },
    {
        question: "108. What is a functional component in React?",
        options: ["A class that extends React.Component", "A function that returns JSX", "A component with no props", "A component with no state"],
        answer: "A function that returns JSX"
    },
    {
        question: "109. What is the default export from a React component file?",
        options: ["The class or function component", "The state of the component", "The JSX", "The HTML content"],
        answer: "The class or function component"
    },
    {
        question: "110. What is the 'useState' hook used for in React?",
        options: ["To manage the component state", "To manage lifecycle methods", "To handle form submissions", "To create new components"],
        answer: "To manage the component state"
    },
    {
        question: "111. What is the 'useEffect' hook used for in React?",
        options: ["To manage the component lifecycle", "To update the DOM directly", "To handle form submissions", "To create event listeners"],
        answer: "To manage the component lifecycle"
    },
    {
        question: "112. What does the 'key' prop do in React?",
        options: ["It helps React identify elements in a list", "It assigns a unique identifier to each component", "It sets the ID for the component", "It binds event handlers to components"],
        answer: "It helps React identify elements in a list"
    },
    {
        question: "113. Which method is used to mount a React component to the DOM?",
        options: ["ReactDOM.render()", "React.mount()", "React.render()", "component.mount()"],
        answer: "ReactDOM.render()"
    },
    {
        question: "114. How do you pass data to a child component in React?",
        options: ["By using props", "By using state", "By using context", "By using variables"],
        answer: "By using props"
    },
    {
        question: "115. What is the purpose of the 'render' method in a class component?",
        options: ["To return JSX", "To handle events", "To manage the component state", "To bind methods to the component"],
        answer: "To return JSX"
    },
    {
        question: "116. Which hook is used to manage side effects in React?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        answer: "useEffect"
    },
    {
        question: "117. What is the purpose of the 'useRef' hook in React?",
        options: ["To store a reference to a DOM element", "To store state variables", "To perform side effects", "To handle events"],
        answer: "To store a reference to a DOM element"
    },
    {
        question: "118. What does 'prop drilling' refer to in React?",
        options: ["Passing props through many layers of components", "Storing state inside components", "Binding methods to components", "Fetching data from APIs"],
        answer: "Passing props through many layers of components"
    },
    {
        question: "119. What is the purpose of 'React.StrictMode'?",
        options: ["To check for potential issues in the app", "To enforce code style guidelines", "To enable debugging features", "To improve performance"],
        answer: "To check for potential issues in the app"
    },
    {
        question: "120. What is a 'controlled component' in React?",
        options: ["A component whose value is controlled by React state", "A component with its own local state", "A component with no state", "A component that doesn't render any UI"],
        answer: "A component whose value is controlled by React state"
    },
    {
        question: "121. What is a 'stateless component' in React?",
        options: ["A component that does not manage state", "A component that does not use props", "A component that does not render anything", "A component that cannot be updated"],
        answer: "A component that does not manage state"
    },
    {
        question: "122. What does 'React.memo' do?",
        options: ["It prevents unnecessary re-renders of functional components", "It stores data in local storage", "It modifies component state", "It creates event listeners"],
        answer: "It prevents unnecessary re-renders of functional components"
    },
    {
        question: "123. What is 'context' used for in React?",
        options: ["To share state between components", "To manage the component lifecycle", "To store references", "To handle form validation"],
        answer: "To share state between components"
    },
    {
        question: "124. What does 'React.Fragment' do?",
        options: ["It allows grouping multiple elements without adding extra nodes to the DOM", "It helps in state management", "It wraps a component with additional props", "It is used for rendering loops"],
        answer: "It allows grouping multiple elements without adding extra nodes to the DOM"
    },
    {
        question: "125. How can you handle form submission in React?",
        options: ["By using onSubmit", "By using handleSubmit", "By using handleClick", "By using onClick"],
        answer: "By using onSubmit"
    },
    {
        question: "126. What is 'useContext' hook used for?",
        options: ["To share state across components", "To handle form submission", "To manage component lifecycle", "To fetch data from an API"],
        answer: "To share state across components"
    },
    {
        question: "127. What is the default state of a newly created React component?",
        options: ["null", "undefined", "an empty object", "an empty array"],
        answer: "an empty object"
    },
    {
        question: "128. What is the purpose of the 'componentDidMount' lifecycle method?",
        options: ["It is called after the component is mounted", "It is called before the component is mounted", "It is used for rendering the component", "It is used for updating the component"],
        answer: "It is called after the component is mounted"
    },
    {
        question: "129. How do you bind methods in React class components?",
        options: ["By using bind()", "By using this.setState()", "By using useState()", "By using constructor()"],
        answer: "By using bind()"
    },
    {
        question: "130. What is 'React Router' used for?",
        options: ["For navigating between different views in a React application", "For managing the component state", "For handling events", "For styling React components"],
        answer: "For navigating between different views in a React application"
    },
    {
        question: "131. What is 'React.lazy' used for?",
        options: ["For code splitting and lazy loading components", "For improving app performance", "For state management", "For handling errors in components"],
        answer: "For code splitting and lazy loading components"
    },
    {
        question: "132. What is the purpose of the 'useReducer' hook in React?",
        options: ["To manage more complex state logic", "To manage component lifecycle", "To handle events", "To fetch data from an API"],
        answer: "To manage more complex state logic"
    },
    {
        question: "133. What is the purpose of 'React Developer Tools'?",
        options: ["For debugging React applications", "For building React applications", "For styling React components", "For managing app routing"],
        answer: "For debugging React applications"
    },
    {
        question: "134. What is the purpose of 'shouldComponentUpdate' lifecycle method?",
        options: ["To optimize re-renders", "To update the component state", "To handle errors", "To render JSX"],
        answer: "To optimize re-renders"
    },
    {
        question: "135. What is the purpose of 'React.createElement'?",
        options: ["To create a new React element", "To create a new component", "To manage component state", "To render JSX to the DOM"],
        answer: "To create a new React element"
    },
    {
        question: "136. How do you pass props to a component in React?",
        options: ["By passing as arguments", "By defining inside the component", "By using state", "By using context"],
        answer: "By passing as arguments"
    },
    {
        question: "137. What is 'ReactDOM.hydrate()' used for?",
        options: ["For hydrating server-rendered HTML", "For rendering JSX to the DOM", "For handling events", "For managing app routing"],
        answer: "For hydrating server-rendered HTML"
    },
    {
        question: "138. What is the 'dangerouslySetInnerHTML' used for in React?",
        options: ["To set HTML content in a component", "To prevent XSS attacks", "To render JSON data", "To manage CSS styles"],
        answer: "To set HTML content in a component"
    },
    {
        question: "139. What is the purpose of 'React.StrictMode' in a React app?",
        options: ["To help detect potential problems in the app", "To optimize performance", "To handle errors", "To set component styles"],
        answer: "To help detect potential problems in the app"
    },
    {
        question: "140. How can you update a state value in React?",
        options: ["By calling setState()", "By using useState()", "By using this.updateState()", "By changing the state directly"],
        answer: "By calling setState()"
    },
    {
        question: "141. What is a 'class component' in React?",
        options: ["A component that extends React.Component", "A component that returns JSX", "A component that has no state", "A component that manages global state"],
        answer: "A component that extends React.Component"
    },
    {
        question: "142. What is the purpose of 'componentWillUnmount' lifecycle method?",
        options: ["It is called before the component is removed from the DOM", "It is used for rendering JSX", "It is used for updating the component state", "It is used to handle events"],
        answer: "It is called before the component is removed from the DOM"
    },
    {
        question: "143. How do you optimize performance in React?",
        options: ["By using React.memo and shouldComponentUpdate", "By using useEffect", "By using useState", "By using context"],
        answer: "By using React.memo and shouldComponentUpdate"
    },
    {
        question: "144. What is 'componentDidUpdate' lifecycle method used for?",
        options: ["To perform side effects after a component updates", "To update the component state", "To render JSX", "To handle events"],
        answer: "To perform side effects after a component updates"
    },
    {
        question: "145. What is 'React Router DOM' used for?",
        options: ["For managing navigation in React apps", "For managing component state", "For handling events", "For styling React components"],
        answer: "For managing navigation in React apps"
    },
    {
        question: "146. What is the purpose of 'useLayoutEffect' in React?",
        options: ["To run synchronously after all DOM mutations", "To run asynchronously after DOM updates", "To manage component state", "To handle form submissions"],
        answer: "To run synchronously after all DOM mutations"
    },
    {
        question: "147. What is 'React.memo' used for in React?",
        options: ["To optimize the rendering of functional components by memoizing them", "To memoize state changes", "To handle error boundaries", "To bind event handlers to components"],
        answer: "To optimize the rendering of functional components by memoizing them"
    },
    {
        question: "148. What is the correct way to handle errors in React?",
        options: ["By using error boundaries", "By using try/catch blocks in components", "By using useEffect hooks", "By using React Developer Tools"],
        answer: "By using error boundaries"
    },
    {
        question: "149. How can you avoid prop drilling in React?",
        options: ["By using context API", "By using hooks", "By using class components", "By using default props"],
        answer: "By using context API"
    },
    {
        question: "150. What is 'useCallback' hook used for in React?",
        options: ["To memoize functions and avoid unnecessary re-renders", "To memoize state values", "To manage event handlers", "To optimize the lifecycle methods"],
        answer: "To memoize functions and avoid unnecessary re-renders"
    }

];

const Web = () => {
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
                    <h2 className="fs-2 font-bold text-center">Web Developmenet Quiz</h2>
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

export default Web;







