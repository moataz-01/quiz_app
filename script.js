// Define the quiz questions and options
const quizData = [
  {
    question:
      "Question 1: At a conference, 12 members shook hands with each other before & after the meeting. How many total number of hand shakes occurred?",
    options: ["100", "132", "145", "144"],
    answer: "132",
  },
  {
    question:
      "Question 2: The day after the day after tomorrow is four days before Monday. What day is it today?",
    options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    answer: "Monday",
  },
  {
    question:
      "Question 3: Look at this series: 7, 10, 8, 11, 9, 12, … What number should come next?",
    options: ["7", "12", "10", "13"],
    answer: "10",
  },
  {
    question: "Question 4: 6121135 is to flame as 21215120 is to ?",
    options: ["voice", "bald", "bloat", "castle"],
    answer: "bloat",
  },
  {
    question: "Question 5: Forest is to tree as tree is to ?",
    options: ["plant", "leaf", "branch", "mangrove"],
    answer: "leaf",
  },
];

// Get HTML elements
const questionElement = document.getElementById("question");
const option1Element = document.getElementById("option1-label");
const option2Element = document.getElementById("option2-label");
const option3Element = document.getElementById("option3-label");
const option4Element = document.getElementById("option4-label");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

// Load the first question
loadQuestion();

// Function to load a question
function loadQuestion() {
  const quiz = quizData[currentQuestion];
  questionElement.textContent = quiz.question;
  option1Element.textContent = quiz.options[0];
  option2Element.textContent = quiz.options[1];
  option3Element.textContent = quiz.options[2];
  option4Element.textContent = quiz.options[3];
}

// Function to check the answer and load the next question
function nextQuestion() {
  const selectedOption = document.querySelector("input[name='option']:checked");

  // Check if an option is selected
  if (selectedOption) {
    const answer = selectedOption.nextElementSibling.textContent;

    // Check if the selected answer is correct
    if (answer === quizData[currentQuestion].answer) {
      score++;
    }

    // Clear the selected option
    selectedOption.checked = false;

    // Move to the next question
    currentQuestion++;

    // Check if there are more questions
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      // Display the score
      resultElement.textContent = `Your score is ${score} out of ${quizData.length}.`;
      nextButton.disabled = true;
      console.log(score);
      console.log(quizData.length);
      if (score == quizData.length) {
        document.getElementById("gif").style.display = "block";
      }
    }
  }
}

// Add event listener to the next button
nextButton.addEventListener("click", nextQuestion);
