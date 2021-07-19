import { ProxyState } from "../AppState.js"
import Question from "../Models/Question.js"
import { api } from "./AxiosService.js"

class QuestionsService{
    async getAllQuestions(url) {
        
        const res = await api.get(url)

        console.log(res.data.results)

        ProxyState.true = res.data.correctAnswer
        ProxyState.false = res.data.incorrectAnswers
        
        let questions = res.data.results.map(q => new Question(q))
        ProxyState.questions = questions
    }

    /*select(choice) {
        ProxyState.true = [...ProxyState.questions.correctAnswer]
        ProxyState.false = [...ProxyState.questions.incorrectAnswers]
    }*/

}

export const questionsService = new QuestionsService()