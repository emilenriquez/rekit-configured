import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SidePanel } from './';

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {
    children: ''
  };

  render() {
    return (
      <div className="examples-layout">
        <SidePanel />
        <div className="examples-page-container">{this.props.children}</div>
      </div>
    );
  }
}
