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
    showButton: true,
  };

  onSubmit = (event, query) => {
    event.preventDefault();
    this.setState({ query: query, page: 1 });
  };

  onLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  onNoMoreLoad = () => {
    this.setState({ showButton: false });
  };

  render() {
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          query={this.state.query}
          page={this.state.page}
          onLoadMore={this.state.loadMore}
          onNoMoreLoad={this.onNoMoreLoad}
        />
        {this.state.showButton && <Button onLoadMore={this.onLoadMore} />}
      </div>
    );
  }
}
