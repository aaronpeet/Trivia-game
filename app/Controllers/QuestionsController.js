import { ProxyState } from "../AppState.js";
import { questionsService } from "../Services/QuestionsService.js"

function _draw() {
    let questions = ProxyState.questions
    let template = ''
    questions.forEach(q => template += q.Template)
    document.getElementById('questions').innerHTML = template
}

export default class QuestionsController{
    constructor() {
        ProxyState.on('questions', _draw)

        questionsService.getAllQuestions()
    }

    select(choice) {

        let ProxyState.questions.incorrectAnswers.find(q=> choice ==))
            alert('You were wrong...')
        else {
            alert('You were right!!')
        }
    }
   
}