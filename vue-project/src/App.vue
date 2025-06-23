<template>
  <div>
    姓名: <input v-model="userName" /> {{ userName }}<br />
    薪水: <input type="number" v-model="salary" /> {{ salary }}<br />
    <button @click="addSalary">提交</button>
    <button @click="changeShowUserInfo">查看个人信息</button>
    <hr />
    <div class="userInfo" v-show="showUserInfo">
      <h2>个人信息</h2>
      <p>年龄: <input type="number" v-model="userInfo.age" /></p>
      <p>
        性别:
        <input type="radio" value="1" v-model="userInfo.sex" />男
        <input type="radio" value="2" v-model="userInfo.sex" />女
      </p>

      <p>
        岗位:
        <select v-model="userInfo.department">
          <option value="dev">开发</option>
          <option value="test">测试</option>
          <option value="maintain">运维</option>
        </select>
      </p>
      <p>
        技术:
        <span v-for="skill in userInfo.skills" :key="skill">{{ skill }}</span>
      </p>
      <p>
        新技术: <input v-model="newSkill" />
        <button @click="learnNewSkill">学习新技术</button>
      </p>
      <p>个人信息汇总：{{ userInfo }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const userName = ref("roy");
    const salary = ref(15000);
    const userInfo = ref({
      age: 0,
      sex: 1,
      department: "",
      skills: ["java", "python"],
    });
    const newSkill = ref("");
    const showUserInfo = ref(true); // 添加 showUserInfo ref

    const addSalary = () => {
      salary.value += 1000;
    };

    const learnNewSkill = () => {
      if (newSkill.value) {
        userInfo.value.skills.push(newSkill.value);
        newSkill.value = ""; // 清空输入框
      }
    };

    const changeShowUserInfo = () => {
      showUserInfo.value = !showUserInfo.value; // 切换 showUserInfo 的值
    };

    return {
      userName,
      salary,
      userInfo,
      newSkill,
      showUserInfo, // 暴露 showUserInfo
      addSalary,
      learnNewSkill,
      changeShowUserInfo, // 暴露 changeShowUserInfo
    };
  },
});
</script>

<style scoped>
.userInfo {
  background-color: aqua;
  width: 80%;
  padding: 10px; /* 增加内边距，使内容不紧贴边缘 */
}

.userInfo span {
  background-color: yellow;
  margin-left: 10px;
  padding: 5px; /* 增加内边距，使技能标签更美观 */
  border-radius: 5px; /* 增加圆角 */
}
</style>
