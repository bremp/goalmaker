<template>
  <v-content>
    <goal-list :goals="searchedGoals"></goal-list>
    <goal-add v-if="showAddButton"></goal-add>
  </v-content>
</template>

<script>
import GoalList from "./GoalList";
import GoalAdd from "./GoalAdd";
export default {
  name: "Goals",
  components: {
    GoalList,
    GoalAdd
  },
  async created() {
    await this.$store.dispatch("getGoalsAction");
  },
  data: () => ({}),
  computed: {
    searchedGoals() {
      const searchFilter = this.$store.state.searchQuery.toLowerCase().trim();
      if (!searchFilter) return this.$store.state.goals;
      return this.$store.state.goals.filter(
        g => g.title.toLowerCase().indexOf(searchFilter) > -1
      );
    },
    showAddButton() {
      return this.$store.state.goals.length < 10;
    }
  },
  methods: {}
};
</script>
