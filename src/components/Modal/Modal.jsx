import React, { Component } from 'react';
import styles from './Modal.module.css';

export default class Modal extends Component {
  render() {
    return (
      <div className={styles.Modal}>
        <div className={styles.Overlay}>
          {' '}
          <div className={styles.NavContainer}>
            <p
              className={styles.FavButton}
              onClick={() => {
                this.props.onAddFavourite();
              }}
            >
              Add to ♥
            </p>
            <p onClick={this.props.onClick} className={styles.CloseButton}>
              Close
            </p>
          </div>
          <img src={this.props.src} className={styles.Image} alt="" />
        </div>
      </div>
    );
  }
}
