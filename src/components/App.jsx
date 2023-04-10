import { useState } from 'react';

import Button from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import styles from './App.module.css';

const dogBreeds = [
  'shiba',
  'malamute',
  'samoyed',
  'corgi',
  'collie',
  'border collie',
  'scottish collie',
  'labrador',
  'golden retriever',
  'shiba inu',
  'akita',
  'akita inu',
  'basset',
  'pitbull',
  'bulldog',
  'bullterrier',
  'fox',
  'raccoon',
  'stoat',
  'otter',
  'cat',
  'pomeranian',
  'yorkshire terrier',
  'terrier',
  'poodle',
  'dalmatian',
  'german shepherd',
  'beagle',
  'pug',
  'chihuahua',
  'great dane',
  'borzoi',
  'sheltie',
  'mastiff',
  'spaniel',
];

export const App = () => {
  const randomDog = dogBreeds[Math.floor(Math.random() * dogBreeds.length)];

  const [query, setQuery] = useState(randomDog);
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
      <Searchbar
        onSubmit={onSubmit}
        dogBreeds={dogBreeds}
        randomDog={randomDog}
      />
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
