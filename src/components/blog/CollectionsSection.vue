<template>
  <section class="collections section container">
    <SectionHeader
      title="主题拾光"
      subtitle="将灵感与思考收藏成册，随时翻阅"
    />
    <div class="collections__list">
      <div
        v-for="item in collections"
        :key="item.title"
        class="collections__item"
      >
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <div class="collections__meta">
          <span>{{ item.posts }} 篇文章</span>
          <span>{{ item.updated }} 更新</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import SectionHeader from "@/components/common/SectionHeader.vue";
import type { CollectionItem } from "@/types/blog";

defineProps<{
  collections: CollectionItem[];
}>();
</script>

<style lang="less" scoped>
@import "../../assets/styles/main.less";

.collections__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: @spacing-large;
}

.collections__item {
  background: #fff;
  border-radius: 16px;
  padding: (@spacing-large * 0.9);
  display: flex;
  flex-direction: column;
  gap: @spacing-base;
  box-shadow: 0 12px 30px fade(#3e4bdd, 12%);
  border: 1px solid fade(#3e4bdd, 16%);

  h3 {
    font-size: 19px;
    color: #202236;
  }

  p {
    color: @text-color-secondary;
    line-height: 1.6;
    flex: 1 1 auto;
  }
}

.collections__meta {
  display: flex;
  justify-content: space-between;
  color: lighten(@text-color-secondary, 6%);
  font-size: @font-size-small;
}
</style>

