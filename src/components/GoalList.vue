<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-list rounded>
        <!-- <v-subheader>Goals</v-subheader> -->
        <v-list-item-group v-model="item" color="primary">
          <v-list-item v-for="(item, i) in goals" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
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
  props: {
    source: String
  },
  data: () => ({
    items: [
      { icon: "mdi-contacts", text: "Contacts" },
      { icon: "mdi-history", text: "Frequently contacted" },
      { icon: "mdi-content-copy", text: "Duplicates" },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "Labels",
        model: true,
        children: [{ icon: "mdi-plus", text: "Create label" }]
      },
      {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "More",
        model: false,
        children: [
          { text: "Import" },
          { text: "Export" },
          { text: "Print" },
          { text: "Undo changes" },
          { text: "Other contacts" }
        ]
      },
      { icon: "mdi-settings", text: "Settings" },
      { icon: "mdi-message", text: "Send feedback" },
      { icon: "mdi-help-circle", text: "Help" },
      { icon: "mdi-cellphone-link", text: "App downloads" },
      { icon: "mdi-keyboard", text: "Go to the old version" }
    ],
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
