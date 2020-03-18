<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-item :key="item.text" link>
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
        <span class="hidden-sm-and-down">Goal Maker</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
        v-model="searchInput"
      />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <goal-list v-bind:goals="searchedGoals"></goal-list>
    </v-content>
    <goal-add @addGoal="appendGoal"></goal-add>
  </v-app>
</template>

<script>
import GoalList from "./GoalList";
import GoalAdd from "./GoalAdd";
export default {
  name: "Home",
  components: {
    GoalList,
    GoalAdd
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: false,
    searchInput: "",
    items: [
      { icon: "mdi-contacts", text: "Contacts" },
      { icon: "mdi-history", text: "Frequently contacted" },
      { icon: "mdi-content-copy", text: "Duplicates" }
    ],
    goals: [
      {
        title: "Refine Goal List"
      },
      {
        title: "Refine Goal Add"
      },
      {
        title: "Implement Vuex"
      },
      {
        title: "Search"
      },
      {
        title: "Unit Test"
      },
      {
        title: "Git CI"
      }
    ]
  }),
  computed: {
    searchedGoals() {
      const searchFilter = this.searchInput.toLowerCase().trim();
      if (!searchFilter) return this.goals;
      return this.goals.filter(
        g => g.title.toLowerCase().indexOf(searchFilter) > -1
      );
    }
  },
  methods: {
    appendGoal(goalData) {
      console.log(goalData);
      this.goals.push({
        title: goalData.title
      });
    }
  }
};
</script>
