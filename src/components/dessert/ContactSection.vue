<template>
  <section id="contact" class="contact">
    <div class="container">
      <header class="section-header">
        <h2 class="section-title">到店品尝</h2>
        <p class="section-subtitle">欢迎来店里坐坐，我们等你</p>
      </header>
      <div class="contact-card">
        <div class="contact-info">
          <div class="contact-item">
            <span class="contact-label">地址</span>
            <span class="contact-value">某某市某某区某某路 123 号</span>
          </div>
          <div class="contact-item">
            <span class="contact-label">营业时间</span>
            <span class="contact-value">周二至周日 10:00 — 18:00</span>
          </div>
          <div class="contact-item">
            <span class="contact-label">电话</span>
            <a href="tel:400-000-0000" class="contact-value contact-link">400-000-0000</a>
          </div>
        </div>
        <a href="#menu" class="btn btn-primary" @click.prevent="scrollToMenu">查看甜品</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
function scrollToMenu() {
  document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="less" scoped>
@import "../../assets/styles/main.less";

.contact {
  padding: @space-2xl 0;
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
