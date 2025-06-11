**결론 요약**
현재 코드에서는 `drawer` 상태가 정의되지 않아 `@click.stop="drawer = !drawer"`가 작동하지 않습니다.
`<v-navigation-drawer>`에 `v-model="drawer"`를 연결하고, `script setup`에 `ref`로 `drawer` 상태를 선언해야 합니다.

---

## ✅ 작동 방식 설명

Vuetify의 `<v-navigation-drawer>`는 `v-model`을 통해 열림/닫힘 상태를 제어합니다.
`v-model="drawer"`와 같이 바인딩하면 `drawer = true/false`로 상태를 조작할 수 있습니다.

---

## ✨ 수정된 예제 코드

```vue
<template>
  <v-layout class="rounded rounded-md border">
    <!-- App Bar -->
    <v-app-bar color="primary">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
    </v-app-bar>

    <!-- Drawer: v-model 바인딩 필요 -->
    <v-navigation-drawer v-model="drawer">
      <v-list nav>
        <v-list-item link>item 1</v-list-item>
        <v-list-item link>item 2</v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main class="d-flex align-center justify-center" height="300">
      <v-container>
        <v-sheet
          border="dashed md"
          color="surface-light"
          height="200"
          rounded="lg"
          width="100%"
        />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup>
import { ref } from 'vue'

// 상태 변수 선언
const drawer = ref(false)
</script>
```

---

## 📌 정리

| 요소                 | 설명                      |
| ------------------ | ----------------------- |
| `v-model="drawer"` | Drawer 열림/닫힘 상태 연결      |
| `drawer = !drawer` | 버튼 클릭 시 상태 반전 (열림 ↔ 닫힘) |
| `ref(false)`       | 초기에는 Drawer 닫힘 상태       |

---

필요하면 **좌우 위치, 오버레이 모드, 고정 Drawer** 같은 설정도 도와드릴 수 있습니다.
