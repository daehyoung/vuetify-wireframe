<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar color="primary">
      <v-btn icon="mdi-home" to="/user"></v-btn>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
      <v-app-bar-title>User Home</v-app-bar-title>

      <v-tabs>
        <v-tab
          v-for="(tab, i) in tabs"
          :key="`tab-${i}`"
        >
          {{ tab.label }}
        </v-tab>
      </v-tabs>

      <v-spacer />
      <v-btn icon="mdi-shield-account" to="/admin" class="ml-auto"></v-btn>
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

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>

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
    title: 'Profile',
    to: '/user/profile',
  },
  {
    title: 'About',
    to: '/user/about',
  }
]

const tabs = [
  { label: 'Default' },
  { label: 'Grow' },
  { label: 'Shift' },
]
</script>
