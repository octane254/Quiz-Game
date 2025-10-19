const prompt = require('prompt-sync')();

console.log('Welcome to the quiz!');

let correctAnswers = 0;
const totalQuestions = 3;

const answer1 = prompt('What is the most traumatic scenario you have experienced?: ');
const correctAnswer1 = 'Losing a loved one';

if (answer1 === correctAnswer1) {
  console.log('you got it correct!');
  correctAnswers++;
} else {
  console.log(`Sorry, the correct answer is: ${correctAnswer1}`);
}

const answer2 = prompt('What is better, a 3090ti or a 5090?: ');
const correctAnswer2 = '5090';

if (answer2 === correctAnswer2) {
  console.log('you got it correct!');
  correctAnswers++;
} else {
  console.log(`Sorry, the correct answer is: ${correctAnswer2}`);
}
const answer3 = prompt('What is the strongest, Goku or Saitama: ');
const correctAnswer3 = 'Goku';

if (answer3 === correctAnswer3) {
  console.log('you got it correct!');
  correctAnswers++;
} else {
  console.log(`Sorry, the correct answer is: ${correctAnswer3}`);
}

console.log(`You got ${correctAnswers} out of ${totalQuestions} correct.`);
console.log('Thank you for playing the quiz!');