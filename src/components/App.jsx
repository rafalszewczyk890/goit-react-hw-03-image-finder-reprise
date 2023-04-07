import { Component } from 'react';

import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import styles from './App.module.css';

export class App extends Component {
  state = {
    query: 'corgi',
    page: 1,
    showButton: true,
    showModal: false,
    modalPic: '',
  };

  onSubmit = (event, query) => {
    event.preventDefault();
    this.setState({ query: query, page: 1, showButton: true });
  };

  onLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  hideButton = () => {
    this.setState({ showButton: false });
  };

  showModal = largeImageURL => {
    this.setState({ showModal: true, modalPic: largeImageURL });
  };

  render() {
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery
          query={this.state.query}
          page={this.state.page}
          onLoadMore={this.state.loadMore}
          onNoMoreLoad={this.hideButton}
          onClick={this.showModal}
        />
        {this.state.showButton && <Button onLoadMore={this.onLoadMore} />}
        {this.state.showModal && <Modal src={this.state.modalPic} />}
      </div>
    );
  }
}
