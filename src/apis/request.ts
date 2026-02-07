import type { ApiResponse } from './types'

const BASE = ''

/**
 * 统一请求封装：解析 result，成功返回 data，失败抛错（message）
 */
export async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const method = options?.method?.toUpperCase() ?? 'GET'
  const hasBody = options?.body != null
  const headers: Record<string, string> = {
    ...(hasBody ? { 'Content-Type': 'application/json' } : {}),
    ...(options?.headers as Record<string, string>),
  }
  const res = await fetch(`${BASE}${url}`, {
    ...options,
    headers,
  })
  let json: ApiResponse<T>
  try {
    json = await res.json()
  } catch {
    throw new Error(res.statusText || '请求失败')
  }
  if (json.result === 1) {
    return json.data
  }
  throw new Error(json.message || '请求失败')
}
