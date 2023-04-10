import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, largeImageURL, key } = this.props;
    return (
      <li className={styles.ImageGalleryItem}>
        <img
          className={styles.ImageGalleryItemimage}
          src={webformatURL}
          alt=""
          onClick={() => {
            this.props.onClick(largeImageURL, key);
          }}
        />
      </li>
    );
  }
}
