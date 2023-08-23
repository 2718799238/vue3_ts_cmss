let BASE_URL = ''
const TIME_OUT = 10000

// 代码逻辑判断当前环境
if (import.meta.env.MODE === 'production') {
  console.log(import.meta.env.MODE)

  // 生产环境
  BASE_URL = 'http://codercba.com:5000'
} else {
  // 开发环境
  BASE_URL = 'http://codercba.com:5000'
}
export { BASE_URL, TIME_OUT }
