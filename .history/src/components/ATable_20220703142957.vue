<template>
  <div>
    <A-Table :columns="columns" showIndex>
      <template v-slot:operation="slot">
        <el-button type="primary" @click="jump(slot.data)">编辑</el-button>
      </template>
    </A-Table>
  </div>
</template>

<script>
export default {
  name: "ATable",
  components: {
    "A-Table": () => import("@/components/table/Table.vue")
  },
  data() {
    return {
      columns: [
        {
          type: "function",
          props: "date",
          labels: "Url地址",
          callback: data => {
            console.log(data);
            return `<a href="http://www.baidu.com">${data.name}</a>`
          }
        },
        // {
        //   labels: "日期",
        //   props: "date",
        //   width: 500
        // },
        {
          labels: "姓名",
          props: "name"
        },
        {
          labels: "地址",
          props: "address"
        },
        {
          labels: "性别",
          props: "sex"
        },
        {
          type:"slot",
          labels:"操作",
          props:"operation",
          slot_name:"operation"
        }
      ]
    };
  },

  mounted() {},

  methods: {
    jump(data){
      console.log("data====",data);
    }
  }
};
</script>

<style lang="scss" scoped></style>
