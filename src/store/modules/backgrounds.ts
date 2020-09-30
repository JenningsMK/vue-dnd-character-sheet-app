enum Background {
  Acolyte,
  Charlatan,
  Criminal,
  Entertainer,
  FolkHero,
  GuildArtisan,
  Hermit,
  Noble,
  Outlander,
  Sage,
  Sailor,
  Soldier,
  Urchin,
}

interface State {
  [ background: string ]: object
}

const state = () => ( {
  acolyte: {},
  charlatan: {},
  criminal: {},
  entertainer: {},
  folkHero: {},
  guildArtisan: {},
  hermit: {},
  noble: {},
  outlander: {},
  sage: {},
  sailor: {},
  soldier: {},
  urchin: {}
} )

const mutations = {};

const actions = {};

const getters = {
  getBackground( state: State, background: Background ) {
    return state[ background ]
  }
};

export default {
  namespace: true,
  state,
  mutations,
  actions,
  getters
}
