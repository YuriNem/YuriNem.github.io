import React from 'react';

import _ from 'lodash';
import cn from 'classnames';

export default class List extends React.Component {
    state = { listF: true, listO: false, listG: false };

    onClickF = () => {
        this.setState({ listF: true, listO: false, listG: false });
    }

    onClickO = () => {
        this.setState({ listF: false, listO: true, listG: false });
    }

    onClickG = () => {
        this.setState({ listF: false, listO: false, listG: true });
    }

    renderList = () => {
        const [ list ] = Object.keys(this.props).filter(e => this.state[e]);
        return this.props[list];
    }

    render() {
        const arr = Object.keys(this.state).map((key) => {
            return cn({
                'btn': true,
                'btn-primary': this.state[key],
                'btn-outline-primary': !this.state[key]
            });
        });
        return (
          <div className="list">
            <div className="buttons">
              <button onClick={this.onClickF} className={arr[0]}>Frontend</button>
              <button onClick={this.onClickO} className={arr[1]}>Other</button>
              <button onClick={this.onClickG} className={arr[2]}>General</button>
            </div>
            <ul>
              {this.renderList().map(e => <li key={_.uniqueId()}>{e}</li>)}
            </ul>
          </div>
        )
    }
}
