import React from 'react';
import { starWars, uniqueNamesGenerator } from 'unique-names-generator';

interface IStarWarsNameClassState {
  name: string;
  count: number;
}

export class StarWarsNameClass extends React.PureComponent<{}, IStarWarsNameClassState> {
  state: Readonly<IStarWarsNameClassState> = { name: this.randomName(), count: 0 }; // Readonly!

  // constructor(props: {}) {
  //   super(props);
  //
  //   this.state = { name: '123' };
  // }

  public render() {
    console.log('>>', this.state.count);

    return (
      <section>
        <span>{this.state.name}</span>
        <div></div>
        <button onClick={this.handleClick}>Мне нужно имя!</button>
      </section>
    )
  }

  private handleClick = () => {
    this.setState((state, props) => ({ name: this.randomName(), count: state.count + 1 }));
    this.setState((state, props) => ({ count: state.count + 3 }));
  };

  private randomName(): string {
    // this.state.name = '1231';
    return uniqueNamesGenerator({ dictionaries: [starWars], length: 1 });
  }
}