<template>
  <div class="page">
    <h1>Товары</h1>
    
    <div class="filters">
      <button :class="{ active: filter === 'all' }" @click="setFilter('all')">Все</button>
      <button :class="{ active: filter === 'electronics' }" @click="setFilter('electronics')">Электроника</button>
      <button :class="{ active: filter === 'clothing' }" @click="setFilter('clothing')">Одежда</button>
    </div>

    <ul class="product-list">
      <li v-for="product in filteredProducts" :key="product.id" class="product-item">
        <RouterLink :to="{ name: 'ProductDetail', params: { id: product.id } }" class="product-link">
          <strong>{{ product.name }}</strong> — {{ product.category }} ({{ product.price }} ₽)
        </RouterLink>
      </li>
    </ul>

    <p v-if="filteredProducts.length === 0">Нет товаров по выбранному фильтру.</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const filter = ref(route.query.filter || 'all')

const products = ref([
  { id: 1, name: 'Ноутбук', category: 'electronics', price: 75000 },
  { id: 2, name: 'Смартфон', category: 'electronics', price: 35000 },
  { id: 3, name: 'Футболка', category: 'clothing', price: 1500 },
  { id: 4, name: 'Джинсы', category: 'clothing', price: 4000 }
])

const filteredProducts = computed(() => {
  if (filter.value === 'all') return products.value
  return products.value.filter(p => p.category === filter.value)
})

const setFilter = (value) => {
  filter.value = value
  router.push({ name: 'Products', query: { filter: value } })
}
</script>

<style scoped>
.filters button {
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
}
.filters button.active {
  background: #42b983;
  color: white;
  border-color: #42b983;
}
.product-list { list-style: none; padding: 0; }
.product-item { margin-bottom: 0.5rem; }
.product-link { text-decoration: none; color: #333; }
.product-link:hover { color: #42b983; }
</style>