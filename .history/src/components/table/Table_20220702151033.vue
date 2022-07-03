<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <!-- 索引 -->
      <el-table-column v-if="showIndex" type="index" width="50"> </el-table-column>
      <!-- 复选框 -->
      <el-table-column v-if="checkbox" type="selection" width="55">
      </el-table-column>
      <el-table-column
        v-for="item in columns"
        :key="item.props"
        :prop="item.props"
        :label="item.labels"
        :width="item.width"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "table1",
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    checkbox: {
      type: Boolean,
      default: false
    },
    showIndex:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "女",
          width:500
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="scss" scoped></style>
