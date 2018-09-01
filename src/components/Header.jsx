import React from 'react';

const Header = () => {
    return (
        <header className="header">
          <h1 className="header__name">Юрий Немушкин</h1>
          <h3 className="header__job">Frontend Developer</h3>
          <a href="https://github.com/YuriNem" className="header__github">GitHub</a>
        </header>
    );
}

export default Header;
