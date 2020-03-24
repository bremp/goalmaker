<template>
  <v-container fluid>
    <draggable v-model="goals" @start="drag = true" @end="drag = false">
      <v-row v-for="(goal, i) in goals" :key="i">
        <v-col>
          <v-card
            class="mx-auto"
            :min-width="640"
            :max-width="640"
            :hover="true"
            :ripple="true"
            :disabled="goal.done"
          >
            <v-card-title
              >{{ goal.title }}<v-spacer />
              <v-checkbox v-model="goal.done" :dense="true"></v-checkbox>
            </v-card-title>
            <v-card-text>
              Some description of goal. Should follow smart objectives.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </draggable>
  </v-container>
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
