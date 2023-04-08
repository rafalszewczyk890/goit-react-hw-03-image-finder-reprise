import { useState } from 'react';

import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import styles from './App.module.css';

export const App = () => {
  // state = {
  //   query: 'corgi',
  //   page: 1,
  //   showButton: true,
  //   showModal: false,
  //   modalPic: '',
  // };

  const [query, setQuery] = useState('corgi');
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalPic, setModalPic] = useState('');

  const onSubmit = (event, query) => {
    event.preventDefault();
    // this.setState({ query: query, page: 1, showButton: true });
    setQuery(query);
    setPage(1);
    setShowButton(true);
  };

  const onLoadMore = () => {
    // this.setState(prevState => {
    //   return { page: prevState.page + 1 };
    // });
    setPage(page + 1);
  };

  const hideButton = () => {
    // this.setState({ showButton: false });
    setShowButton(false);
  };

  const showModalFunc = largeImageURL => {
    // this.setState({ showModal: true, modalPic: largeImageURL });
    setShowModal(true);
    setModalPic(largeImageURL);
  };

  const hideModal = () => {
    // this.setState({ showModal: false });
    setShowModal(false);
  };

  return (
    <div className={styles.App}>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery
        query={query}
        page={page}
        onNoMoreLoad={hideButton}
        onClick={showModalFunc}
      />
      {showButton && <Button onLoadMore={onLoadMore} />}
      {showModal && <Modal onClick={hideModal} src={modalPic} />}
    </div>
  );
};
