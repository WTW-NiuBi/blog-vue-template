/**
 * 验证工具函数
 */

/**
 * 验证邮箱格式
 * @param email 邮箱地址
 * @returns 是否为有效邮箱
 */
export function isValidEmail(email: string): boolean {
  const emailPattern = /^[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}$/;
  return emailPattern.test(email.trim());
}

/**
 * 验证邮箱并返回错误消息
 * @param email 邮箱地址
 * @returns 错误消息，如果验证通过则返回空字符串
 */
export function validateEmail(email: string): string {
  const trimmedEmail = email.trim();

  if (!trimmedEmail) {
    return "请输入邮箱地址，以便收到最新内容。";
  }

  if (!isValidEmail(trimmedEmail)) {
    return "邮箱格式看起来不太正确，试着再确认一下吧。";
  }

  return "";
}

