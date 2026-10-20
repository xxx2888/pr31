<template>
  <div class="page">
    <h1>Главная</h1>
    <nav>
      <RouterLink to="/products" class="nav-link">Список товаров</RouterLink> |
      <RouterLink to="/login" class="nav-link">Войти</RouterLink> |
      <RouterLink to="/dashboard" class="nav-link">Панель управления</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.nav-link {
  margin-right: 1rem;
  text-decoration: none;
  color: #42b983;
  font-weight: 600;
}
.nav-link:hover { text-decoration: underline; }
</style>