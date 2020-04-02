<template>
  <div>
    <v-btn
      id="addGoal"
      bottom
      color="pink"
      dark
      fab
      fixed
      right
      @click.native="toggleDialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog :value="showDialog" width="800px">
      <goal-add-form @handleDialogClose="closeDialog"></goal-add-form>
    </v-dialog>
  </div>
</template>

<script>
import GoalAddForm from "./GoalAddForm";

export default {
  name: "GoalAdd",
  components: {
    GoalAddForm
  },
  data() {
    return {
      showDialog: false
    };
  },
  methods: {
    toggleDialog() {
      this.showDialog = !this.showDialog;
    },
    closeDialog() {
      this.showDialog = false;
    }
  }
};
</script>
