import React from 'react';

import _ from 'lodash';

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
        return (
          <div className="list">
            <div className="buttons">
              <button onClick={this.onClickF}>Frontend</button>
              <button onClick={this.onClickO}>Other</button>
              <button onClick={this.onClickG}>General</button>
            </div>
            <ul>
              {this.renderList().map(e => <li key={_.uniqueId()}>{e}</li>)}
            </ul>
          </div>
        )
    }
}
