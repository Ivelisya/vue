import {ref} from "vue";
export default function(){
  const userName = ref('toy')
  const salary = ref(150000)
  function addSalary(){
    salary.value += 1000
    console.log(salary)
  }
  return {userName,salary,addSalary}
}
