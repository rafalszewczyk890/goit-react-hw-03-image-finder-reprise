import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';
import Loader from 'components/Loader/Loader';

const API_KEY = '33215953-674c55a945dec9bfe68981b61';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const ImageGallery = props => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { query, page, onNoMoreLoad, onClick } = props;

  useEffect(() => {
    setIsLoading(true);
    const fetchImages = async () => {
      const response = await axios.get(
        `/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      setImages(response.data.hits);
      setIsLoading(false);
      if (response.data.hits.length < 12) {
        onNoMoreLoad();
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const fetchImages = async () => {
      const response = await axios.get(
        `/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      setImages(response.data.hits);
      setIsLoading(false);
      if (response.data.hits.length < 12) {
        onNoMoreLoad();
      }
    };
    fetchImages();
  }, [query]);

  useEffect(() => {
    if (page > 1) {
      setIsLoading(true);
      const fetchImages = async () => {
        const response = await axios.get(
          `/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        setImages([...images, ...response.data.hits]);
        setIsLoading(false);
        if (response.data.hits.length < 12) {
          onNoMoreLoad();
        }
      };
      fetchImages();
    }
  }, [page]);

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
