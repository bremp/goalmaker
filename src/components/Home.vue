<template>
  <v-content>
    <goal-list :goals="searchedGoals"></goal-list>
    <goal-add @addGoal="onAddGoal" v-if="showAddButton"></goal-add>
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
  data: () => ({}),
  computed: {
    searchedGoals() {
      const searchFilter = this.$store.state.searchQuery.toLowerCase().trim();
      console.log("searchFilter", searchFilter);
      if (!searchFilter) return this.$store.state.goals;
      return this.$store.state.goals.filter(
        g => g.title.toLowerCase().indexOf(searchFilter) > -1
      );
    },
    showAddButton() {
      return this.$store.state.goals.length < 10;
    }
  },
  methods: {
    onAddGoal(goalData) {
      console.log("Home.vue", goalData);
      const goal = Object.assign({}, goalData);
      console.log("Home.vue> Object.assign", goal);
      this.$store.commit("addGoal", Object.assign({}, goalData));
    }
  }
};
</script>
