// let num = 1
// setInterval(() => {
//   console.log(num++)
// }, 1000) 숫자가 1씩 계속 증가

// 취소하려면,
let num = 1
const interval = setInterval(() => {
  console.log(num++)
}, 1000)

setTimeout(() => {
  console.log('Timeout')
  clearInterval(interval)
}, 6000)
