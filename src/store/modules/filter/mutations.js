export default {
  setFilterSet (state, value) {
    if (value.name !== 'new') {
      state.filter_set = value
    } else {
      state.filter_set = Object.assign(state.filter_set, state.filter_set.template)
    }
  },
  setFilterSets (state, value) {
    state.filter_sets = value
  },
  setRegions (state, value) {
    state.regions = value
  }
}
