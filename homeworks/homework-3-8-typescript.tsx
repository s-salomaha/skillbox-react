// Домашнее задание:

// 1. Работа с простыми типами

// Задание:

// Напишите тип функции, конкатенирующей две строки
// concat('Hello ', 'World') // -> Hello World;

// Решение:

function concat(startString: string, endString: string): string {
  return startString.concat(endString);
}

const concatenatedString = concat('Hello ', 'World');

// 2. Работа с интерфейсами

// Задание:

// Напишите интерфейс для описания следующих данных
//
// const MyHometask = {
//   howIDoIt: "I Do It Wel",
//   simeArray: ["string one", "string two", 42],
//   withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
// }

// Решение:

type StringType = string;
type StringOrNumber = Array<string | number>;

interface IWithData {
  howIDoIt: StringType;
  simeArray: StringOrNumber;
}

interface IMyHometask {
  howIDoIt: StringType;
  simeArray: StringOrNumber;
  withData: Array<IWithData>;
}

const MyHometask: IMyHometask = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

// 3. Типизация функций, используя Generic

// Задание:

// В уроке про Generics мы написали интерфейс массива MyArray
//
// interface MyArray<T> {
//   [N: number]: T;
//   добавьте типизацию для метода reduce
//   reduce();
// }
//
// Справка о работе reduce
//
// const initialValue = 0;
// [1,2,3].reduce((accumulator, value) => accumulator + value, initialValue); // -> 6
//
// Результат работы предыдущей функции передается в следующую в качестве аргумента accumulator.
// На итерации 0 - accumulator === initialValue. Если initialValue не указан, то accumulator это 0 элемент массива

// Решение:

interface MyArray<T> {
  [N: number]: T;

  map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<U>;

  reduce(fn: (accumulator: T, value: T) => T, initialValue?: T): T;
}

const myArray: MyArray<number> = [1, 2, 3];
const reducedMyArray = myArray.reduce((a, v) => a + v);

// 4. Работа с MappedTypes

// Задание:

// interface IHomeTask {
//   data: string;
//   numbericData: number;
//   date: Date;
//   externalData: {
//     basis: number;
//     value: string;
//   }
// }
//
// Стандартный generic Partial работает так же как Readonly, только для внешних ключей.
// Напишите такой MyPartial, чтобы создание подобного объекта стало возможным
//
// const homeTask: MyPartial<IHomeTask> = {
//   externalData: {
//     value: 'win'
//   }
// }
//
// type MyPartial<T> = {
//   [N in keyof T]: T[N] extends object ? MyPatial<T[N]> : T[N]
// }

// Решение:

interface IHomeTask {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
    basis: number;
    value: string;
  }
}

const homeTask: MyPartial<IHomeTask> = {
  externalData: {
    value: 'win'
  }
};

type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
};

// 5*. Работа с Generic, Mapped Types, Type inference №1

// Задание:

// Это React Functional Component
//
// function HomeComponent(props: { firstProp: string }) {
//   return (
//     <div>
//       { props.firstProp }
//     </div>
//   )
// }
//
// Напишите такой тип, который извлечет тип props из этого или любого другого React компонента.
// Подсказка: любой реакт компонент расширяет React.ComponentType<Props>
// props: IProps;
// interface IProps {
//   firstProp: string
// }
//
// const t = TMyType<typeof HomeComponent>;

// Решение:

function HomeComponent(props: { firstProp: string }) {
  return (
    <div>
      { props.firstProp }
    </div>
  )
}

type TMyType<T> = T extends React.ComponentType<infer R> ? R : never;
type ReactPropsType = TMyType<typeof HomeComponent>;
