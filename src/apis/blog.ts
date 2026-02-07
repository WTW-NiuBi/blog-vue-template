/**
 * 博客相关 API 调用
 */

import type { BlogData } from "@/types/blog";

/**
 * 模拟 API 延迟
 */
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * 获取博客首页数据
 * @returns 博客数据
 */
export async function fetchBlogData(): Promise<BlogData> {
  // 模拟 API 调用
  await delay(300);

  return {
    statHighlights: [
      { label: "创作时长", value: "6 年" },
      { label: "文章篇数", value: "128" },
      { label: "订阅读者", value: "3.2k" }
    ],
    featuredPosts: [
      {
        title: "在渐进式架构中拥抱 Vue 生态的新节奏",
        description:
          "从设计系统到交互细节，如何让渐进式架构与 Vue 生态形成良性的呼应。",
        date: "2025-09-16",
        readingTime: "8 分钟",
        tags: ["Vue", "架构", "体验设计"]
      },
      {
        title: "用 TypeScript 守护前端代码的边界感",
        description:
          "记录几个在真实项目中实践 TypeScript 的关键瞬间，以及我总结出的代码自检清单。",
        date: "2025-08-02",
        readingTime: "6 分钟",
        tags: ["TypeScript", "工程化"]
      },
      {
        title: "把生活写成诗：旅途、跑步与咖啡因",
        description:
          "技术之外的小日常，同样值得认真对待。写给那些陪我走过四季的微光。",
        date: "2025-07-10",
        readingTime: "5 分钟",
        tags: ["生活方式", "随笔"]
      }
    ],
    timeline: [
      {
        year: "2025",
        title: "探索设计系统的边界",
        summary: "在团队内推动微前端与设计系统融合落地，让体验统一成为现实。"
      },
      {
        year: "2023",
        title: "深耕 TypeScript 实践",
        summary: "构建更聪明的工具链，让复杂的前端项目获得更强韧的可维护性。"
      },
      {
        year: "2021",
        title: "记录生活的第一百篇随笔",
        summary: "把镜头对准日常，学会在琐碎里寻找闪光点，持续创作。"
      }
    ],
    collections: [
      {
        title: "前端匠心手记",
        description: "记录项目实战中的解决方案与复盘思考。",
        posts: 42,
        updated: "本月"
      },
      {
        title: "灵感小行星",
        description: "设计灵感、阅读摘录与随笔的灵感火花。",
        posts: 31,
        updated: "上周"
      },
      {
        title: "慢生活提案",
        description: "跑步、旅行与咖啡的味觉笔记。",
        posts: 19,
        updated: "昨天"
      }
    ]
  };
}

/**
 * 订阅新闻简报
 * @param email 邮箱地址
 * @returns 订阅结果
 */
export async function subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
  // 模拟 API 调用
  await delay(500);

  return {
    success: true,
    message: "感谢关注！新内容更新时会第一时间通知你。"
  };
}

