<template>
  <input v-modal="newTodo" placeholder="Neues Todo">
  <button @click="addTodo">Hinzufügen</button>
  <p>offen: {{ openCount}}</p>
  <ul>
    <ToDoItem/>
  </ul>
</template>

<script setup lang="ts">
import TodoItem from './components/TodoItem.vue';
import { ref, reactive} from 'vue'

const newTodo = ref('')
const todo = reactive([])
const openCount = reactive([{id:2, text: 'aufgabe1', done:false}])

function addTodo() {
  // if (newTodo.value.trim() !== "") return
  todo.push({ id: 1, text: newTodo.value, done: false})
  newTodo.value = ''
}
</script>