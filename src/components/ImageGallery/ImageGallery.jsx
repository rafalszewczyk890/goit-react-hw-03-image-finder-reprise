/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';
import Loader from 'components/Loader/Loader';
import { fetchImages } from 'components/api/api';

export const ImageGallery = props => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { query, page, onNoMoreLoad, onClick } = props;

  useEffect(() => {
    setIsLoading(true);
    fetchImages(query, page, onNoMoreLoad, setImages);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchImages(query, page, onNoMoreLoad, setImages, images);
    setIsLoading(false);
  }, [query, page]);

  return (
    <>
      {' '}
      <ul className={styles.ImageGallery}>
        {isLoading && <Loader />}
        {images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              webformatURL={image.webformatURL}
              largeImageURL={image.largeImageURL}
              onClick={largeImageURL => {
                onClick(largeImageURL);
              }}
            />
          );
        })}
      </ul>
    </>
  );
};
