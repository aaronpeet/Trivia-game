
export default class Question{
    constructor({ category, type, question, correct_answer, incorrect_answers })
    
    {
        this.category = category
        this.type = type
        this.question = question
        this.correctAnswer = correct_answer
        this.incorrectAnswers = incorrect_answers 
    }

    get Template() {
      return /*html*/`
      <div class="col">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${this.category}</h5>
            <p class="card-text">${this.question}</p>
            <a href="#" class="btn btn-primary" onclick="app.questionsController.select('True')">True</a><a href="#" class="btn btn-primary" onclick="app.questionsController.select('False')">False</a>
          </div>
        </div>
      </div>
`
    }
}










