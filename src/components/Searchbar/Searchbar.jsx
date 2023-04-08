import React, { useState } from 'react';
import styles from './Searchbar.module.css';

export const Searchbar = props => {
  const [query, setQuery] = useState('');

  const onChange = event => {
    setQuery(event.target.value);
  };

  return (
    <header className={styles.Searchbar}>
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
        />
      </form>
    </header>
  );
};
