<template>
  <header>
    <nav>
      <router-link to="/" class="logo">Newton's Blog</router-link>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: var(--main-box-shadow);
}
.logo {
  font-size: 1.3rem;
  font-weight: bold;
  padding: 10px 0;
}
</style>