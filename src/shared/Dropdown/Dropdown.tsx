import React from 'react';
import styles from './dropdown.scss';
import ReactDOM from 'react-dom';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({ button, children, isOpen, onClose = NOOP, onOpen = NOOP }: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  const [offset, setOffset] = React.useState({
    left: 0,
    top: 0
  });
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

  const node = document.querySelector('#dropdown_root');
  if (!node) return null;

  const handleOpen = (event: any) => {
    event.stopPropagation();
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }

    const buttonClientRect = event.target.getBoundingClientRect();

    setOffset({
      left: buttonClientRect.left + buttonClientRect.width / 2,
      top: buttonClientRect.bottom
    });
  }

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>
        { button }
      </div>
      {isDropdownOpen && ReactDOM.createPortal((
        <div className={styles.listContainer} style={offset}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            { children }
          </div>
        </div>
      ), node)}
    </div>
  );
}
