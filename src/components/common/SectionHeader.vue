<template>
  <div class="section__header">
    <h2 class="section__title">{{ title }}</h2>
    <p v-if="subtitle" class="section__subtitle">{{ subtitle }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<style lang="less" scoped>
@import "../../assets/styles/main.less";

.section__header {
  display: flex;
  flex-direction: column;
  gap: @spacing-small / 2;
  margin-bottom: @spacing-large;
  text-align: left;
  max-width: 620px;
}

.section__title {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0.01em;
  color: #202236;
}

.section__subtitle {
  font-size: @font-size-base * 1.1;
  color: lighten(@text-color-secondary, 6%);
  line-height: 1.6;
}
</style>

