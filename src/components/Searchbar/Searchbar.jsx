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
      <div className={styles.LogoContainer}>
        <img
          className={styles.Logo}
          src="https://media.istockphoto.com/id/1197121742/photo/happy-shiba-inu-dog-on-yellow-red-haired-japanese-dog-smile-portrait.jpg?b=1&s=170667a&w=0&k=20&c=wwQT28TwH1D06V6XYPnmp7u_6Uc1GgyJ_W4iWxaS57g="
          alt="smile for the shiba"
        ></img>
      </div>
      <p className={styles.Logotext}>Doggo finder!</p>
      <p className={styles.CurrentDog}>Current dog is: {query}</p>
      <div>
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
          <select
            name="dogbreed"
            id="dogbreed"
            className={styles.SearchFormSelect}
          >
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
      </div>
    </header>
  );
};
