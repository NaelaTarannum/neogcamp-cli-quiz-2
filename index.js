const chalk = require('chalk');
const readLineSync = require('readline-sync');


const questionSet = [
 {
  question:'What is my favourite color?',
  answer: 'white'
 },
 {
  question:'Which is my favourite anime?',
  answer:'Erased'
 },
 {
  question:'Where do I live?',
  answer:'Bengaluru'
 },
 {
  question: 'What is my favourite food?',
  answer: 'Biryani'

 },
 {
  question:'Where was I born?',
  answer: 'Bengaluru'
 }
]
let points = 0;
function takeQuiz() {
  for(let i = 0 ; i < questionSet.length;i++){
    const answerPresent = readLineSync.question(chalk.cyan(questionSet[i].question));
    const correctAnswer = questionSet[i]['answer'];
    if(answerPresent.toLowerCase().trim() === correctAnswer.toLowerCase().trim()){
      points += 10;
          console.log(chalk.white.bgGreen.bold(`BRAVO, You get 10 points`))
    }else {
      console.log(chalk.blue.bgRed.bold('Oops, Wrong answer'))
    }
  }
  console.log(`Your final score is ${points}`);
  process.exit()
}
function Welcome(){
  const name = readLineSync.question('Please Enter your name:\n');
  if (!readLineSync.keyInYN(`Hi ${name} ! Enter y to take the quiz.Enter n to exit`)){
  process.exit();
}
takeQuiz()
}


console.log('Hi There!')
Welcome()