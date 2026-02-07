import { request } from './request'
import type { HeroData } from './types'

export function getHero() {
  return request<HeroData>('/api/hero')
}
