enum ColorsEnum {
  white = "#ffffff",
  black = "#000000",
}

type Colors = keyof typeof ColorsEnum;

// 报错情形
// interface Ifoo {
//   name: string;
//   age: number;
//   weight: number;
//   isEngineer: boolean;
// }

// function setProp(foo: Ifoo, key: keyof Ifoo, val: any) {
//   foo[key] = val; // Type 'any' is not assignable to type 'never'.
// }

// 泛型用法
interface Ifoo {
  name: string;
  age: number;
  weight: number;
  isEngineer: boolean;
}

function setProp<T, K extends keyof T>(foo: T, key: K, val: T[K]) {
  foo[key] = val;
  return foo
}


let obj1 = setProp({} as Ifoo, 'name', 'Joe'); 
