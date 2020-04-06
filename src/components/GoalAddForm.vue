<template>
  <v-form ref="form" v-model="valid" :lazy-validation="lazy">
    <v-card>
      <v-card-title class="grey darken-2">
        Add Goal
      </v-card-title>
      <v-container>
        <v-row class="mx-2">
          <!-- <v-col class="align-center justify-space-between" cols="12">
              <v-row align="center" class="mr-0">
                <v-avatar size="40px" class="mx-3">
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  />
                </v-avatar>
                <v-text-field placeholder="Name" />
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-text-field
                prepend-icon="mdi-account-card-details-outline"
                placeholder="Company"
              />
            </v-col>
            <v-col cols="6">
              <v-text-field placeholder="Job title" />
            </v-col> -->
          <v-col cols="12">
            <v-text-field
              id="title"
              prepend-icon="mdi-mail"
              placeholder="Title"
              v-model="newGoal.title"
              :rules="titleRules"
              :counter="100"
              required
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              id="description"
              prepend-icon="mdi-text"
              placeholder="Description"
              v-model="newGoal.description"
            />
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-spacer />
        <v-btn id="click" text color="primary" @click="onCancelClick"
          >Cancel</v-btn
        >
        <v-btn id="save" text @click="onSaveClick(newGoal)" :disabled="!valid"
          >Save</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "GoalAddForm",
  data() {
    return {
      valid: true,
      lazy: false,
      titleRules: [
        v => !!v || "Title is required",
        v => (v && v.length <= 100) || "Title must be less than 100 characters"
      ],
      newGoal: {
        title: "",
        description: ""
      }
    };
  },
  methods: {
    ...mapActions(["addGoalAction"]),
    onSaveClick(goal) {
      const isValid = this.$refs.form.validate();
      if (isValid) {
        this.addGoal(goal);
        this.$emit("handleDialogClose");
        this.$refs.form.reset();
      }
    },
    async addGoal(goal) {
      await this.addGoalAction(Object.assign({}, goal));
    },
    onCancelClick() {
      this.$emit("handleDialogClose");
    }
  }
};
</script>

<style scoped></style>
