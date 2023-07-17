import { quizData } from './data.js';
import { initQuestionPage } from './pages/questionPage.js';
import { retrieveStorage, retrieveQuizData} from "./pages/sessionStorage.js";
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {

  const userData = retrieveStorage();
  const savedQuizData = retrieveQuizData();
  if(!userData){
  quizData.currentQuestionIndex = 0;
  initWelcomePage();
  }
  else {
    quizData.currentQuestionIndex = userData.currentQuestionIndex;
    initQuestionPage({scoreValue:userData.score, userName : userData.name, selectedAnswer: userData.selectedAnswer, savedQuizData});
  }
};


window.onload = loadApp();
window.addEventListener('load', loadApp);



