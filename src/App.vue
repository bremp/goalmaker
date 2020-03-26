<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-item :key="item.text" link @click="showComponent(item.text)">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <router-link class="nav-link" to="/">
          <span class="hidden-sm-and-down">Goal Maker</span>
        </router-link>
      </v-toolbar-title>
      <slot>
        <v-text-field
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search"
          class="hidden-sm-and-down"
          v-model="searchInput"
        />
      </slot>
      <v-spacer />
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false,
    searchInput: "",
    items: [
      // { icon: "mdi-contacts", text: "Completed" },
      { icon: "mdi-history", text: "History" }
    ]
  }),
  methods: {
    appendGoal(goalData) {
      console.log(goalData);
      this.goals.push({
        title: goalData.title
      });
    },
    showComponent() {
      this.$router.push("/history");
    }
  }
};
</script>

<style scoped>
.nav-link {
  text-decoration: none;
  color: inherit;
}
</style>
