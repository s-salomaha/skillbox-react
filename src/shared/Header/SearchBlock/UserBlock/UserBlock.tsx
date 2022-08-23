import React from 'react';
import styles from './userblock.scss';
import { AnonIcon } from '../../../Icons';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
  return (
    <a
      className={styles.userBox}
      href="https://www.reddit.com/api/v1/authorize?client_id=N8jwWE6HseMzW185xWbPfw&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
    >
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage}/>
          : <AnonIcon />
        }
      </div>

      <div className={styles.username}>
        {loading ? (
          <span>Загрузка</span>
        ) : (
          <span>{username || 'Аноним'}</span>
        )}
      </div>
    </a>
  );
}
