<template>
  <header class="top">
    <div class="top-content">
      <h2>TelePort Cache</h2>
      <div>
        <span
          v-for="item in navList"
          :key="item.path"
          class="nav"
          :class="{ active: $route.fullPath === item.path }"
          @click="navClick(item.path)"
          >{{ item.title }}</span
        >
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
/**
 * Header
 * author welkin
 */

import { ref } from "vue";

const route = useRoute();

const navList = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "Element",
    path: "/element",
  },
];

const router = useRouter();

const navClick = (path: string) => {
  router.push({
    path,
  });
};
</script>
<style lang="scss" scoped>
.top {
  position: fixed;
  width: 100%;
  background-color: #fff;
  &-content {
    height: 50px;
    line-height: 50px;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 16px;
    text-align: center;
    background-image: radial-gradient(transparent 1px, var(--bg-color) 1px);
    background-size: 4px 4px;
    backdrop-filter: saturate(50%) blur(4px);
    border-bottom: 1px solid #f2f2f2;

    display: flex;
    justify-content: space-between;

    .nav {
      padding: 0 4px;
      cursor: pointer;
    }
    .active {
      color: aqua;
    }
  }
}
</style>
