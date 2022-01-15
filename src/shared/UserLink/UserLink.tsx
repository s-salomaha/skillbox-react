import React from 'react';
import styles from './userlink.scss';

export function UserLink() {
  return (
    <div className={styles.userLink}>
      <img
        className={styles.avatar}
        src="https://cdn.dribbble.com/users/3849383/avatars/normal/a7ccfe1268fdaf56228ef0ee56e718aa.jpg?1627924641"
        alt="avatar"
      />
      <a href="#user-url" className={styles.userName}>Дмитрий Гришин</a>
    </div>
  );
}
