import React from 'react';
import styles from './menu.scss';
import { Dropdown } from '../../../../utils/Dropdown';
import { CommentsButton } from '../Controls/CommentsButton';
import { ShareButton } from '../Controls/ShareButton';
import { SaveButton } from '../Controls/SaveButton';
import { HideButton } from '../Controls/HideButton';
import { ComplainButton } from '../Controls/ComplainButton';
import { MenuButton } from './MenuButton';
import { generateId } from '../../../../../utils/react/generateRandomIndex';
import { GenericList } from '../../../../utils/GenericList/GenericList';

const postId = '123456';
const HideButtonHandler = () => console.log(postId);

const LIST = [
  { className: `${styles.menuListItem} ${styles.menuListItem_desktop}`, itemBody: <CommentsButton /> },
  { className: `${styles.menuListItem} ${styles.menuListItem_desktop}`, itemBody: <ShareButton /> },
  { className: `${styles.menuListItem}`, itemBody: <HideButton />, onClick: HideButtonHandler },
  { className: `${styles.menuListItem} ${styles.menuListItem_desktop}`, itemBody: <SaveButton /> },
  { className: `${styles.menuListItem}`, itemBody: <ComplainButton /> },
  { className: `${styles.menuClose}`, itemBody: 'Close' }
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
