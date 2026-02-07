<template>
  <div class="app">
    <header class="header" :class="{ scrolled: isScrolled }">
      <div class="container header-inner">
        <a href="#" class="logo" @click.prevent="scrollTo('#hero')">33甜品店</a>
        <nav class="nav">
          <a href="#menu" @click.prevent="scrollTo('#menu')">甜品</a>
          <a href="#about" @click.prevent="scrollTo('#about')">关于</a>
          <a href="#contact" @click.prevent="scrollTo('#contact')">联系</a>
        </nav>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer class="footer">
      <div class="container">
        <p class="footer-text">© {{ new Date().getFullYear() }} 33甜品店</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

function scrollTo(selector: string) {
  const el = document.querySelector(selector)
  el?.scrollIntoView({ behavior: 'smooth' })
}

function onScroll() {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style lang="less" scoped>
@import "./assets/styles/main.less";

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: @space-sm 0;
  transition: background 0.3s ease, box-shadow 0.3s ease;

  &.scrolled {
    background: rgba(250, 249, 247, 0.95);
    backdrop-filter: blur(12px);
    box-shadow: 0 1px 0 @border;
  }
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: @font-size-xl;
  font-weight: 700;
  color: @text;
  text-decoration: none;
  letter-spacing: -0.03em;

  &:hover {
    color: @primary;
  }
}

.nav {
  display: flex;
  gap: @space-lg;

  a {
    font-size: @font-size-sm;
    font-weight: 500;
    color: @text-muted;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: @primary;
    }
  }
}

main {
  flex: 1;
}

.footer {
  padding: @space-lg 0;
  border-top: 1px solid @border;
  text-align: center;
}

.footer-text {
  margin: 0;
  font-size: @font-size-xs;
  color: @text-muted;
}

@media (max-width: 640px) {
  .nav {
    gap: @space-md;
  }
}
</style>
