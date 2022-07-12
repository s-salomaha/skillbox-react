import React from 'react';
import styles from './commentsbutton.scss';

interface ICommentsButtonProps {
  isMobileButton?: boolean;
  buttonTitle?: string;
}

export function CommentsButton({ isMobileButton = false, buttonTitle = 'Комментарии' }: ICommentsButtonProps) {
  return (
    <button className={`${styles.commentsButton} ${isMobileButton ? styles.commentsButton_mobile : ''}`}>
      {!isMobileButton && (
        <>
          <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.75.417H1.417A1.42 1.42 0 0 0 0 1.833v8.5c0 .78.637 1.417 1.417 1.417h9.916l2.834 2.833V1.833A1.42 1.42 0 0 0 12.75.417Zm-1.417 8.5h-8.5V7.5h8.5v1.417Zm0-2.125h-8.5V5.375h8.5v1.417Zm0-2.125h-8.5V3.25h8.5v1.417Z" fill="#999"/>
          </svg>
          {buttonTitle}
        </>
      )}
      {isMobileButton && (
        <>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z" fill="#C4C4C4"/>
          </svg>
          <span className={styles.commentsNumber}>13</span>
        </>
        )}
    </button>
  );
}
