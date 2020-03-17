<template>
  <v-row>
    <v-list rounded width="100%">
      <v-list-item-group v-model="goal" color="primary" align="start">
        <draggable v-model="goals" @start="drag = true" @end="drag = false">
          <v-list-item v-for="(goal, i) in goals" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="goal.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </draggable>
      </v-list-item-group>
    </v-list>
  </v-row>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "GoalList",
  props: ["goals"],
  components: {
    draggable
  }
};
</script>
