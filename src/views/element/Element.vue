<template>
  <div class="element-wrapper">
    <el-card shadow="never" class="card-container">
      <el-popover placement="bottom-end" :width="200" trigger="click">
        <template #reference>
          <el-button @click="pickFirst">Click to show here</el-button>
        </template>
        <template #default>
          <div id="container-one"></div>
        </template>
      </el-popover>
    </el-card>

    <el-card shadow="never" class="card-container">
      <el-popover placement="bottom-end" :width="200" trigger="click">
        <template #reference>
          <el-button @click="pickSecond">Click to show here</el-button>
        </template>
        <template #default>
          <div id="container-two"></div>
        </template>
      </el-popover>
    </el-card>
  </div>

  <Teleport :to="teleportId">
    <span>创建出</span>
  </Teleport>
</template>

<script lang="ts" setup>
/**
 * Element Sample Page
 * author welkin
 */
import { ElButton, ElCard, ElPopover } from "element-plus";

const teleportId = ref("#container-one");

const pickFirst = () => {
  teleportId.value = "#container-one";
};

const pickSecond = () => {
  teleportId.value = "#container-two";
};
</script>
<style lang="scss" scoped>
.element-wrapper {
  background-color: aliceblue;
}
.card-container {
  height: 200px;
  margin-bottom: 12px;
}
</style>
