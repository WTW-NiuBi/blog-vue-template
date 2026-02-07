<template>
  <section id="about" class="about">
    <div class="container about-inner">
      <p v-if="loading" class="about-status">加载中...</p>
      <template v-else-if="data">
        <div class="about-content">
          <h2 class="section-title">{{ data.title }}</h2>
          <p class="section-subtitle">{{ data.subtitle }}</p>
          <p v-for="(p, i) in data.paragraphs" :key="i" class="about-text">{{ p }}</p>
        </div>
        <div class="about-visual">
          <img
            :src="data.imageUrl"
            :alt="data.imageAlt"
            class="about-visual-img"
            loading="lazy"
          />
        </div>
      </template>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getAbout } from '@/apis'
import type { AboutData } from '@/apis'

const data = ref<AboutData | null>(null)
const loading = ref(true)

onMounted(async () => {
  try {
    data.value = await getAbout()
  } finally {
    loading.value = false
  }
})
</script>

<style lang="less" scoped>
@import "../../assets/styles/main.less";

.about {
  padding: @space-2xl 0;
  background: @bg-card;
}

.about-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: @space-xl;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
}

.about-content {
  .section-title {
    margin-bottom: @space-xs;
  }

  .section-subtitle {
    margin-bottom: @space-md;
  }
}

.about-text {
  font-size: @font-size-base;
  color: @text-muted;
  line-height: 1.75;
  margin: 0 0 @space-sm 0;

  &:last-of-type {
    margin-bottom: 0;
  }
}

.about-status {
  text-align: center;
  color: @text-muted;
  padding: @space-xl 0;
}

.about-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-visual-img {
  width: 100%;
  max-width: 320px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: @radius-lg;
  box-shadow: @shadow;
}

@media (max-width: 768px) {
  .about-inner {
    grid-template-columns: 1fr;
    gap: @space-lg;
  }

  .about-visual-img {
    max-width: 240px;
  }
}
</style>
