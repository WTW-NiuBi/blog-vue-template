import { request } from './request'
import type { MenuItem } from './types'

/** 获取人气甜品列表 */
export function getMenu() {
  return request<MenuItem[]>('/api/menu')
}
