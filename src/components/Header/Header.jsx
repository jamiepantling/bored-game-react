import React from 'react';
import Logo from '../Logo';
import Title from '../Title';
import Avatar from '../Avatar';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <Title />
      <Avatar />
    </div>
  );
}

export default Header;
