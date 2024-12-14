const text = "Happy Birthday Radhika 🎂🎂🎂";
const box = document.querySelector(".blue-box");

let index = 0; // For typing letters
let isDeleting = false; // For removing letters

function showMessage() {
  alert("Thanks for your wishes, nikal ab chep mat ho😴😴");
}
function animateText() {
  if (!isDeleting) {
    // Typing letters
    box.textContent = text.slice(0, index + 1);
    index++;
    if (index === text.length) {
      isDeleting = true; // Start deleting after full text is typed

      // Trigger crackers animation
      createCelebrationEmojis();

      setTimeout(animateText, 5000); // Pause before deleting
      return;
    }
  } else {
    // Deleting letters
    box.textContent = text.slice(0, index - 1);
    index--;
    if (index === 0) {
      isDeleting = false; // Start typing again after all letters are removed
      setTimeout(animateText, 400); // Pause before retyping
      return;
    }
  }
  setTimeout(animateText, isDeleting ? 100 : 150); // Typing is slower than deleting
}

animateText();



const options = document.querySelectorAll(".option");

options.forEach(option => {
  option.addEventListener("click", () => {
    options.forEach(btn => {
      if (btn.dataset.correct === "true") {
        btn.classList.add("correct");
      } else {
        btn.classList.add("wrong");
      }
    });
  });
});

function createCelebrationEmojis() {
  const celebrationContainer = document.getElementById("celebration-emojis");

  for (let i = 0; i < 50; i++) { // Creates 50 emojis
    const emoji = document.createElement("span");
    emoji.classList.add("celebration-emoji");
    emoji.textContent = "🎉"; // Party Popper emoji

    // Random positioning and animation delays
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.top = Math.random() * 100 + "vh";
    emoji.style.animationDelay = Math.random() * 1.5 + "s";

    celebrationContainer.appendChild(emoji);

    // Remove the emoji after animation ends
    setTimeout(() => {
      emoji.remove();
    }, 4000); // Duration of the animation
  }
}

function openImage(imageSrc) {
  var modal = document.getElementById("imageModal");
  var modalImage = document.getElementById("modalImage");
  
  modal.style.display = "flex";  // Show the modal
  modalImage.src = imageSrc;    // Set the source of the image
}

function closeImage() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none";  // Close the modal when the user clicks anywhere on the screen
}

function toggleTextbox() {
  var textbox = document.getElementById("goodTextbox");
  // If the textbox is hidden, show it
  if (textbox.style.display === "none" || textbox.style.display === "") {
     textbox.style.display = "block";
  }
}

function submitGoodThings() {
  var goodThingsText = document.getElementById("goodThingsText").value;

  if (goodThingsText.trim() !== "") {
     // Show alert thanking the user for writing good things
     alert("Haa Haa pata h merko 😴");

     // Optionally clear the text area after submission
     document.getElementById("goodThingsText").value = "";

     // Hide the textbox after submission
     document.getElementById("goodTextbox").style.display = "none";
  } else {
     // Alert if no text is entered
     alert("Please write something before submitting.");
  }
}

const correctAnswers = [2, 1, 3, 2, 3]; // This should match the correct answer value for each question

// Answer checking function
function checkAnswer(selectedOption) {
  // Get the question index from the input's name attribute (e.g., "q1" => index 0)
  const questionIndex = parseInt(selectedOption.name.replace('q', '')) - 1;

  // Retrieve the correct answer for the current question
  const correctAnswerValue = correctAnswers[questionIndex];

  // Get all the options for the question
  const options = selectedOption.closest('.question').querySelectorAll('input[type="radio"]');

  // Loop through all options to check the answers
  options.forEach(option => {
    const label = option.closest('label');
    if (parseInt(option.value) === correctAnswerValue) {
      // Correct answer: color green
      label.style.backgroundColor = 'green';
      label.style.color = 'white';
    } else {
      // Incorrect answer: color red
      label.style.backgroundColor = 'red';
      label.style.color = 'white';
    }

    // Disable all options to prevent further clicks
    option.disabled = true;
  });
}

function calculateScore() {
  let score = 0;
  const totalQuestions = 5;

  // Check answers and calculate score
  for (let i = 1; i <= totalQuestions; i++) {
    const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
    if (selectedAnswer && parseInt(selectedAnswer.value) === correctAnswers[i - 1]) {
      score++;
    }
  }

  // Display result
  const result = document.getElementById('result');
  result.innerHTML = `<p>Your Score</p><div class="score-circle">${score} / ${totalQuestions}</div>`;
}


