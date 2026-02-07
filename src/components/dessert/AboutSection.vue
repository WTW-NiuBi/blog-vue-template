<template>
  <section id="about" class="about">
    <div class="container about-inner">
      <div class="about-content">
        <h2 class="section-title">关于33甜品店</h2>
        <p class="section-subtitle">我们相信，好的甜品来自好的食材与耐心</p>
        <p class="about-text">
          33甜品店诞生于对「简单好吃」的坚持。我们每日现做蛋糕、可颂与各式甜点，
          选用优质奶油、鸡蛋与当季水果，不添加多余香精与防腐，让你吃到的每一口都安心。
        </p>
        <p class="about-text">
          无论是早晨的一块可颂，还是下午的一角戚风，希望33甜品店能成为你日常里的小小确幸。
        </p>
      </div>
      <div class="about-visual">
        <img
          :src="aboutImageSrc"
          alt="33甜品店手作甜品"
          class="about-visual-img"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// 可替换为本地图片：将图片放到 public 目录后改为 '/about-visual.jpg'
const aboutImageSrc =
  'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=640&q=85&fit=crop'
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
