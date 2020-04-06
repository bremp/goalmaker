import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import GoalAddForm from "@/components/GoalAddForm";
import { mount, createLocalVue } from "@vue/test-utils";

Vue.use(Vuetify);

const localVue = createLocalVue();
localVue.use(Vuex);

describe("GoalAddForm.vue", () => {
  let vuetify;
  let actions;
  let store;

  beforeEach(() => {
    vuetify = new Vuetify();
    actions = {
      addGoalAction: jest.fn()
    };
    store = new Vuex.Store({
      actions
    });
  });

  it("Should disable 'Save' button when form is invalid.", async () => {
    const wrapper = mount(GoalAddForm, {
      store,
      localVue,
      vuetify
    });

    // By default input fields are empty and will be invalid on save click.
    let title = wrapper.find("#title");
    title.setValue("");
    await wrapper.vm.$nextTick();

    const saveButton = wrapper.find("#save");
    saveButton.trigger("click");

    expect(saveButton.props().disabled).toBe(false);
    expect(actions.addGoalAction.mock.calls).toHaveLength(0);
  });

  it("Should enable 'Save' button when form is valid.", async () => {
    const wrapper = mount(GoalAddForm, {
      store,
      localVue,
      vuetify
    });

    let title = wrapper.find("#title");
    title.setValue("Some title");
    await wrapper.vm.$nextTick(); // Update DOM.

    const saveButton = wrapper.find("#save");
    saveButton.trigger("click");

    expect(saveButton.props().disabled).toBe(false);
    expect(actions.addGoalAction.mock.calls).toHaveLength(1);
  });

  it("Should fire event when 'Save' button is clicked and fields are valid.", async () => {
    const wrapper = mount(GoalAddForm, {
      store,
      localVue,
      vuetify
    });

    let title = wrapper.find("#title");
    title.setValue("Some title");
    let description = wrapper.find("#description");
    description.setValue("Some description");
    await wrapper.vm.$nextTick();

    const saveButton = wrapper.find("#save");
    saveButton.trigger("click");

    expect(actions.addGoalAction.mock.calls).toHaveLength(1);
    expect(actions.addGoalAction.mock.calls[0][1]).toEqual({
      title: "Some title",
      description: "Some description"
    });
  });
});
