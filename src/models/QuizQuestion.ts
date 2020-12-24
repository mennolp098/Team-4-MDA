export class QuizQuestion {

  id: Number
  text: String
  answers: Array<String>
  correctAnswerIndex: Number
  
  constructor () {
    // Todo: construct model
  }

  /**
   * Is quizanswer valid?
   * Returns true if quiz is correctly filled in; otherwise false.
   */
  isValid() {
    if(!this.id)
    {
      return false;
    }
    if(!this.text || this.text.length == 0)
    {
      return false;
    }
    if(!this.answers || this.answers.length != 4)
    {
      return false;
    }
    if(!this.correctAnswerIndex || this.correctAnswerIndex >= 4)
    {
      return false;
    }


    return true;
  }
}