<template>
  <section id="hero" class="hero">
    <div class="hero-bg" />
    <div class="container hero-inner">
      <template v-if="loading">加载中...</template>
      <template v-else-if="data">
        <p class="hero-tagline">{{ data.tagline }}</p>
        <h1 class="hero-title">{{ data.title }}</h1>
        <p class="hero-desc">{{ data.desc }}</p>
        <a href="#menu" class="btn btn-primary" @click.prevent="scrollToMenuRef">{{ data.buttonText }}</a>
      </template>
    </div>
    <div v-if="data" class="hero-scroll" aria-hidden="true">
      <span>{{ data.scrollText }}</span>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import { getHero } from '@/apis'
import type { HeroData } from '@/apis'

const props = defineProps<{
  menuSectionRef: ComponentPublicInstance | null
}>()

const data = ref<HeroData | null>(null)
const loading = ref(true)

onMounted(async () => {
  try {
    data.value = await getHero()
  } finally {
    loading.value = false
  }
})

function scrollToMenuRef() {
  const el = (props.menuSectionRef as ComponentPublicInstance & { $el?: HTMLElement })?.$el
  el?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/main.less";

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px @space-md @space-2xl;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% 20%, @accent 0%, transparent 50%),
    linear-gradient(180deg, @bg 0%, #f5f2ee 100%);
  pointer-events: none;
}

.hero-inner {
  position: relative;
  text-align: center;
  z-index: 1;
}

.hero-tagline {
  font-size: @font-size-sm;
  font-weight: 500;
  color: @primary;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin: 0 0 @space-sm 0;
}

.hero-title {
  font-size: clamp(48px, 12vw, 88px);
  font-weight: 700;
  letter-spacing: -0.04em;
  color: @text;
  margin: 0 0 @space-md 0;
  line-height: 1.05;
}

.hero-desc {
  font-size: @font-size-lg;
  color: @text-muted;
  max-width: 360px;
  margin: 0 auto @space-xl;
  line-height: 1.6;
}

.hero-scroll {
  position: absolute;
  bottom: @space-lg;
  left: 50%;
  transform: translateX(-50%);
  font-size: @font-size-xs;
  color: @text-muted;
  animation: fadeInUp 1s ease 1.2s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
</style>
