import React, { Component } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
  render() {
    return (
      <div className={styles.Modal} onClick={this.props.onClick}>
        <div className={styles.Overlay}>
          {' '}
          <img src={this.props.src} className={styles.Image} alt="" />
        </div>
      </div>
    );
  }
}
