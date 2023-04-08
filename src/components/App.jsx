import { useState } from 'react';

import Button from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import styles from './App.module.css';

export const App = () => {
  const [query, setQuery] = useState('collie');
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalPic, setModalPic] = useState('');

  const onSubmit = (event, query) => {
    event.preventDefault();
    setQuery(query);
    setPage(1);
    setShowButton(true);
  };

  const onLoadMore = () => {
    setPage(page + 1);
  };

  const hideButton = () => {
    setShowButton(false);
  };

  const showModalFunc = largeImageURL => {
    setShowModal(true);
    setModalPic(largeImageURL);
  };

  const hideModal = () => {
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
