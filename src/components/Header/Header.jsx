import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
        <img src='https://avatars.mds.yandex.net/get-pdb/1909671/408e1419-9d03-4b41-a3ae-dfd3a0ce762b/s1200?webp=false' alt="logo"/>
    </header>
}

export default Header;