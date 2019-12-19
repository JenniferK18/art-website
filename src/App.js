import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import banner from './assets/banner-photo.jpeg';

function App() {
  return (
    <Fragment>
      <img 
        src={banner}
        style={{ width: '100%', height: 300, objectFit: 'cover' }}
        alt=""
        className="img-fluid"
      />
      <NavBar />
    </Fragment>
  );
}

export default App;
