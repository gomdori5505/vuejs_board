<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>
      <CurrentDateTime />
    </v-system-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="grey lighten-4"
        class="pa-4"
      >
        <v-avatar
          class="mb-4"
          color="grey darken-1"
          size="64"
        ></v-avatar>

        <div>Anonymous</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          router :to='{
            name: item.urlName
          }'
          exact
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  import CurrentDateTime from './components/currentDateTime'
  export default {
    components: {
      CurrentDateTime
    },
    data: () => ({
      drawer: null,
      items: [
          { title: 'Board', urlName: 'list', icon: 'mdi-format-list-bulleted' },
          { title: 'Write', urlName: 'create', icon: 'mdi-pencil' }
      ],
    })
  }
</script>