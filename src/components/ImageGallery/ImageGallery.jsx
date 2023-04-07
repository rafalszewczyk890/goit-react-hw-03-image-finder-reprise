import React, { Component } from 'react';
import axios from 'axios';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';
import Loader from 'components/Loader/Loader';

const API_KEY = '33215953-674c55a945dec9bfe68981b61';
axios.defaults.baseURL = 'https://pixabay.com/api';

export default class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await axios.get(
      `/?q=${this.props.query}&page=${this.props.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.setState({ images: response.data.hits });
    this.setState({ isLoading: false });
    if (response.data.hits.length < 12) {
      this.props.onNoMoreLoad();
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ isLoading: true });
      const response = await axios.get(
        `/?q=${this.props.query}&page=${this.props.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState({ images: response.data.hits });
      this.setState({ isLoading: false });
      if (response.data.hits.length < 12) {
        this.props.onNoMoreLoad();
      }
      return;
    }

    if (this.props.page !== prevProps.page) {
      this.setState({ isLoading: true });
      const response = await axios.get(
        `/?q=${this.props.query}&page=${this.props.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState(prevState => {
        return { images: [...prevState.images, ...response.data.hits] };
      });
      this.setState({ isLoading: false });
      if (response.data.hits.length < 12) {
        this.props.onNoMoreLoad();
      }
    }
  }

  render() {
    const { images } = this.state;
    return (
      <>
        {' '}
        <ul className={styles.ImageGallery}>
          {this.state.isLoading && <Loader />}
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
      </>
    );
  }
}
