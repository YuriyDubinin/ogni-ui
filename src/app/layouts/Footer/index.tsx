'use client';

import styles from './styles/style.module.css';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import classNames from 'classnames';

const buttons = [
  {name: 'События', href: '/', disabled: false},
  {name: 'Покушать', href: '/eat', disabled: true},
  {name: 'Контакты', href: '/contacts', disabled: true},
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      {buttons.map(btn => {
        const isActive = pathname === btn.href;
        return (
          <Link
            key={btn.href}
            href={btn.href}
            onClick={e => btn.disabled && e.preventDefault()}
            className={classNames({
              [styles.footer__btn]: true,
              [styles.footer__btn_active]: isActive,
            })}>
            {btn.name}
          </Link>
        );
      })}
    </footer>
  );
}
