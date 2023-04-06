import React, { Component } from 'react';
import styles from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  onChange = event => {
    this.setState({ query: event.target.value });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm}>
          <button
            type="submit"
            onClick={this.props.onSubmit}
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
            onChange={this.onChange}
          />
        </form>
      </header>
    );
  }
}
