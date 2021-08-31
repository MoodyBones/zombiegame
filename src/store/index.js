import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uiState: 'start', // could use a boolean, but this is more flexible
    characterChoices: ['baker', 'mechanic', 'artist'],
    character: '',
    questionIndex: 0,
    score: 0,
    questions: [
      {
        question: `What's your dog's name?`,
        baker: 'Woofgang Puck',
        mechanic: 'Alf',
        artist: 'Salvador Dogi',
      },
      {
        question: `What's your favorite hobby?`,
        baker: 'Extreme ironing',
        mechanic: 'Bacon santa cosplay',
        artist: 'Mimosas',
      },
      {
        question: `What's your favorite color?`,
        baker: 'turquoise',
        mechanic: 'yellow',
        artist: 'transparent',
      },
      {
        question: `Is cereal soup?`,
        baker: "You can't be serieal",
        mechanic: 'Yes, I am Jason Lengstorf',
        artist: 'wut',
      },
      {
        question: `What’s the most imaginative insult you can come up with?`,
        baker: "You're a substitute teacher with no lesson plan",
        mechanic: 'Yer face is a melted welly',
        artist: 'You eat buttons off the remote',
      },
      {
        question: `If peanut butter wasn’t called peanut butter, what would it be called?`,
        baker: 'legoome',
        mechanic: 'brown paste',
        artist: 'groundnut smoosh',
      },
    ],
  },
  mutations: {
    pickCharacter(state, character) {
      state.character = character
    },
    updateUIState(state, uiState) {
      state.uiState = uiState
    },
    pickQuestion(state, character) {
      // if answer was correct, increment score, otherwise decrement
      character === state.character ? (state.score += 13) : (state.score -= 13)

      // increment question index isn't at the end of the array, then move to the next questiomn
      if (state.questionIndex < state.questions.length - 1) {
        state.questionIndex++
      } else {
        // if at end of array set uiState to won or lost
        // use Math.sign to stop js from coercing the score
        Math.sign(state.score) > 0
          ? (state.uiState = 'won')
          : (state.uiState = 'lost')
      }
    },
    resetGame(state) {
      state.uiState = 'start'
      state.character = ''
      state.questionIndex = 0
      state.score = 0
    },
  },
  actions: {},
  modules: {},
})
