import React from 'react';
import styles from './userblock.scss';
import { AnonIcon } from '../../../../icons';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}

export function UserBlock({ avatarSrc, username, loading }: IUserBlockProps) {
  return (
    <a
      className={styles.userBox}
      href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=${process.env.APP_URL}/auth&duration=permanent&scope=read submit identity`}
    >
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage}/>
          : <AnonIcon />
        }
      </div>

      <div className={styles.username}>
        {loading ? (
          <span>Loading</span>
        ) : (
          <span>{username || 'Login'}</span>
        )}
      </div>
    </a>
  );
}
