'use client'

import * as React from 'react';
import styles from './styles.module.css';
import ModalTrigger from '@/components/ModalTrigger';
import Logo from '~/svg/Logo.svg';

export default function Navbar() {
  function smoothScroll(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  return (
    <div className={styles.navbar}>
      <div onClick={() => smoothScroll('hosts')}>ABOUT</div>
      <a href="https://patreon.com/improvisdead" target="_blank"><div>PATREON</div></a>
      <ModalTrigger><div>EPISODES</div></ModalTrigger>
      <a href="https://discord.gg/dqS6hkfVGE" target="_blank"><div>DISCORD</div></a>
      <Logo className={styles.logo} />
    </div>
  )
}
