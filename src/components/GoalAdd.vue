<template>
  <div>
    <v-btn bottom color="pink" dark fab fixed right @click="dialog = !dialog">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
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
                  prepend-icon="mdi-mail"
                  placeholder="Title"
                  v-model="goalData.title"
                  :rules="titleRules"
                  :counter="100"
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  prepend-icon="mdi-text"
                  placeholder="Description"
                  v-model="goalData.description"
                />
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-spacer />
            <v-btn text color="primary" @click="dialog = false">Cancel</v-btn>
            <v-btn text @click="onAddGoalClick(goalData)" :disabled="!valid"
              >Save</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "GoalAdd",
  data() {
    return {
      dialog: false,
      valid: true,
      lazy: false,
      titleRules: [
        v => !!v || "Title is required",
        v => (v && v.length <= 100) || "Title must be less than 100 characters"
      ],
      goalData: {
        title: "",
        description: ""
      }
    };
  },
  methods: {
    onAddGoalClick(goal) {
      const isValid = this.$refs.form.validate();
      if (isValid) {
        this.addGoal(goal);
        this.dialog = false;
        this.$refs.form.reset();
      }
    },
    async addGoal(goal) {
      console.log("GoalAdd.vue", Object.assign({}, goal));
      await this.$store.dispatch("addGoalAction", Object.assign({}, goal));
    }
  }
};
</script>

<style scoped></style>
