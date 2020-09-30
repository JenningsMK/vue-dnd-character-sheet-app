enum Races {
  Dwarf,
  Elf,
  Halfling,
  Human,
  DragonBorn,
  Gnome,
  HalfOrc,
  Tiefling
}

interface State {
  [race: string]: object
}

const state = () => ( {
    dwarf: {},
    elf: {},
    halfling: {},
    human: {},
    dragonBorn: {},
    gnome: {},
    halfOrc: {},
    tiefling: {}
} )

const mutations = {};

const actions = {};

const getters = {
  getRace( state: State, race: Races ) {
    return state[race]
  }
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
  getters
}
