const mistake = [] as Array<number>;
mistake.push(1);
mistake.push('1');

let bigObject = {
  'commit': {
    'id': '123',
    'title': 'title'
  },
  'commits': {
    'id': '1234',
    'title': 'title 2'
  },
  'difs': {
    'id': '12345',
    'title': 'title 3'
  },
  'compare_same_ref': false
};

bigObject.compare_same_ref = true;

type TMyBigObject = typeof bigObject;

const typedBigObject: Readonly<TMyBigObject> = bigObject;

typedBigObject.compare_same_ref = false;
typedBigObject.commit.id = '123';

type MyReadonly = {
  readonly [N in 'asd' | 'qwe']: N
}

const some: MyReadonly = {
  asd: 'asd',
  qwe: 'qwe'
}

// ---

type TObjKeys = keyof TMyBigObject;
type TCommitType = TMyBigObject['commit'];

type MyReadonly2<T> = {
  readonly [N in keyof T]: T[N]
}

const some2: MyReadonly2<TMyBigObject> = {
  compare_same_ref: true
}

// ---
const typedBigObject2: MyReadonly3<TMyBigObject> = bigObject;

typedBigObject2.compare_same_ref = false;
typedBigObject2.commit.id = '123';

type MyReadonly3<T> = {
  readonly [N in keyof T]: T[N]
}

type MyPartial<T> = {
  [N in keyof T]?: T[N];
}

type MyPick<T, K extends keyof T> = {
  [N in K]: T[N];
}

type picked = MyPick<TMyBigObject, 'commit' | 'commits'>;

type MyReadonlyDeep<T> = {
  readonly  [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N];
}

const typedBigObjectDeep: MyReadonlyDeep<TMyBigObject> = bigObject;

typedBigObjectDeep.compare_same_ref = false;
typedBigObjectDeep.commit.id = '123';

type TSomeType = MyReadonlyDeep<TMyBigObject>;

// type inference
type RemoveReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T;

type TTest = RemoveReadonly<TSomeType>;

function greaterThenZero(a: number, b: string) {
  return a > 0;
}

type FnReturnType<T> = T extends ((...args: any[]) => infer R) ? R : never;
type FnParameters<T> = T extends ((...args: infer R) => any) ? R : never;

type TReturnType = FnReturnType<typeof greaterThenZero>;
type TArgsType = FnParameters<typeof greaterThenZero>;

type TReturnType2 = ReturnType<typeof greaterThenZero>;
type TArgsType2 = Parameters<typeof greaterThenZero>;