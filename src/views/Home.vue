<template>
  <div class="home">
    <div v-if="loading" class="loading">加载中...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <template v-else-if="data">
      <HeroSection :stats="data.statHighlights" />
      <FeaturedPosts :posts="data.featuredPosts" />
      <AboutSection :timeline="data.timeline" />
      <CollectionsSection :collections="data.collections" />
    </template>
    <NewsletterSection />
  </div>
</template>

<script lang="ts" setup>
import HeroSection from "@/components/blog/HeroSection.vue";
import FeaturedPosts from "@/components/blog/FeaturedPosts.vue";
import AboutSection from "@/components/blog/AboutSection.vue";
import CollectionsSection from "@/components/blog/CollectionsSection.vue";
import NewsletterSection from "@/components/blog/NewsletterSection.vue";
import { useBlogData } from "@/hooks/useBlogData";

const { data, loading, error } = useBlogData();
</script>

<style lang="less" scoped>
@import "../assets/styles/main.less";

.home {
  background: linear-gradient(160deg, #fdfdfd 0%, #f5f7fc 30%, #fdfdfd 100%);
  color: @text-color;
}

.container {
  max-width: 1040px;
  padding: 0 @spacing-large;
  margin: 0 auto;
}

.section {
  padding: (@spacing-xlarge * 1.2) 0;
}

.loading,
.error {
  text-align: center;
  padding: @spacing-xlarge;
  color: @text-color-secondary;
}

.error {
  color: @error-color;
}

@media (max-width: 720px) {
  .section {
    padding: (@spacing-large * 1.2) 0;
  }
}
</style>
