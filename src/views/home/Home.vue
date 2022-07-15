<script setup lang="ts">
import { ref } from "vue";

const ID_ENUM = {
  FIRST: "#first-trap",
  SECOND: "#second-trap",
};
const containerId = ref("body");
const chasing = () => {
  containerId.value =
    containerId.value === ID_ENUM.FIRST ? ID_ENUM.SECOND : ID_ENUM.FIRST;
};
</script>

<template>
  <!-- <div class="wrapper"> -->
  <FirstTrap />
  <SecondTrap />

  <div class="interact">
    <button @click="chasing" class="interact-btn">Chasing</button>
  </div>
  <!-- </div> -->

  <Seeker :container="containerId" />
</template>

<style scoped>
.interact {
  margin-top: 24px;
  text-align: center;
}
.interact-btn {
  width: 100px;
  border: none;
  box-shadow: 0 0 1px 1px #dddfe5 inset;
  border-radius: 4px;
  height: 28px;
  padding: 0 8px;
}
</style>
