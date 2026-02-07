<template>
  <div class="about">
    <h1>About Page</h1>
    <p>This is a Vue 3 template with TypeScript and Composition API</p>
    <HelloWorld msg="Welcome to the About Page" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  name: 'About',
  components: {
    HelloWorld
  }
})
</script>

<style lang="less" scoped>
@import "../assets/styles/main.less";

.about {
  padding: @spacing-large;
  
  h1 {
    color: @text-color;
    margin-bottom: @spacing-base;
  }
  
  p {
    color: @text-color-secondary;
    margin-bottom: @spacing-large;
  }
}
</style>