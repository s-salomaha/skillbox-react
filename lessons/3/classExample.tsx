// 3.6

// Old constructor example
// function OldConstructor(fieldValue) {
//   this.field = fieldValue || 123;
// }
//
// OldConstructor.prototype.method = function () {
//   return this.field;
// };
//
// const instance = new OldConstructor();
// instance.method();

// New, ES6
class Constructor {
  public field: number = 123;
  private privateField: number = 123;

  public constructor(arg: number) {
    this.field = arg;
  }

  public publicMethod(): number {
    return this.field;
  }

  protected protectedMethod() {
    return this.field + 10;
  }

  private privateMethod() {
    return this.field + 30;
  }
}

const instance = new Constructor(123);

class Child extends Constructor {
  public childMethod() {

  }

  protected protectedMethod(): number {
    return super.protectedMethod();
  }

  public publicMethod(): number {
    return super.publicMethod();
  }
}

abstract class AbstractClass {
  public abstract abstractField: number;

  public abstract abstractMethod(): number;

  protected protectedMethod() {
    return this.abstractField;
  }
}

class NewChild extends AbstractClass {
  public abstractField: number = 123;

  public abstractMethod(): number {
    return this.protectedMethod();
  }
}

interface MyInterface<T> {
  field: string;
  method(): string;
}

class NewClass<T> implements MyInterface<T> {
  public field: string = '123';
  public conf?: T;

  public method(): string {
    return '';
  }
}

class MyComponent extends React.Component<{ prop1: number }, { state1: string }> {
  constructor(props: { prop1: number }) {
    super(props);
    this.state = {
      state1: '123'
    }
  }

  public render() {
    return (
      <div>{this.props.prop1}</div>
    );
  }
}
