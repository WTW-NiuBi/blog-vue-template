import { request } from './request'
import type { ContactData, ContactParams } from './types'

/** 获取联系区块展示数据 */
export function getContact() {
  return request<ContactData>('/api/contact')
}

/** 提交联系/留言 */
export function submitContact(params: ContactParams) {
  return request<null>('/api/contact', {
    method: 'POST',
    body: JSON.stringify(params),
  })
}
