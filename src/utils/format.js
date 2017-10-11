/**
 * this file was created by jcxu
 * description 该模块的作用主要为格式化时间格式
 */
export default function format (time) {
  if (arguments.length === 0) {
    return null
  }
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    return null
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1 < 10 ? '0' + date.getMonth() + 1 : date.getMonth() + 1,
    d: date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  return formatObj.y + '-' + formatObj.m + '-' + formatObj.d
}
