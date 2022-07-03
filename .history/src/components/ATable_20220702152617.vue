<template>
  <div>
    <A-Table :columns="columns" showIndex></A-Table>
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
          label: "Url地址",
          callback: () => {
            return 11;
          }
        },
        {
          labels: "日期",
          props: "date",
          width: 500
        },
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
        }
      ]
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="scss" scoped></style>
