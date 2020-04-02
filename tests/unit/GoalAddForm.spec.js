// Libraries
import Vue from "vue";
import Vuetify from "vuetify";

// Components
import GoalAddForm from "@/components/GoalAddForm";

// Utilities
import { mount, shallowMount, createLocalVue } from "@vue/test-utils";

Vue.use(Vuetify);

const localVue = createLocalVue();

describe("GoalAddForm.vue", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("Should have empty input fields initially.", () => {
    const wrapper = mount(GoalAddForm, {
      localVue,
      vuetify
    });
    expect(wrapper.html()).toMatchSnapshot();
    const title = wrapper.find("#title");
    expect(title.text()).toBe("");

    const description = wrapper.find("#description");
    expect(description.text()).toBe("");

    const saveButton = wrapper.find("#save");
    const spy = spyOn(wrapper.vm, "onSaveClick");
    expect(wrapper.vm.onSaveClick).toHaveBeenCalledTimes(0);

    saveButton.trigger("click");
    // expect(wrapper.vm.valid).toBe(false);
    expect(wrapper.vm.onSaveClick).toHaveBeenCalledTimes(1);
    // expect(wrapper.vm.addService).toBeCalled();
  });

  // it("Should have empty input fields initially.", () => {
  //   const wrapper = mount(GoalAddForm, {
  //     localVue,
  //     vuetify
  //   });

  //   const title = wrapper.find("#title");
  //   expect(title.text()).toBe("");

  //   const description = wrapper.find("#description");
  //   expect(description.text()).toBe("");

  //   // const saveButton = wrapper.find("#save");
  //   // expect(saveButton.props().disabled).toBe(true);
  // });

  // it("enter text and check value of input.", () => {
  //   const wrapper = mount(GoalAddForm, {
  //     localVue,
  //     vuetify
  //   });

  // expect(wrapper.vm.dialog).toBe(false);
  // wrapper.vm.dialog = true;

  // expect(wrapper.vm.showDialog).toBe(false);

  // const button = wrapper.find("#addGoal");
  // expect(button.exists()).toBe(true);

  // button.trigger("click");
  // expect(wrapper.vm.showDialog).toBe(true);

  // wrapper.vm.$on("clicked", event);

  // expect(event).toHaveBeenCalledTimes(0);

  // button.trigger("click");

  // expect(event).toHaveBeenCalledTimes(1);

  // expect(wrapper.html()).toMatchSnapshot();

  // let title = wrapper.find("#title");
  // title.setValue("goal title");
  // expect(wrapper.vm.newGoal.title).toBe("goal title");
  // const description = wrapper.find("#description");
  // expect(description.text()).toBe("");
  // });

  // it("should not emit an event when Save button is clicked", () => {
  //   const wrapper = mount(GoalAdd, {
  //     localVue,
  //     vuetify
  //   });

  //   const event = jest.fn();
  //   const button = wrapper.find("#save");

  //   // Here we bind a listener to the wrapper
  //   // instance to catch our custom event
  //   // https://vuejs.org/v2/api/#Instance-Methods-Events
  //   wrapper.vm.$on("action-btn:clicked", event);

  //   expect(event).toHaveBeenCalledTimes(0);

  //   // Simulate a click on the button
  //   button.trigger("click");

  //   // Ensure that our mock event was called
  //   expect(event).toHaveBeenCalledTimes(0);
  // });

  // it("should have empty input fields initially.", () => {
  //   const wrapper = mount(GoalAdd, {
  //     localVue,
  //     vuetify,
  //     data() {
  //       return {
  //         newGoal: {
  //           title: "A title",
  //           description: "A description"
  //         }
  //       };
  //     }
  //   });

  //   // We could also verify this differently
  //   // by checking the text content
  //   let title = wrapper.find("#title");
  //   title.setValue("A title");
  //   expect(title.text()).toBe("A title");
  //   const description = wrapper.find("#description");
  //   expect(description.text()).toBe("A description");
  // });
});
