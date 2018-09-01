import React from 'react';

import List from './List.jsx';

const Main = (props) => {
    return (
        <main className="main">
          <hr className="main__line" />
          <p className="main__text">I started to study programming on C/C++ by myself at 19 years old and tried to work on Linux. I was programming on Pascal at the school, and on Delphi at the university before that. I was working as math tutor simultaneously and was studing SMM and SEO for searching clients. I intend to evolve my programming skill in Web development. Moreover, this is a popular direction. Summing it up, I decided to become a Front-End Developer.</p>
          <a href="yurinemushkin.ru" className="main__tutor">Репетитор по математике и информатике</a>
          <hr className="main__line" />
          <p className="main__stack">Я владею следующим стеком технологий:</p>
          <List {...props} />
          <hr className="main__line" />
          <p className="main__accounts">Мои аккаунты нa ресурсах, на которых я учился:</p>
          <a href="https://ru.hexlet.io/u/yurinem" className="main__hexlet">Hexlet</a>
          <br />
          <a href="https://htmlacademy.ru/profile/yurinem" className="main__htmlacademy">HTML Academy</a>
          <hr className="main__line" />
        </main>
    );
}

export default Main;
