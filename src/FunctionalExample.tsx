// add function

import React from 'react';
import {stopPropagation} from './utils/react/stopPropagation';
import {preventDefault} from './utils/react/preventDefault';
import {getChecked, getValue, pickFromSyntheticEvent} from './utils/react/pickFromSyntheticEvent';
import {withKey} from './utils/react/withKey';

// function add(leftSide: number) {
//   return (rightSide: number) => leftSide + rightSide;
// }

const add = (leftSide: number) => (rightSide: number) => leftSide + rightSide;

add(1)(1); // -> 2

const addOne = add(1);
const addSix = add(6);

addOne(5);

// HOF

// window.addEventListener('resize', () => {});
//
// function addEventListenerWithDispose(element, name, handler) {
//   element.addEventListener(name, handler);
//   return () => element.removeEventListener(name, handler);
// }

// event вызовется только один раз
// const dispose = addEventListenerWithDispose(window, 'resize', () => {
//   console.log('resize');
//   dispose();
// });

/// --- ///

interface IBlockProps {
  title: string;
  id: string;
}

// first version
// function Feed(props: { blocks: IBlockProps[] }) {
//   return (
//     <div>
//       {props.blocks.map((block : IBlockProps) =>
//         <Block key={block.id} {...block} />
//       )}
//     </div>
//   );
// }

// second version
const withIdKey = withKey('id');
const withIndexKey = withKey();

function Feed(props: { blocks: IBlockProps[] }) {
  return (
    <div>
      {props.blocks.map(withIdKey(Block))}
    </div>
  );
}

function Block(props: IBlockProps) {
  return (
    <div>{props.title}</div>
  );
}

///

function Input(props: { onChange: (value: string) => void, value: string }) {
  return (
    // <input value={props.value} onChange={(e) => props.onChange(e.currentTarget.value)} />
    <input value={props.value} onChange={getValue(props.onChange)} />
  );
}

function Checkbox(props: { onChange: (value: boolean) => void, value: boolean }) {
  return (
    // <input type="checkbox" checked={props.value} onChange={(e) => props.onChange(e.currentTarget.checked)} />
    <input type="checkbox" checked={props.value} onChange={getChecked(props.onChange)} />
  );
}

// firs version
// function NotStandardLink(props: any) {
//   const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
//     e.stopPropagation();
//     e.preventDefault();
//
//     props.onClick();
//   }
//
//   return (
//     <a onClick={handleClick}>Hello</a>
//   );
// }

function NotStandardLink(props: any) {
  return (
    <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
  );
}

// const preventAll

interface InputProps {
  onChange: (value: string) => void;
  value: string;
}

function Input2({ value, onChange }: InputProps) {
  return (
    <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))} />
  );
}
