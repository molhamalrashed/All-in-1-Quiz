import {selectedLink} from './pages/welcomePage.js';

  /* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
  */
  
  export const options = [
  {label: 'Movies', value:'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple'},
  {label: 'Music', value: 'https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple'},
  {label: 'Sport', value: 'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'},
  {label: 'Computer', value: 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple'},
  {label: 'Geography', value:'https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple'},
  {label:'History', value: 'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple'}
  ]

 
  

  function fetchData (link){
    if(!link){
      link = "https://opentdb.com/api.php?amount=30&category=9&difficulty=easy&type=multiple";
    }
  return fetch(link)
    .then(response => response.json())
    .then(data => {
      const results = data.results; 
      return results;
    })
    .catch(error => {
      console.log('Error fetching API:', error);
    });
  }
  
  function createAnswers (answersArray, correct, text){
      let randomIndex = Math.floor(Math.random()* (answersArray.length + 1));
      answersArray.splice(randomIndex, 0 , correct);
      const answers = {
        a:answersArray[0],
        b:answersArray[1],
        c:answersArray[2],
        d:answersArray[3]
      }
      const newArray = Object.entries(answers);
      newArray.forEach(([key,value])=>{
        if(value === correct){
          correct = key;
        }
      })
      return {text, answers, correct}
 }
  
    
  export async function createQuizData (link){
      try{
        const data = await fetchData(link);
        const questions = [];
        for(let i=0; i< 10 ; i++){
        const answers = data[i].incorrect_answers;
        const correct = data[i].correct_answer;
        const text = data[i].question;
        const question = createAnswers(answers, correct , text);
        questions.push(question);
        }
        const Data = {
          currentQuestionIndex: 0,
          questions: questions
        }
        console.log(questions);
        return Data;
    } catch(err) {
      console.log('error');
    }
  }
  
  async function processQuizData() {
    const quizData = await createQuizData();  
     return quizData;
  }
  
   export const quizData = await processQuizData();
   


