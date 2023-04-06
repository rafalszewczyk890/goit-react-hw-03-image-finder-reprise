import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL, largeImageURL } = this.props;
    return (
      <li key={id} className={styles.ImageGalleryItem}>
        <img
          className={styles.ImageGalleryItemimage}
          src={webformatURL}
          alt=""
        />
      </li>
    );
  }
}
