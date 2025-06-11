<template>
  <v-app>
    <!-- App Bar -->
    <v-app-bar color="secondary">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
      <v-app-bar-title>Admin Home</v-app-bar-title>
      <v-btn icon="mdi-home" to="/user-home"></v-btn>
    </v-app-bar>

    <!-- Drawer: v-model 바인딩 필요 -->
    <v-navigation-drawer v-model="drawer">
      <v-list nav>
        <v-list-item to="/codes" link>Codes</v-list-item>
        <v-list-item to="/users" link>Users</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
</script>
