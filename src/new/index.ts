
function myNew1(..._args: any[]) {
  const [fn, ...args] = [...arguments]
  const obj = Object.create(fn.prototype)
  const result = fn.apply(obj, args)

  return typeof result === 'object' || typeof result === 'function' ? result : obj
}

function myNew2() {
  const [fn, ...args] = [...arguments]

  const obj = new Object()
  // @ts-ignore
  obj.__proto__ = fn.prototype

  const result = fn.apply(obj, args)

  return typeof result === 'object' || typeof result === 'function' ? result : obj

}

function Test(name: string): void {
  // @ts-ignore
  this.name = name;
}

// Test.prototype.getName = function () {
//   console.log(this.name)
// }

// const person = myNew1(Test, 'hello')

// person.getName(); //nick
