import { handleActions } from 'redux-actions';
import * as actions from '../actions';
import { combineReducers } from 'redux';

const listName = handleActions({
    [actions.showListLayout]() {
      return 'Вёрстка';
    },
    [actions.showListFrontend]() {
      return 'Фронтенд';
    },
    [actions.showListCommon]() {
      return 'Общее';
    },
}, 'Фронтенд');

const list = handleActions({
    [actions.showListLayout]() {
      return ['HTML & CSS', 'HTML5', 'CSS Grid Layout', 'Responsive Web Design', 'Sass', 'Bootstrap', 'BEM'];
    },
    [actions.showListFrontend]() {
      return ['JavaScript', 'React', 'React Router', 'Redux', 'Webpack', 'Node.js & NPM', 'ES2015 & Babel', 'ESlint', 'Jest', 'TypeScript'];
    },
    [actions.showListCommon]() {
      return ['Linux & Terminal', 'SSH', 'HTTP', 'Git & GitHub', 'Data Structures & Algorithms', 'C & C++'];
    },
}, ['JavaScript', 'React', 'React Router', 'Redux', 'Webpack', 'Node.js & NPM', 'ES2015 & Babel', 'ESlint', 'Jest', 'TypeScript']);

export default combineReducers({
    listName,
    list,
});
