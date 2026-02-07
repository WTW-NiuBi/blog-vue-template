/**
 * 博客相关类型定义
 */

export interface FeaturedPost {
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  summary: string;
}

export interface CollectionItem {
  title: string;
  description: string;
  posts: number;
  updated: string;
}

export interface StatHighlight {
  label: string;
  value: string;
}

export interface BlogData {
  statHighlights: StatHighlight[];
  featuredPosts: FeaturedPost[];
  timeline: TimelineItem[];
  collections: CollectionItem[];
}

