<template>
  <Teleport :to="injectRoot">
    <div class="tree-wrapper">
      <el-tree
        :props="props"
        :data="sourceData"
        show-checkbox
        @check-change="handleCheckChange"
      />
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
/**
 * Tree
 * author welkin
 */
import { ElTree } from "element-plus";
import { useInjectTree } from "./useInjectTree";

interface Tree {
  name: string;
}

const props = {
  label: "name",
  children: "children",
};

const injectRoot = ref("body");

const { currentNode, sourceData, initSourceData } = useInjectTree();

initSourceData("test");

const handleCheckChange = (
  data: Tree,
  checked: boolean,
  indeterminate: boolean
) => {
  console.log(data, checked, indeterminate);
};
</script>
<style lang="scss" scoped>
.tree-wrapper {
  position: relative;
}
</style>
