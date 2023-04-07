import React, { Component } from 'react';
import { Audio } from 'react-loader-spinner';

export default class Loader extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: 'grey',
          position: 'fixed',
          top: '50%',
          left: '50%',
          padding: '20px',
          borderRadius: '5px',
        }}
      >
        <Audio
          height="80"
          width="80"
          radius="9"
          color="white"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      </div>
    );
  }
}
