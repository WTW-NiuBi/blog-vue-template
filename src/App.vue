<template>
  <div class="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less">
@import "./assets/styles/main.less";

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @text-color;
  margin-top: @spacing-xlarge * 2;
}

nav {
  padding: @spacing-large;
  
  a {
    font-weight: bold;
    color: @text-color;
    text-decoration: none;
    margin: 0 @spacing-small;
    transition: color 0.3s;
    
    &.router-link-exact-active {
      color: @primary-color;
    }
  }
}
</style>