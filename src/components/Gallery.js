import React from 'react';
import ramen from '../assets/ramen.jpg';

const Gallery = () => {
    return (
        <div className="container">
            <div className="row">
                <div class="card m-4 col text-white bg-dark">
                    <img class="card-img-top pt-3" src={ramen} alt="Ramen"/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the title and make up the bulk of the content.</p>
                    </div>
                </div>
                <div class="card m-4 col text-white bg-dark">
                    <img class="card-img-top pt-3" src={ramen} alt="Ramen"/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the title and make up the bulk of the content.</p>
                    </div>
                </div>
                <div class="card m-4 col text-white bg-dark">
                    <img class="card-img-top pt-3" src={ramen} alt="Ramen"/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the title and make up the bulk of the content.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div class="card m-4 col text-white bg-dark">
                    <img class="card-img-top pt-3" src={ramen} alt="Ramen"/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the title and make up the bulk of the content.</p>
                    </div>
                </div>
                <div class="card m-4 col text-white bg-dark">
                    <img class="card-img-top pt-3" src={ramen} alt="Ramen"/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the title and make up the bulk of the content.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
