import React from 'react';

interface IItem {
  itemBody: string | React.ReactNode;
  id: string;
  onClick?: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
}

interface IGenericListProps {
  list: IItem[];
  listContainerClassName?: string;
}

const noop = () => {};

export function GenericList({ list, listContainerClassName }: IGenericListProps) {
  return (
    <div className={listContainerClassName}>
      {list.map(({
        As= 'div',
        itemBody,
        onClick = noop,
        className,
        id,
        href
      }) => (
        <As
          className={className}
          onClick={() => onClick(id)}
          key={id}
          href={href}
        >
          {itemBody}
        </As>
      ))}
    </div>
  );
}
