<template>
  <section id="featured" class="featured section container">
    <SectionHeader title="精选文章" subtitle="沉淀的文字，真实的思考" />
    <div class="featured__grid">
      <article
        v-for="post in posts"
        :key="post.title"
        class="featured__card"
      >
        <div class="featured__meta">
          <span class="featured__date">{{ post.date }}</span>
          <span class="featured__time">{{ post.readingTime }}</span>
        </div>
        <h3 class="featured__title">{{ post.title }}</h3>
        <p class="featured__excerpt">{{ post.description }}</p>
        <ul class="featured__tags">
          <li v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</li>
        </ul>
        <button class="featured__cta">阅读全文</button>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
import SectionHeader from "@/components/common/SectionHeader.vue";
import type { FeaturedPost } from "@/types/blog";

defineProps<{
  posts: FeaturedPost[];
}>();
</script>

<style lang="less" scoped>
@import "../../assets/styles/main.less";

.featured__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: @spacing-xlarge;
}

.featured__card {
  background: linear-gradient(135deg, #ffffff 0%, #f6f8ff 100%);
  border-radius: 18px;
  padding: (@spacing-large * 0.9);
  display: flex;
  flex-direction: column;
  gap: @spacing-base;
  box-shadow: 0 10px 26px fade(#4f5bd5, 14%);
  border: 1px solid fade(#4f5bd5, 18%);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 36px fade(#4f5bd5, 18%);
  }
}

.featured__meta {
  display: flex;
  gap: @spacing-small;
  font-size: @font-size-small;
  color: lighten(@text-color-secondary, 6%);
  letter-spacing: 0.02em;
}

.featured__title {
  font-size: 20px;
  line-height: 1.45;
  color: #202236;
}

.featured__excerpt {
  color: @text-color-secondary;
  line-height: 1.6;
  flex: 1 1 auto;
}

.featured__tags {
  display: flex;
  flex-wrap: wrap;
  gap: @spacing-small;
  list-style: none;
  padding: 0;
  margin: 0;
}

.tag {
  padding: 4px 12px;
  border-radius: 999px;
  background: fade(@primary-color, 14%);
  color: @primary-color;
  font-size: @font-size-small;
}

.featured__cta {
  align-self: flex-start;
  padding: 8px 16px;
  border-radius: 12px;
  border: none;
  background: #21253b;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.25s ease;

  &:hover {
    background: lighten(#21253b, 5%);
  }
}
</style>

