interface TreeNode {
  index: number;
  value: string;
  node: any;
}

interface SourceData {
  id: string;
  name: string;
  children?: SourceData[];
  [key: string]: any;
}
import { Ref } from "vue";

// export function createTreeStore() {
//   const currentNode = reactive<TreeNode>({
//     index: 0,
//     value: "initialize",
//     node: null,
//   });

//   const tree = {
//     install(app: App) {
//         app.provide('CompanyTree',)
//     },
//   };

//   return tree;
// }

export function useInjectTree() {
  const currentNode = reactive<TreeNode>({
    index: 0,
    value: "initialize",
    node: null,
  });

  const sourceData: Ref<SourceData[]> = ref([]);

  // 模拟加载效果
  function initSourceData(url: string) {
    console.log(url, "request start");
    setTimeout(() => {
      sourceData.value = [
        {
          id: "1",
          name: "Ray Dalio",
          children: [
            {
              id: "1-1",
              name: "原则",
            },
          ],
        },
        {
          id: "2",
          name: "Czesław Miłosz",
          children: [
            {
              id: "2-1",
              name: "礼物",
            },
            {
              id: "2-2",
              name: "去森林的远足",
            },
          ],
        },
      ];
    }, 500);
  }

  return {
    currentNode,
    sourceData,
    initSourceData,
  };
}

export function useTree() {
  return inject("tree");
}
