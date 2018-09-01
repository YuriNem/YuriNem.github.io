import React from 'react';

import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import { showListLayout, showListFrontend, showListCommon } from '../actions';

export default class App extends React.Component {

    onClick = (listName) => () => {
        if (listName === 'Вёрстка') {
            this.props.dispatch(showListLayout());
        } else if (listName === 'Фронтенд') {
            this.props.dispatch(showListFrontend());
        } else if (listName === 'Общее') {
            this.props.dispatch(showListCommon());
        }
    }

    render() {
        return (
            <div class="app">
              <Header />
              <Main listName={this.props.listName} list={this.props.list} onClick={this.onClick} />
              <Footer />
            </div>
        );
    }
}
