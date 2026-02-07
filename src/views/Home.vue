<template>
  <div class="home">
    <HeroSection :menu-section-ref="menuSectionRef" />
    <MenuSection ref="menuSectionRef" />
    <AboutSection />
    <ContactSection />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import HeroSection from '@/components/dessert/HeroSection.vue'
import MenuSection from '@/components/dessert/MenuSection.vue'
import AboutSection from '@/components/dessert/AboutSection.vue'
import ContactSection from '@/components/dessert/ContactSection.vue'

const menuSectionRef = ref<InstanceType<typeof MenuSection> | null>(null)
</script>

<style lang="less" scoped>
.home {
  padding-top: 0;
}
</style>
