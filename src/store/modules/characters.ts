interface State {
  characters: [];
}

const state = () => ( {
  characters: []
} )

const mutations = {};

const actions = {};

const getters = {
  getCharacters( state: State ) {
    return state.characters;
  },
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
  getters
}
