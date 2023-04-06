import { Component } from 'react';
import axios from 'axios';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import styles from './App.module.css';

const API_KEY = '33215953-674c55a945dec9bfe68981b61';
axios.defaults.baseURL = 'https://pixabay.com/api';

export class App extends Component {
  state = {
    images: [],
    query: 'samoyed',
    page: 1,
  };

  async componentDidMount() {
    const response = await axios.get(
      `/?q=${this.state.query}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.setState({ images: response.data.hits });
  }

  render() {
    return (
      <div class={styles.App}>
        <Searchbar />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}
