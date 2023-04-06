import { Component } from 'react';

import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import styles from './App.module.css';

export class App extends Component {
  state = {
    query: 'samoyed',
    page: 1,
  };

  render() {
    return (
      <div class={styles.App}>
        <Searchbar />
        <ImageGallery query={this.state.query} images={this.state.images} />
      </div>
    );
  }
}
