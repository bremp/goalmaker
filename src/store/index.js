import Vue from "vue";
import Vuex from "vuex";

import { dataService } from "../shared";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    searchQuery: "", // Search query for goal(s)
    goals: []
  },
  mutations: {
    getGoals(state, goals) {
      state.goals = goals;
    },
    addGoal(state, goal) {
      state.goals.push(goal); // mutable addition
    },
    updateGoal(state, goal) {
      const index = state.goals.findIndex(g => g.id === goal.id);
      state.goals.splice(index, 1, goal);
      state.goals = [...state.goals];
    },
    checkAsDone(state, { id, isDone }) {
      const goal = state.goals.find(g => g.id === id);
      goal.done = isDone;
    },
    deleteGoal(state, goalId) {
      state.goals = [...state.goals.filter(g => g.id !== goalId)];
    },
    searchGoal(state, query) {
      state.searchQuery = query;
    }
  },
  actions: {
    async getGoalsAction({ commit }) {
      const goals = await dataService.getGoals();
      commit("getGoals", goals);
    },
    async addGoalAction({ commit }, goal) {
      const addedGoal = await dataService.addGoal(goal);
      commit("addGoal", addedGoal);
    },
    async updateGoalAction({ commit }, goal) {
      const updatedGoal = await dataService.updateGoal(goal);
      commit("updateGoal", updatedGoal);
    },
    async checkAsDoneAction({ commit }, { id, isDone }) {
      await dataService.checkAsDone(id, isDone);
      commit("checkAsDone", { id, isDone });
    },
    async deleteGoalAction({ commit }, goal) {
      const deletedGoalId = await dataService.deleteGoal(goal);
      commit("deleteGoal", deletedGoalId);
    }
  },
  getters: {
    getGoalById: state => id => state.goals.find(g => g.id === id) // For later use.
  },
  modules: {}
});
