<template>
  <v-container class="d-flex justify-center align-center fill-height">
    <v-card class="pa-6" max-width="600" width="100%">
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="onLogin">
          <v-text-field
            v-model="email"
            label="이메일"
            type="email"
            prepend-inner-icon="mdi-email"
            required
          />
          <v-text-field
            v-model="password"
            label="비밀번호"
            type="password"
            prepend-inner-icon="mdi-lock"
            required
          />
          <v-btn
            type="submit"
            color="primary"
            class="mt-4"
            block
          >
            <v-icon left>mdi-login</v-icon>
            로그인
          </v-btn>
        </v-form>
      </v-card-text>

    </v-card>
  </v-container>
</template>


<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

function onLogin() {
  // 여기에 로그인 로직을 구현하세요
  alert(`이메일: ${email.value}\n비밀번호: ${password.value}`)
}
</script>

<style scoped>

</style>
