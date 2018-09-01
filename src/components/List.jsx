import React from 'react';

import { uniqueId } from 'lodash';
import cn from 'classnames';

const List = ({ list, listName, onClick }) => {
    const buttonClassLayout = cn({
        'list__button': true,
        'btn': true,
        'btn-primary': listName === 'Вёрстка' ? true : false,
        'btn-outline-primary': listName !== 'Вёрстка' ? true : false,
    });
    const buttonClassFrontend = cn({
        'list__button': true,
        'btn': true,
        'btn-primary': listName === 'Фронтенд' ? true : false,
        'btn-outline-primary': listName !== 'Фронтенд' ? true : false,
    });
    const buttonClassCommon = cn({
        'list__button': true,
        'btn': true,
        'btn-primary': listName === 'Общее' ? true : false,
        'btn-outline-primary': listName !== 'Общее' ? true : false,
    });
    return (
        <div className="list">
          <div className="list__buttons">
            <button onClick={onClick('Вёрстка')} className={buttonClassLayout}>Вёрстка</button>
            <button onClick={onClick('Фронтенд')} className={buttonClassFrontend}>Фронтенд</button>
            <button onClick={onClick('Общее')} className={buttonClassCommon}>Общее</button>
          </div>
          <ul className="list__array">
            {list.map(item => <li key={uniqueId()} className="list__item">{item}</li>)}
          </ul>
        </div>
    );
}

export default List;
