<template>
  <div class="home">
    <HeroSection />
    <MenuSection />
    <AboutSection />
    <ContactSection />
  </div>
</template>

<script lang="ts" setup>
import HeroSection from '@/components/dessert/HeroSection.vue'
import MenuSection from '@/components/dessert/MenuSection.vue'
import AboutSection from '@/components/dessert/AboutSection.vue'
import ContactSection from '@/components/dessert/ContactSection.vue'
</script>

<style lang="less" scoped>
.home {
  padding-top: 0;
}
</style>
