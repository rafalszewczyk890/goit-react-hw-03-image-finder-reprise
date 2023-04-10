import React, { useState, useEffect } from 'react';
import styles from './Searchbar.module.css';
import { nanoid } from 'nanoid';

export const Searchbar = props => {
  const [query, setQuery] = useState('');

  const onChange = event => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    setQuery(props.randomDog);
  }, []);

  return (
    <header className={styles.Searchbar}>
      <img src="./images/header.jpg" alt="smile for the shiba"></img>
      <p>Current dog is: {query}</p>
      <form className={styles.SearchForm}>
        <button
          type="submit"
          onClick={event => {
            props.onSubmit(event, query);
          }}
          className={styles.SearchFormbutton}
        >
          <span className={styles.SearchFormbuttonlabel}>Search</span>
        </button>

        <input
          className={styles.SearchForminput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
          value={query}
        />
      </form>
      <form
        onChange={event => {
          setQuery(event.target.value);
        }}
        value={query}
      >
        <select name="dogbreed" id="dogbreed">
          {props.dogBreeds.map(dogBreed => {
            return (
              <option
                key={nanoid()}
                value={dogBreed}
                selected={dogBreed === query}
              >
                {dogBreed}
              </option>
            );
          })}
        </select>
      </form>
    </header>
  );
};
