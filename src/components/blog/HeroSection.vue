<template>
  <section class="hero section container">
    <div class="hero__content">
      <p class="hero__eyebrow">写作的脚步从未停歇</p>
      <h1 class="hero__title">记录灵感、技术与生活的温度</h1>
      <p class="hero__subtitle">
        在这里，我以文字梳理前端世界的脉络，也在忙碌生活中捕捉片刻安宁。
        欢迎你与我一起驻足、深思、畅谈。
      </p>
      <div class="hero__actions">
        <router-link class="btn btn-primary" to="/about">认识作者</router-link>
        <a class="btn btn-text" href="#featured">浏览精选</a>
      </div>
    </div>
    <div class="hero__card">
      <div v-for="stat in stats" :key="stat.label" class="hero__highlight">
        <div class="hero__highlight-value">{{ stat.value }}</div>
        <div class="hero__highlight-label">{{ stat.label }}</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { StatHighlight } from "@/types/blog";

defineProps<{
  stats: StatHighlight[];
}>();
</script>

<style lang="less" scoped>
@import "../../assets/styles/main.less";

.hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: @spacing-xlarge;
  align-items: center;
  padding-top: @spacing-xlarge * 1.5;
}

.hero__content {
  display: flex;
  flex-direction: column;
  gap: @spacing-base;
}

.hero__eyebrow {
  color: @primary-color;
  letter-spacing: 0.18em;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: @spacing-small / 2;
}

.hero__title {
  font-size: 36px;
  line-height: 1.2;
  font-weight: 700;
  color: #1c1e32;
}

.hero__subtitle {
  font-size: @font-size-large;
  line-height: 1.6;
  color: @text-color-secondary;
}

.hero__actions {
  display: inline-flex;
  gap: @spacing-base;
  flex-wrap: wrap;
}

.btn {
  padding: 10px 22px;
  border-radius: 40px;
  font-size: @font-size-large;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
  text-decoration: none;
  display: inline-block;

  &.btn-primary {
    background: @primary-color;
    color: #fff;
    box-shadow: 0 8px 20px fade(@primary-color, 28%);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 26px fade(@primary-color, 34%);
    }
  }

  &.btn-text {
    background: transparent;
    color: @primary-color;
    border: 1px solid fade(@primary-color, 35%);

    &:hover {
      transform: translateY(-2px);
      border-color: @primary-color;
      background: fade(@primary-color, 12%);
    }
  }
}

.hero__card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: @spacing-base;
  padding: @spacing-large;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 16px 36px fade(#4c5cd7, 14%);
}

.hero__highlight {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hero__highlight-value {
  font-size: 24px;
  font-weight: 700;
  color: #202236;
}

.hero__highlight-label {
  color: @text-color-secondary;
  font-size: @font-size-base;
}

@media (max-width: 720px) {
  .hero__title {
    font-size: 30px;
  }
}
</style>

