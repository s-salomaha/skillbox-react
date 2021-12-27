// 3.1

function sumJS(arr) {
  return arr.concat([1]);
}

function sumTS(arr: number[]) {
  return arr.reduce((a, v) => a + v);
}

const tsNumber = 2;
const tsString = 'str';

const result = tsString + tsNumber;
const resultTwo = parseInt(tsString) - tsNumber;

if (typeof tsString === 'number') {
  const resultTwo = tsString - tsNumber;
}

// Union type
const strOrNumber: string | number = '2';

// Type alias
type SrtOrNumber = string | number;

const strOrNumber2: SrtOrNumber = '2';
const strOrNumber3: SrtOrNumber = '2';
const strOrNumber4: SrtOrNumber = '2';
const strOrNumber5: SrtOrNumber = '2';

type AllJsSimpleTypes = string | number | [] | object | undefined | null | boolean | void | symbol;

// 3.2

// Array
const tsArray: number[] = [1, 2, 3];
const tsArrayGeneric: Array<number> = [];

const unionArray: (string | number)[] = [1, 2, 3, '2'];
const unionArray2: Array<string | number> = [1, 2, 3, '2'];

// Tuple
const myTuple: [number, string] = [1, '2'];
const [val1, val2] = myTuple;

// 3.3

// Object
type MyObjType = { a: number, b: string }
const myObj: MyObjType = { a: 1, b: '2' };

interface MyFirstInterface {
  readonly a: number;
  b: string;
  c?: number[];
  e: number | undefined;
}

const myObj2: MyFirstInterface = {
  a: 2,
  b: '123',
  e: undefined
};

if (myObj2.c) {
  const val = myObj2.c;
}

const val = myObj2.c;
const val3 = myObj2.e;

myObj2.a = 3;

// Индекс сигнатура
const ApiAnswer: IndexIterface = { key: 'asd', key1: 'asd' };

interface IndexIterface {
  [N: string]: string
}

// 3.4

function calculate(metod: 'add' | 'sub', left: number, rigth: number ): number {
  switch (metod) {
    case 'add': return left + rigth;
    case 'sub': return left - rigth;
  }
}

const sum = calculate('add', 2, 2);

enum Methods {
  add,
  sub
}

function calculateUseEnum(metod: Methods, left: number, rigth: number ): number {
  switch (metod) {
    case Methods.add: return left + rigth;
    case Methods.sub: return left - rigth;
  }
}

const sumUseEnum = calculateUseEnum(Methods.add, 2, 2);

const arrowFn: TypeFn = (value) => 2;

type TypeFn = (a: number) => number;

interface FnInterface {
  (a: number): void;
}

// TS types
type StrangeTsTypes = any | unknown | never;

const some: any = '2';
some.reduce();

const un: unknown = '2';

if (typeof un === 'string') {
  un.concat();
}

function neverFn() {
  throw new Error('my exception');
}

const someValue = neverFn();
