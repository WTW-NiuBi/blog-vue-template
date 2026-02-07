/**
 * 博客数据获取 Hook
 */

import { ref, onMounted } from "vue";
import { fetchBlogData } from "@/apis/blog";
import type { BlogData } from "@/types/blog";

export function useBlogData() {
  const data = ref<BlogData | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const loadData = async () => {
    loading.value = true;
    error.value = null;

    try {
      data.value = await fetchBlogData();
    } catch (err) {
      error.value = err instanceof Error ? err.message : "加载数据失败";
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    loadData();
  });

  return {
    data,
    loading,
    error,
    reload: loadData
  };
}

