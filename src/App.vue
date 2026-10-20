<template>
  <div class="app-container">
    <h1>Список задач</h1>
    <div class="input-group">
      <input
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="Новая задача..."
        class="task-input"
      />
      <button @click="addTask" class="btn-add">Добавить</button>
    </div>
    <ul class="tasks-list">
      <li
        v-for="(task, index) in tasks"
        :key="task.id"
        class="task-item">
        <span v-if="editingIndex === null || editingIndex !== index">
          {{ task.text }}
        </span>
        <input
          v-else
          v-model="editedText"
          @keyup.enter="saveEdit(index)"
          class="task-edit-input"/>
        <div class="task-actions">
          <button
            v-if="editingIndex !== index"
            @click="startEdit(index, task.text)"
            class="btn-edit">Редактировать</button>
          <button
            @click="deleteTask(index)"
            class="btn-delete">Удалить</button>
          <button
            v-if="editingIndex === index"
            @click="saveEdit(index)"
            class="btn-save">Сохранить</button>
        </div>
      </li>
    </ul>
    <p v-if="tasks.length === 0" class="empty-message">Список пуст</p>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const tasks = ref([])
const newTask = ref('')
const editingIndex = ref(null)
const editedText = ref('')
const generateId = () => Math.random().toString(36).substr(2, 9)
const addTask = () => {
  const text = newTask.value.trim()
  if (!text) return
  tasks.value.push({
    id: generateId(),
    text: text
  })
  newTask.value = ''
}
const startEdit = (index, text) => {
  editingIndex.value = index
  editedText.value = text
}
const saveEdit = (index) => {
  const trimmed = editedText.value.trim()
  if (!trimmed) {
    tasks.value.splice(index, 1)
  } else {
    tasks.value[index].text = trimmed
  }
  editingIndex.value = null
  editedText.value = ''
}
const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}
</script>