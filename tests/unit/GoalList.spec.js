import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import GoalList from "@/components/GoalList";
import { mount, createLocalVue } from "@vue/test-utils";

Vue.use(Vuetify);

const localVue = createLocalVue();
localVue.use(Vuex);

describe("GoalList.vue", () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it("Should show correct count of list items.", () => {
    const wrapper = mount(GoalList, {
      localVue,
      vuetify,
      propsData: {
        goals: [
          {
            id: 1,
            title: "Goal Title 1",
            description: "Goal 1 description.",
            done: false
          },
          {
            id: 2,
            title: "Goal Title 2",
            description: "Goal 2 description.",
            done: false
          },
          {
            id: 3,
            title: "Goal Title 3",
            description: "Goal 3 description.",
            done: false
          }
        ]
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
    const listItems = wrapper.findAll(".v-card");
    expect(listItems).toHaveLength(3);
  });

  it("Should fire event on done checkbox is clicked.", async () => {
    const goal = {
      id: 1,
      title: "Goal Title 1",
      description: "Goal 1 description.",
      done: false
    };
    let actions = {
      checkAsDoneAction: jest.fn()
    };
    let store = new Vuex.Store({ actions });

    const wrapper = mount(GoalList, {
      store,
      localVue,
      vuetify,
      propsData: {
        goals: [Object.assign({}, goal)]
      }
    });

    let checkbox = wrapper.find("input[type='checkbox']");
    expect(checkbox.element.value).toEqual("false");

    checkbox.trigger("change");

    expect(actions.checkAsDoneAction.mock.calls).toHaveLength(1);
    expect(actions.checkAsDoneAction.mock.calls[0][1]).toEqual({
      id: 1,
      isDone: true
    });
  });
});
