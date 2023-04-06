import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul class={styles.ImageGallery}>
        {images.map(image => {
          return (
            <ImageGalleryItem
              id={image.id}
              webformatURL={image.webformatURL}
              largeImageURL={image.largeImageURL}
            />
          );
        })}
      </ul>
    );
  }
}
