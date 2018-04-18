let bool: boolean = false;

let num: number = 123;

let str: string = 'a';

let unuse: void = undefined;

let u: undefined = undefined;
let n: null = null;

let some: any = 'xxx';

let some2: string | number;
    some2 = 'aaa'
    some2 = 123

// 接口
interface Person {
  name: string,
  age: number
}

let shiyue: Person = {
  name: 'shiyue',
  age: 24
}

// let shiyue: Person = { //这是错误的
//   name: 'shiyue',
// }

// 数组
let arr: number[] = [1,2,3]

// 函数
function sum (x:number, y:number): number {
  return x + y
}

