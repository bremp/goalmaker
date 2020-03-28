import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchQuery: "", // Search query for goal(s)
    goals: [
      {
        title: "Refine Goal List",
        done: false
      },
      {
        title: "Refine Goal Add",
        done: false
      },
      {
        title: "Implement Vuex",
        done: true
      },
      {
        title: "Search",
        done: true
      },
      {
        title: "Unit Test",
        done: false
      },
      {
        title: "Git CI",
        done: false
      },
      {
        title: "Routes",
        done: true
      }
    ]
  },
  mutations: {
    addGoal(state, goal) {
      state.goals.push(goal);
    },
    searchGoal(state, query) {
      state.searchQuery = query;
    }
  },
  // getters: {},
  actions: {},
  modules: {}
});
