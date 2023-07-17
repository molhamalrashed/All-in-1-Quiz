
export const createStorage = (userName ,selected, score , currentQuestionIndex) => {
   const data = {
    name: userName,
    score: score,
    currentQuestionIndex: currentQuestionIndex,
    selectedAnswer: selected,
   }
   sessionStorage.setItem("currentUser", JSON.stringify(data));
}

export const retrieveStorage = () => {
    let data = sessionStorage.getItem("currentUser");
    if(data){
        data = JSON.parse(data);
    }
    return data;
}

export const storeQuizData = (quizData) => {
    sessionStorage.setItem("currentQuizData", JSON.stringify(quizData));
}

export const retrieveQuizData = () => {
    let data = sessionStorage.getItem("currentQuizData");
    if(data) {
        data = JSON.parse(data);
    }
    return data;
}