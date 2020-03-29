import Vue from "vue";
import Vuex from "vuex";

import { dataService } from "../shared";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchQuery: "", // Search query for goal(s)
    goals: []
  },
  mutations: {
    getGoals(state, goals) {
      state.goals = goals;
    },
    addGoal(state, goal) {
      state.goals.push(goal);
    },
    searchGoal(state, query) {
      state.searchQuery = query;
    }
  },
  // getters: {},
  actions: {
    async getGoalsAction({ commit }) {
      const goals = await dataService.getGoals();
      commit("getGoals", goals);
    },
    // addGoalAction({ commit, state }, goal) {
    //   const goals = [...state.goals, goal];
    //   axios.post("api/goals.json", goals).then(() => commit("addGoal", goal));
    // }
    async addGoalAction({ commit }, goal) {
      const addedGoal = await dataService.addGoal(goal);
      commit("addGoal", addedGoal);
    }
  },
  modules: {}
});
