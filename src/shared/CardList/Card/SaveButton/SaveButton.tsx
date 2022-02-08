import React from 'react';
import styles from './savebutton.scss';

interface ISaveButtonProps {
  isMobileButton?: boolean;
}

export function SaveButton({ isMobileButton = false }: ISaveButtonProps) {
  return (
    <button className={`${styles.saveButton} ${isMobileButton ? styles.saveButton_mobile : ''}`}>
      {!isMobileButton && (
        <>
          <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.4 2.8H0v9.8c0 .77.63 1.4 1.4 1.4h9.8v-1.4H1.4V2.8ZM12.6 0H4.2c-.77 0-1.4.63-1.4 1.4v8.4c0 .77.63 1.4 1.4 1.4h8.4c.77 0 1.4-.63 1.4-1.4V1.4c0-.77-.63-1.4-1.4-1.4Zm-.7 6.3H9.1v2.8H7.7V6.3H4.9V4.9h2.8V2.1h1.4v2.8h2.8v1.4Z" fill="#979797"/>
          </svg>
          Поделиться
        </>
      )}
      {isMobileButton && (
        <>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="#C4C4C4"/>
            <path d="M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z" fill="white"/>
          </svg>
        </>
      )}
    </button>
  );
}
