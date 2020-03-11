<template>
  <div>
    <h1>Goals</h1>
    <ul>
      <li v-for="goal in goals" :key="goal">{{ goal.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
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
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
