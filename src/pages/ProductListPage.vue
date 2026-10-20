<template>
  <div class="page">
    <h1>Товары</h1>
    <ul class="product-list">
      <li v-for="product in products" :key="product.id" class="product-item">
        <strong>{{ product.name }}</strong> — {{ product.category }} ({{ product.price }} ₽)
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
  { id: 1, name: 'Ноутбук', category: 'electronics', price: 75000 },
  { id: 2, name: 'Смартфон', category: 'electronics', price: 35000 },
  { id: 3, name: 'Футболка', category: 'clothing', price: 1500 },
  { id: 4, name: 'Джинсы', category: 'clothing', price: 4000 }
])
</script>

<style scoped>
.product-list { list-style: none; padding: 0; }
.product-item { margin-bottom: 0.5rem; }
</style>