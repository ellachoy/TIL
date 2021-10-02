console.log('logging...')
console.clear()

// log level
console.log('log')
console.log('info')
console.log('warn')
console.log('error')

//assert
console.log(2 === 3, 'not same!')
console.log(2 === 2, 'same!')

//print object
const student = { name: 'ellie', age: 20, company: { name: 'AC' } }
console.log(student)
console.table(student) // table
console.dir(student, { showHidden: true, colors: false, depth: 0 })

//measuring time
console.time('for loop')
for (let i = 0; i < 10; i++) {
  i++
}
console.timeEnd('for loop')

//counting
function a() {
  console.count('a function')
}
a()
console.countReset('a function')
a()
//trace
function f1() {
  f2()
}
function f2() {
  f3()
}
function f3() {
  console.log('f3')
  console.trace()
}
f1()
