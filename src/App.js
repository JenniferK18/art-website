import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import banner from './assets/banner-photo.jpeg';

function App() {
  return (
    <div className="container p-0" style={{backgroundColor: '#d3d3d3'}}>
      <img 
        src={banner}
        style={{ height: 300, objectFit: 'cover' }}
        alt=""
        className="img-fluid w-100"
      />
      <NavBar />
    </div>
  );
}

export default App;
