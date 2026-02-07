<template>
  <section id="contact" class="contact">
    <div class="container">
      <p v-if="loading" class="contact-status">加载中...</p>
      <template v-else-if="data">
        <header class="section-header">
          <h2 class="section-title">{{ data.title }}</h2>
          <p class="section-subtitle">{{ data.subtitle }}</p>
        </header>
        <div class="contact-card">
          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-label">地址</span>
              <span class="contact-value">{{ data.address }}</span>
            </div>
            <div class="contact-item">
              <span class="contact-label">营业时间</span>
              <span class="contact-value">{{ data.hours }}</span>
            </div>
            <div class="contact-item">
              <span class="contact-label">电话</span>
              <a :href="`tel:${data.phone}`" class="contact-value contact-link">{{ data.phone }}</a>
            </div>
          </div>
          <a href="#menu" class="btn btn-primary" @click.prevent="scrollToMenu">{{ data.buttonText }}</a>
        </div>
      </template>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { getContact } from '@/apis'
import type { ContactData } from '@/apis'

const data = ref<ContactData | null>(null)
const loading = ref(true)

onMounted(async () => {
  try {
    data.value = await getContact()
  } finally {
    loading.value = false
  }
})

function scrollToMenu() {
  document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/main.less";

.contact {
  padding: @space-2xl 0;
}

.contact-status {
  text-align: center;
  color: @text-muted;
  padding: @space-xl 0;
}

.section-header {
  text-align: center;
  margin-bottom: @space-xl;
}

.contact-card {
  max-width: 520px;
  margin: 0 auto;
  padding: @space-lg;
  background: @bg-card;
  border-radius: @radius-lg;
  box-shadow: @shadow;
  display: flex;
  flex-direction: column;
  gap: @space-md;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: @space-sm;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contact-label {
  font-size: @font-size-xs;
  font-weight: 500;
  color: @text-muted;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contact-value {
  font-size: @font-size-base;
  color: @text;
}

.contact-link {
  text-decoration: none;
  color: @primary;
  transition: color 0.2s;

  &:hover {
    color: @primary-dark;
  }
}

.btn {
  align-self: center;
  margin-top: @space-xs;
}
</style>
