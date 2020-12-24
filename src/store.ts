import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedQuiz: 1,

    // Todo: Retrieve quizzes from REST api and replace this mockup data.
    quizzes: [
      {
        id: 0,
        text: "First quiz",
        questions: [
          {
            id: 0,
            text: "First question",
            answers: [
              "First",
              "Second",
              "Third",
              "Fourth"
            ],
            correctAnswerID: 0
          },
          {
            id: 1,
            text: "Second question",
            answers: [
              "Fifth",
              "Sixth",
              "Seventh",
              "Eighth"
            ],
            correctAnswerID: 3
          }
        ],
      },
      {
        id: 1,
        text: "Second quiz",
        questions: [
          {
            id: 2,
            text: "[Second] First question",
            answers: [
              "First",
              "Second",
              "Third",
              "Fourth"
            ],
            correctAnswerID: 2
          },
          {
            id: 3,
            text: "[Second] Second question",
            answers: [
              "Fifth",
              "Sixth",
              "Seventh",
              "Eighth"
            ],
            correctAnswerID: 1
          }
        ],
      }
    ]
  },
  mutations: {
    setSelectedQuiz(state, selectedQuiz) {
      state.selectedQuiz = selectedQuiz;
    }
  },
  actions: {

  }
});
