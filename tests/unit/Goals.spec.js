import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import Goals from "@/components/Goals";
import { mount, createLocalVue } from "@vue/test-utils";

Vue.use(Vuetify);

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Goals.vue", () => {
  let vuetify;
  let state;
  let mutations;
  let actions;
  let store;
  let goals;

  beforeEach(() => {
    vuetify = new Vuetify();
    state = {
      searchQuery: "",
      goals: []
    };
    mutations = {
      getGoals(state, goals) {
        state.goals = goals;
      },
      searchGoal(state, query) {
        state.searchQuery = query;
      }
    };
    actions = {
      getGoalsAction({ commit }) {
        commit("getGoals", goals);
      }
    };
    store = new Vuex.Store({
      state,
      mutations,
      actions
    });
  });

  it("Should display 'Add' button when goals are less than max active goals.", async () => {
    goals = [];

    const wrapper = mount(Goals, {
      store,
      localVue,
      vuetify,
      propsData: {
        maxActiveGoals: 1
      }
    });

    const addButton = wrapper.find("#addGoal");
    expect(addButton.exists()).toBe(true);
  });

  it("Should not display 'Add' button when goals are equal or greater than max active goals.", async () => {
    goals = [
      {
        id: 1,
        title: "Goal Title 1",
        description: "Goal 1 description.",
        done: false
      }
    ];

    const wrapper = mount(Goals, {
      store,
      localVue,
      vuetify,
      propsData: {
        maxActiveGoals: 1
      }
    });

    const addButton = wrapper.find("#addGoal");
    expect(addButton.exists()).toBe(false);
  });
});
