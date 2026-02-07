<template>
  <section id="menu" class="menu">
    <div class="container">
      <header class="section-header">
        <h2 class="section-title">人气甜品</h2>
        <p class="section-subtitle">当日现做，售完即止</p>
      </header>
      <p v-if="loading" class="menu-status">加载中...</p>
      <p v-else-if="error" class="menu-status menu-error">{{ error }}</p>
      <div v-else class="menu-grid">
        <article
          v-for="item in items"
          :key="item.id"
          class="menu-card"
        >
          <div class="menu-card-image" :style="{ background: item.bg }">
            <span class="menu-card-emoji" aria-hidden="true">{{ item.emoji }}</span>
          </div>
          <div class="menu-card-body">
            <h3 class="menu-card-title">{{ item.name }}</h3>
            <p class="menu-card-desc">{{ item.desc }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getMenu } from '@/apis'
import type { MenuItem } from '@/apis'

const items = ref<MenuItem[]>([])
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    items.value = await getMenu()
  } catch (e) {
    error.value = e instanceof Error ? e.message : '加载失败，请稍后重试'
  } finally {
    loading.value = false
  }
})
</script>

<style lang="less" scoped>
@import "../../assets/styles/main.less";

.menu {
  padding: @space-2xl 0;
}

.section-header {
  text-align: center;
  margin-bottom: @space-xl;
}

.menu-status {
  text-align: center;
  color: @text-muted;
  padding: @space-xl 0;
}

.menu-error {
  color: @error-color;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: @space-md;
}

.menu-card {
  background: @bg-card;
  border-radius: @radius-lg;
  overflow: hidden;
  box-shadow: @shadow;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: @shadow-hover;
    transform: translateY(-4px);
  }
}

.menu-card-image {
  aspect-ratio: 4/3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-card-emoji {
  font-size: 64px;
  line-height: 1;
}

.menu-card-body {
  padding: @space-md;
}

.menu-card-title {
  font-size: @font-size-lg;
  font-weight: 600;
  margin: 0 0 @space-xs 0;
  color: @text;
}

.menu-card-desc {
  font-size: @font-size-sm;
  color: @text-muted;
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 640px) {
  .menu-grid {
    grid-template-columns: 1fr;
  }
}
</style>
