<template>
  <section class="newsletter section container">
    <SectionHeader
      title="订阅月度简报"
      subtitle="每月一次，精选文章与灵感片段，为你的收件箱带去温度与洞察。"
    />
    <form class="newsletter__form" @submit.prevent="handleSubscribe">
      <input
        v-model="form.email"
        type="email"
        placeholder="输入你的邮箱"
        aria-label="订阅邮箱"
        :disabled="submitting"
      />
      <button type="submit" class="btn btn-primary" :disabled="submitting">
        {{ submitting ? "订阅中..." : "立即订阅" }}
      </button>
    </form>
    <p v-if="feedback" class="newsletter__feedback">{{ feedback }}</p>
  </section>
</template>

<script lang="ts" setup>
import SectionHeader from "@/components/common/SectionHeader.vue";
import { useNewsletter } from "@/hooks/useNewsletter";

const { form, feedback, submitting, handleSubscribe } = useNewsletter();
</script>

<style lang="less" scoped>
@import "../../assets/styles/main.less";

.newsletter {
  text-align: center;
}

.newsletter__form {
  margin: 0 auto;
  margin-top: @spacing-large;
  display: inline-flex;
  gap: @spacing-small;
  justify-content: center;
  flex-wrap: wrap;

  input {
    width: 320px;
    max-width: 100%;
    padding: 12px 16px;
    border-radius: 40px;
    border: 1px solid fade(@primary-color, 30%);
    font-size: @font-size-large;
    transition: border 0.25s ease, box-shadow 0.25s ease;

    &:focus {
      outline: none;
      border-color: @primary-color;
      box-shadow: 0 0 0 3px fade(@primary-color, 16%);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}

.btn {
  padding: 10px 22px;
  border-radius: 40px;
  font-size: @font-size-large;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;

  &.btn-primary {
    background: @primary-color;
    color: #fff;
    box-shadow: 0 8px 20px fade(@primary-color, 28%);

    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 12px 26px fade(@primary-color, 34%);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}

.newsletter__feedback {
  margin-top: @spacing-base;
  color: @primary-color;
  font-size: @font-size-base;
}
</style>

