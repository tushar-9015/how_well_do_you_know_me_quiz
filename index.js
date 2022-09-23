const readlineSync = require("readline-sync");
const colors = require("colors");

colors.setTheme({
  error: ['red', 'underline'],
  info: ['blue', 'bold']

});


var userName = readlineSync.question(colors.bold("What's your Name? "));
console.log(`Welcome ${userName}`.green);
console.log('Get ready to play "How Well Do You Know Tushar Quiz"'.info);

var score = 0;

function play(question, options, answer) {
  var userAnswer = readlineSync.keyInSelect(options, question);

  if (userAnswer === answer) {
    score = score + 2
    console.log("correct !".green);
  } else {
    score = score - 1
    console.log("wrong !".red)
  }
  console.log(colors.blue("current score ", score));
  console.log(colors.grey("----------------------------------------------"));

}

var questionData = [{
  question: "What is my last name? ",
  options: ["Sharma", "Verma", "Singh", "Joshi"],
  answer: 3
}, {
  question: "Where do I live?",
  options: ["Delhi", "Bhopal", "Bangalore", "Mumbai"],
  answer: 0
}, {
  question: "My favourite superhero would be?",
  options: ["Batman", "Spiderman", "Shaktimaan", "One Punch Man"],
  answer: 3
}, {
  question: "When is my birthday? (dd/mm)",
  options: ["7-February", "10-April", "15-October", "14-December"],
  answer: 0
}, {
  question: "My favourite comic movie would be?",
  options: ["Hungama", "Andaaz apna apna", "Hera Pheri", "Hangover"],
  answer: 0
}, {
  question: "My favourite anime would be?",
  options: ["Dororo", "Naruto", "Re:Life ", "One Piece"],
  answer: 2
}];

for (let i = 0; i < questionData.length; i++) {
  var currentQuestion = questionData[i];
  play(currentQuestion.question, currentQuestion.options, currentQuestion.answer);
}
console.log(colors.info("Your Final Score: " + score));