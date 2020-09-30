enum Classes {
  Barbarian,
  Bard,
  Cleric,
  Druid,
  Fighter,
  Monk,
  Paladin,
  Ranger,
  Rogue,
  Sorcerer,
  Warlock,
  Wizard
}

interface State {
  [ dndClass: string ]: object
}

const state = () => ( {
    barbarian: {},
    bard: {},
    cleric: {},
    druid: {},
    fighter: {},
    monk: {},
    paladin: {},
    ranger: {},
    rogue: {},
    sorcerer: {},
    warlock: {},
    wizard: {}
} )

const mutations = {};

const actions = {};

const getters = {
  getClass( state: State, dndClass: Classes ) {
    return state[ dndClass ]
  }
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
  getters
}
