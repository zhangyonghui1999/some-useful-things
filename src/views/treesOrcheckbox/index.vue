<template>
  <div>
    <el-tree
      :data="data5"
      show-checkbox
      node-key="id"
      :expand-on-click-node="false"
      @node-expand="handleNodeExpand">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button
            type="text"
            size="mini"
            @click="() => append(data)">
            Append
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            Delete
          </el-button>
        </span>
      </span>
    </el-tree>
    <el-date-picker
      v-model="value"
      type="datetime"
      placeholder="永久"
      value-format="yyyy-MM-dd HH:mm:ss.000Z"
      >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data () {
    const data = [{
      id: 1,
      label: '一级 1',
      children: [{
        id: 4,
        label: '二级 1-1',
        children: [{
          id: 9,
          label: '三级 1-1-1'
        }, {
          id: 10,
          label: '三级 1-1-2'
        }]
      }]
    }, {
      id: 2,
      label: '一级 2',
      children: [{
        id: 5,
        label: '二级 2-1'
      }, {
        id: 6,
        label: '二级 2-2'
      }]
    }, {
      id: 3,
      label: '一级 3',
      children: [{
        id: 7,
        label: '二级 3-1'
      }, {
        id: 8,
        label: '二级 3-2'
      }, {
        id: 9,
        label: '二级 3-3'
      }, {
        id: 10,
        label: '二级 3-4'
      }, {
        id: 11,
        label: '二级 3-5'
      }]
    }]
    return {
      value: '2020-01-01 00:00:00.000Z',
      data5: JSON.parse(JSON.stringify(data))
    }
  },
  methods: {
    handleNodeExpand (data, node, nodes) {
      if (node.data.children?.length > 0) {
        for (let i = 0; i < node.data.children.length; i++) {
          if (node.data.children[i].label === '二级 3-2') {
            console.log('length', nodes.$refs.node.childNodes.length)
            nodes.$refs.node.childNodes[nodes.$refs.node.childNodes.length - 1].childNodes[i].style.display = 'none'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">

</style>
