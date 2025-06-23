<template>
  姓名:<input v-model="salaryInfo.userName" /><br />
  薪水:<input type="number" v-model="salaryInfo.salary" /><br />
  {{ salaryInfo }}
</template>
<script lang="ts">
export default {
  name: "SalaryInfo",
};
</script>
<script setup lang="ts">
defineProps(["salaryInfo"]);
</script>
<style scoped></style>
