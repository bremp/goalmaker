<template>
  <v-row>
    <v-list rounded width="100%" v-sortable>
      <!-- <v-subheader>Goals</v-subheader> -->
      <v-list-item-group v-model="goal" color="primary" align="start">
        <v-list-item v-for="(goal, i) in goals" :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="goal.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-row>
</template>

<script>
export default {
  name: "GoalList",
  props: ["goals"]
};
</script>
