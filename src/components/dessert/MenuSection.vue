<template>
  <section id="menu" class="menu">
    <div class="container">
      <header class="section-header">
        <h2 class="section-title">人气甜品</h2>
        <p class="section-subtitle">当日现做，售完即止</p>
      </header>
      <div class="menu-grid">
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
interface MenuItem {
  id: string
  name: string
  desc: string
  emoji: string
  bg: string
}

const items: MenuItem[] = [
  { id: '1', name: '戚风蛋糕', desc: '轻盈蓬松，蛋香与奶香平衡', emoji: '🍰', bg: 'linear-gradient(135deg, #fce4c8 0%, #f5d5b8 100%)' },
  { id: '2', name: '可颂', desc: '酥脆外皮，内里柔软', emoji: '🥐', bg: 'linear-gradient(135deg, #e8d5c4 0%, #ddc9b8 100%)' },
  { id: '3', name: '马卡龙', desc: '法式杏仁饼，多种口味', emoji: '🍬', bg: 'linear-gradient(135deg, #f0dde0 0%, #e8d0d5 100%)' },
  { id: '4', name: '提拉米苏', desc: '马斯卡彭与咖啡的经典组合', emoji: '☕', bg: 'linear-gradient(135deg, #d4c4b0 0%, #c9b89e 100%)' },
  { id: '5', name: '草莓塔', desc: '当季鲜果与香草卡仕达', emoji: '🍓', bg: 'linear-gradient(135deg, #f8e0e0 0%, #f0d4d4 100%)' },
  { id: '6', name: '布朗尼', desc: '浓郁巧克力，外脆内软', emoji: '🍫', bg: 'linear-gradient(135deg, #c9b8a8 0%, #b8a898 100%)' }
]
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
