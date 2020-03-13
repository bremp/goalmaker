<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-list rounded>
        <!-- <v-subheader>Goals</v-subheader> -->
        <v-list-item-group v-model="goal" color="primary">
          <v-list-item v-for="(goal, i) in goals" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="goal.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "GoalList",
  data: () => ({
    goals: [
      {
        title: "Vuetify UI."
      },
      {
        title: "Create Goal List Component"
      },
      {
        title: "Create GoalAdd Component"
      }
    ]
  })
};
</script>
