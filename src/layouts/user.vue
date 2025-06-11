<template>
  <v-app>
    <v-app-bar color="primary">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
      <v-app-bar-title>User Home</v-app-bar-title>
      <v-btn icon="mdi-shield-account" to="/admin-home"></v-btn>
    </v-app-bar>

    <!-- Drawer: v-model 바인딩 필요 -->
    <v-navigation-drawer v-model="drawer">
      <v-list nav>
        <v-list-item to="/user-profile" link>User Profile</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <slot/>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
</script>

