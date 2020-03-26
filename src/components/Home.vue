<template>
  <v-content>
    <goal-list :goals="searchedGoals"></goal-list>
    <goal-add @addGoal="appendGoal" v-if="showAdd"></goal-add>
  </v-content>
</template>

<script>
import GoalList from "./GoalList";
import GoalAdd from "./GoalAdd";
export default {
  name: "Home",
  components: {
    GoalList,
    GoalAdd
  },
  data: () => ({
    searchInput: "",
    // props: ["goals"],
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
        done: false
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
        done: false
      }
    ]
  }),
  computed: {
    searchedGoals() {
      const searchFilter = this.searchInput.toLowerCase().trim();
      if (!searchFilter) return this.goals;
      return this.goals.filter(
        g => g.title.toLowerCase().indexOf(searchFilter) > -1
      );
    },
    showAdd() {
      return this.goals.length < 10;
    }
  },
  methods: {
    appendGoal(goalData) {
      console.log(goalData);
      this.goals.push({
        title: goalData.title
      });
    }
  }
};
</script>
