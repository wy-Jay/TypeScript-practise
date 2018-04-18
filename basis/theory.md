### 原始数据类型
  1. 布尔值 ： ` let bool: boolean = false; `
  2. 数值： ` let num: number = 6 `
  3. 字符串： ` let str: string = 'name' `
  4. 空值： ` let unUse: void = undefined `
  5. Null 和 Undefined ：
		`  let u: undefined = undefined;
			let n: null = null; `
  
### 任意值
1. 任意值（Any）用来表示允许赋值为任意类型：` let aaa: any = 'xxx' `
2. 为生命类型的变量，会被识别为任意值类型

### 类型推论
	TS会依照类型推论的规则推断出一个类型
	
### 联合类型
1. 表示取值可以喂多种类型中的一种
2. let a = string | number;
3. 使用 | 分隔每个类型

### 对象的类型——接口
1. 接口： 行为的抽象，由类（classes）去实现（implements）
2. eg： `interface Person {name: string; age:number} let tom: Person = {name:'shiyue', age: 24} `
3. 可选属性： `interface Person {name: string; age? : number} `
4. 任意属性：  `interface Person {name: string; age? : number;[propNmae:string]: any} `
5. 只读属性： `interface Person {readonly id:number; name: string; age? : number;[propNmae:string]: any} `

### 数组的类型	
1. ［类型＋方括号］：` let arr: number[] = [1,2,3] `
2. 数组泛型： ` let arr: Array<number> = [1,2,3] `

### 函数的类型
1. 常见方式：函数声明和函数表达式
2. 对输入和输出，进行约束
3. eg: ` function sum(x,y){return x + y} `

###  声明文件
1. 声明语句： 使用第三方库， ` declare var jQuery: (string) => any`
2. 声明文件： ` ///  ` [三斜线指令]表示引用了声明文件

###  内置对象
1. 根据标准在全局作用于（Global）上存在的对象