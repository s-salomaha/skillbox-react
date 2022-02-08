import React from 'react';
import styles from './menu.scss';
import { Dropdown } from '../../../Dropdown';
import { CommentsButton } from '../CommentsButton';
import { ShareButton } from '../ShareButton';
import { SaveButton } from '../SaveButton';
import { HideButton } from '../HideButton';
import { ComplainButton } from '../ComplainButton';
import { MenuButton } from './MenuButton';
import { generateId } from '../../../../utils/react/generateRandomIndex';
import { GenericList } from '../../../GenericList/GenericList';

const LIST = [
  { className: `${styles.menuListItem} ${styles.menuListItem_desktop}`, itemBody: <CommentsButton /> },
  { className: `${styles.menuListItem} ${styles.menuListItem_desktop}`, itemBody: <ShareButton /> },
  { className: `${styles.menuListItem}`, itemBody: <HideButton /> },
  { className: `${styles.menuListItem} ${styles.menuListItem_desktop}`, itemBody: <SaveButton /> },
  { className: `${styles.menuListItem}`, itemBody: <ComplainButton /> },
  { className: `${styles.menuClose}`, itemBody: 'Закрыть' }
].map(generateId);

export function Menu() {
  const [isMenuOpened, setMenuOpened] = React.useState(false);

  return (
    <div className={`${styles.menu} ${isMenuOpened ? styles.menu_opened : ''}`}>
      <Dropdown
        onClose={() => setMenuOpened(false)}
        onOpen={() => setMenuOpened(true)}
        button={<MenuButton />}
      >
        <GenericList list={LIST} listContainerClassName={styles.menuList} />
      </Dropdown>
    </div>
  );
}
