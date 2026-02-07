/**
 * 服务端统一返回结构
 * result: 1 成功，0 失败
 */
export interface ApiResponse<T = unknown> {
  result: 0 | 1
  message: string
  data: T
}

/** 人气甜品项（与后端一致） */
export interface MenuItem {
  id: string
  name: string
  desc: string
  emoji: string
  bg: string
}

/** 联系/留言请求体 */
export interface ContactParams {
  name?: string
  phone?: string
  message?: string
}

/** 首屏 Hero 数据 */
export interface HeroData {
  tagline: string
  title: string
  desc: string
  buttonText: string
  scrollText: string
}

/** 关于我们数据 */
export interface AboutData {
  title: string
  subtitle: string
  paragraphs: string[]
  imageUrl: string
  imageAlt: string
}

/** 联系区块展示数据 */
export interface ContactData {
  title: string
  subtitle: string
  address: string
  hours: string
  phone: string
  buttonText: string
}
