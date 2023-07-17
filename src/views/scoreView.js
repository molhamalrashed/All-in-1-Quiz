import { USER_INTERFACE_ID } from "../constants.js"; 

const userInterface = document.getElementById(USER_INTERFACE_ID);

export const createScore = (score)=> {
    let showScore = document.querySelector('.myScore');
    if(!showScore){
    showScore = document.createElement('div');
    showScore.className = 'myScore';
    }
    showScore.innerHTML = `Your score is: ${score}/100`;
    return showScore;
    }
    
export const createIndex = (index)=> {
    let showIndex = document.querySelector('.myIndex');
    if(!showIndex){
       showIndex = document.createElement('div');
        showIndex.className = 'myIndex';
        }
        userInterface.appendChild(showIndex);
        showIndex.innerHTML = `You are in question: ${index} / 10`;
        return showIndex;
     }