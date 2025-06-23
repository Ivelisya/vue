<template>
  <div>
    姓名: <input v-model="userName" /> {{ userName }}<br />
    薪水: <input type="number" v-model="salary" /> {{ salary }}<br />
    <button v-on:click="addSalary">提交</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const userName = ref("roy");
const salary = ref(15000);
const addSalary = () => {
  salary.value += 1000;
};
</script>

<style scoped>
.userInfo {
  background-color: aqua;
  width: 80%;
  padding: 10px;
}

.userInfo span {
  background-color: yellow;
  margin-left: 10px;
  padding: 5px;
  border-radius: 5px;
}
</style>
