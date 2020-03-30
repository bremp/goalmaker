<template>
  <v-content>
    <goal-list :goals="searchedGoals"></goal-list>
    <goal-add v-if="showAddButton"></goal-add>
  </v-content>
</template>

<script>
import GoalList from "./GoalList";
import GoalAdd from "./GoalAdd";
import { mapActions, mapState } from "vuex";

export default {
  name: "Goals",
  components: {
    GoalList,
    GoalAdd
  },
  async created() {
    await this.getGoalsAction();
  },
  computed: {
    ...mapState(["goals", "searchQuery"]),
    searchedGoals() {
      const searchFilter = this.searchQuery.toLowerCase().trim();
      if (!searchFilter) return this.goals;
      return this.goals.filter(
        g => g.title.toLowerCase().indexOf(searchFilter) > -1
      );
    },
    showAddButton() {
      return this.goals.length < 10;
    }
  },
  methods: {
    ...mapActions(["getGoalsAction"])
  }
};
</script>
