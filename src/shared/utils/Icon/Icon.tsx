import React from 'react';
import styles from './icon.scss';
import classNames from 'classnames';
import { BlockIcon, MenuIcon, WarningIcon } from '../../icons';

export enum EIcons {
  block = 'BlockIcon',
  menu = 'MenuIcon',
  warning = 'WarningIcon'
}

const icons = {
  BlockIcon,
  MenuIcon,
  WarningIcon
};

type TIconSizes = 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20;

interface IIconProps {
  name: EIcons,
  size: TIconSizes;
  mobileSize?: TIconSizes;
  tabletSize?: TIconSizes;
  desktopSize?: TIconSizes;
}

export function Icon(props: IIconProps) {
  const {
    name,
    size,
    mobileSize,
    tabletSize,
    desktopSize
  } = props;

  const Icon = icons[name];

  return (
    <span
      className={classNames(
        styles[`icon-s${size}`],
        { [styles[`icon-mobile-s${mobileSize}`]]: mobileSize },
        { [styles[`icon-tablet-s${tabletSize}`]]: tabletSize },
        { [styles[`icon-desktop-s${desktopSize}`]]: desktopSize }
      )}
    >
      <Icon />
    </span>
  );
}
