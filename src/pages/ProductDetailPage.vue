<template>
  <div class="page">
    <h1>Товар: {{ product.name }}</h1>
    <p>Категория: {{ product.category }}</p>
    <p>Цена: {{ product.price }} ₽</p>
    <p>ID из URL: {{ id }}</p>
    <RouterLink to="/products" class="btn-back">← Назад к списку</RouterLink>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  id: { type: Number, required: true }
})

const products = [
  { id: 1, name: 'Ноутбук', category: 'electronics', price: 75000 },
  { id: 2, name: 'Смартфон', category: 'electronics', price: 35000 },
  { id: 3, name: 'Футболка', category: 'clothing', price: 1500 },
  { id: 4, name: 'Джинсы', category: 'clothing', price: 4000 }
]

const product = computed(() => products.find(p => p.id === props.id))
</script>

<style scoped>
.btn-back {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  background: #eee;
  color: #333;
  border-radius: 4px;
}
.btn-back:hover { background: #ddd; }
</style>