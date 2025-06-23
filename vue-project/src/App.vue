<template>
  <div>
    姓名:<input v-model="userName" /> {{ userName }}<br />
    薪水:<input type="number" v-model="salary" />{{ salary }}<br />
    <button v-on:click="addSalary">提交</button>
  </div>
</template>

<!-- 双向绑定 -->
<script lang="ts">
export default {
  data() {
    return {
      userName: "roy",
      salary: 15000,
    };
  },
  methods: {
    addSalary() {
      this.salary += 1000;
    },
  },
};
</script>

<style scoped></style>
