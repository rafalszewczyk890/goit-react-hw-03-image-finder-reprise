import React, { Component } from 'react';
import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormbutton}>
            <span className={styles.SearchFormbuttonlabel}>Search</span>
          </button>

          <input
            className={styles.SearchForminput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
