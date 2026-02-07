import { request } from './request'
import type { AboutData } from './types'

export function getAbout() {
  return request<AboutData>('/api/about')
}
