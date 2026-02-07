<template>
  <div class="hello-world">
    <h2>{{ msg }}</h2>
    <p>This is a reusable component using Vue 3 Composition API with TypeScript</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup(props) {
    // 可以在这里使用Composition API的特性
    return {}
  }
})
</script>

<style lang="less" scoped>
@import "../assets/styles/main.less";

.hello-world {
  background-color: @background-color;
  padding: @spacing-large;
  border-radius: 8px;
  margin: @spacing-large 0;
  
  h2 {
    color: @success-color;
  }
}
</style>