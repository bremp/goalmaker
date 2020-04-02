import Vue from "vue";
import Vuetify from "vuetify";
import GoalAdd from "@/components/GoalAdd";
import { shallowMount, createLocalVue } from "@vue/test-utils";

Vue.use(Vuetify);

const localVue = createLocalVue();

describe("GoalAdd.vue", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("Should show dialog when add button is clicked.", () => {
    const wrapper = shallowMount(GoalAdd, {
      localVue,
      vuetify
    });

    expect(wrapper.vm.showDialog).toBe(false);

    const button = wrapper.find("#addGoal");
    expect(button.exists()).toBe(true);

    button.trigger("click");
    expect(wrapper.vm.showDialog).toBe(true);
  });
});
