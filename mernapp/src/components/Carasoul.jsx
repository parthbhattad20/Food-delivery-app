import React from 'react';


const Carasoul = () => {
    return(
       <div>
        <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-interval="false" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner">
    <div className='carousel-caption' style={{zIndex:"10"}}>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white" type="submit">Search</button>
    </form>
    </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/6vAjp0pscX0" className="d-block w-100" alt="..." style={{filter
    : "brightness(30%)" ,maxHeight: "620px"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="..." style={{filter
    : "brightness(30%)" ,maxHeight: "620px"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x700/?icecream" className="d-block w-100" alt="..." style={{filter
    : "brightness(30%)" ,maxHeight: "620px"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
       </div>
    )
};

export default Carasoul;

