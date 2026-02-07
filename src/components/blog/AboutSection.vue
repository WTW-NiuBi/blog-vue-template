<template>
  <section class="about section container">
    <SectionHeader
      title="关于我"
      subtitle="前端工程师 / 创意写作者 / 慢跑与咖啡的忠实拥趸"
    />
    <div class="about__body">
      <div class="about__intro">
        <p>
          从 Vue 到 TypeScript，从产品思维到体验设计，我热衷于将复杂问题拆解成优雅的解决方案。
          记录所学、分享见闻，是对自我成长的温柔提醒。
        </p>
        <p>
          除了代码，我也写下旅途的见闻、阅读的感悟，以及那一杯恰到好处的拿铁。希望这些字句，能在屏幕另一侧与你共鸣。
        </p>
      </div>
      <ul class="about__timeline">
        <li
          v-for="item in timeline"
          :key="item.year"
          class="about__timeline-item"
        >
          <span class="about__timeline-year">{{ item.year }}</span>
          <div class="about__timeline-content">
            <h4>{{ item.title }}</h4>
            <p>{{ item.summary }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import SectionHeader from "@/components/common/SectionHeader.vue";
import type { TimelineItem } from "@/types/blog";

defineProps<{
  timeline: TimelineItem[];
}>();
</script>

<style lang="less" scoped>
@import "../../assets/styles/main.less";

.about__body {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: @spacing-xlarge;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
}

.about__intro {
  display: flex;
  flex-direction: column;
  gap: @spacing-base;
  font-size: @font-size-large;
  line-height: 1.65;
  color: @text-color-secondary;
}

.about__timeline {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: @spacing-large * 0.8;
}

.about__timeline-item {
  position: relative;
  padding-left: 26px;

  &::before {
    content: "";
    position: absolute;
    left: 4px;
    top: 4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: @primary-color;
    box-shadow: 0 0 0 4px fade(@primary-color, 20%);
  }

  &::after {
    content: "";
    position: absolute;
    left: 8px;
    top: 20px;
    bottom: -20px;
    width: 2px;
    background: fade(@primary-color, 28%);
  }

  &:last-child::after {
    display: none;
  }
}

.about__timeline-year {
  font-weight: 700;
  color: #1f2333;
  margin-bottom: 6px;
}

.about__timeline-content {
  background: #fff;
  border-radius: 14px;
  padding: (@spacing-base * 0.9);
  box-shadow: 0 10px 24px fade(#4f5bd5, 10%);

  h4 {
    margin-bottom: 4px;
    font-size: 17px;
  }

  p {
    margin: 0;
    line-height: 1.55;
    color: @text-color-secondary;
  }
}
</style>

