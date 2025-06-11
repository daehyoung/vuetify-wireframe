<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar color="secondary">
      <v-btn icon="mdi-home" to="/admin"></v-btn>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
      <v-app-bar-title>Admin Home</v-app-bar-title>


      <v-tabs>
        <v-tab
          v-for="(tab, i) in tabs"
          :key="`tab-${i}`"
          :to="tab.to"
        >
          {{ tab.title }}
        </v-tab>
      </v-tabs>

      <v-spacer />
      <v-btn icon="mdi-logout" to="/logout" class="ml-auto"></v-btn>
      <v-btn icon="mdi-account" to="/user"></v-btn>
    </v-app-bar>

    <!-- Drawer: v-model 바인딩 필요 -->
    <v-navigation-drawer v-model="drawer">
      <v-list nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="`item-${i}`"
          :title="item.title"
          :to="item.to"
          class="text-subtitle-1"
        />
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const items = [
  {
    title: 'Codes',
    to: '/admin/codes',
  },
  {
    title: 'Users',
    to: '/admin/users',
  }
]



const tabs = [
  // {
  //   title: 'User',
  //   to: '/user',
  // }
]
</script>
