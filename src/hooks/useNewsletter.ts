/**
 * 新闻简报订阅 Hook
 */

import { reactive, ref } from "vue";
import { subscribeNewsletter } from "@/apis/blog";
import { validateEmail } from "@/utils/validation";

export function useNewsletter() {
  const form = reactive({
    email: ""
  });

  const feedback = ref("");
  const submitting = ref(false);

  const handleSubscribe = async () => {
    // 先进行客户端验证
    const validationError = validateEmail(form.email);
    if (validationError) {
      feedback.value = validationError;
      return;
    }

    submitting.value = true;
    feedback.value = "";

    try {
      const result = await subscribeNewsletter(form.email);
      feedback.value = result.message;
      if (result.success) {
        form.email = "";
      }
    } catch (err) {
      feedback.value = err instanceof Error ? err.message : "订阅失败，请稍后重试";
    } finally {
      submitting.value = false;
    }
  };

  return {
    form,
    feedback,
    submitting,
    handleSubscribe
  };
}

