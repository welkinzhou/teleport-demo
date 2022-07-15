<template>
  <Teleport :to="props.container">
    <div class="seeker-wrapper">
      <span>Catch me if you can.</span>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
/**
 * Seeker
 * author welkin
 */

const props = defineProps({
  container: {
    type: String,
    default: "body",
  },
});
</script>
<style lang="scss" scoped>
.seeker-wrapper {
  width: 200px;
  height: 80px;
  text-align: center;
  padding: auto;
  background-color: aliceblue;
  position: absolute;
  top: 4px;
  right: 4px;
}
</style>
