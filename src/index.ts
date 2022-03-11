import { phonePrefix, emailPrefix } from './data/'
import { phoneFormat, phoneParams } from '../types'
/**
 * 生成随机手机号
 * @param prefix 手机号的可能前缀(三位)
 * @param format 手机号的格式
 * @returns 随机生成的手机号
 */
export function generatePhone(prefix?: Array<string>, format?: phoneParams) {
  const reg = /^(\d{3})(\d{4})(\d{4})/
  if (!prefix) prefix = phonePrefix
  const i = Math.floor(Math.random() * prefix.length)
  const pre = prefix[i]
  const suffix = (Math.floor(Math.random() * 100000000) + '').padStart(8, '0')
  const phone = pre + suffix
  return format ? phone.replace(reg, phoneFormat[format]) : phone
}

/**
 * 按规定的位数生成数字
 * @param digitMin 最小位数 最小位数应 >= 1, 否则throw error
 * @param digitMax 最大位数
 * @param decimal 小数 最小为0,否则throw error
 * @param delimiter 千位分隔符
 */
export function generateNumber(
  digitMin: number,
  digitMax: number,
  decimal: number,
  delimiter?: boolean
) {
  if (digitMin < 1) throw new Error('最小位数应大于等于 1 ！')
  if (decimal < 0) throw new Error('小数位数应大于等于 0 ！')
  let numberStr = ''
  let decimalsStr = '.'
  const max = Math.max(digitMin, digitMax)
  const min = Math.min(digitMin, digitMax)
  const size = max - min
  const randomLenght = Math.round(Math.random() * size) + min
  for (let i = 0; i < randomLenght; i++) {
    const num = Math.floor(Math.random() * 10)
    numberStr += num
    if (numberStr[0] === '0') {
      numberStr = ''
      --i
    }
  }
  for (let i = 0; i < decimal; i++) {
    const num = Math.floor(Math.random() * 10)
    decimalsStr += num
  }
  if (delimiter) {
    numberStr = numberStr.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  }
  numberStr = decimalsStr.length > 1 ? numberStr + decimalsStr : numberStr
  return numberStr
}

/**
 *  随机生成邮箱账号
 * @param emailSuffix 邮箱的前缀
 * **/
export function generateEmail(emailSuffix?: Array<string>) {
  if (!emailSuffix) emailSuffix = emailPrefix
  const len = emailSuffix.length
  const i = Math.floor(Math.random() * len)
  let res = ''
  do {
    res = Math.random().toString(36).substr(2)
  } while (res.length < 6)
  return res + emailSuffix[i]
}

/**
 * 生成随机时间
 * @param start 时间开头
 * @param end 时间结尾
 * @param format 格式
 * @param showSecond 是否显示秒
 * **/
export function generateDate() {
  const startDate = new Date(2021, 5, 22).getTime()
  const endDate = new Date(2078, 0, 1).getTime()
  const diffDate = startDate - endDate
  return new Date(Math.floor(Math.random() * diffDate) + startDate)
}
