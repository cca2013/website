import React from "react";

function Home() {
	

  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
		  <Link to='https://skafosbiz.wixsite.com/mysite'>
            <img
              class="img-fluid rounded mb-4 mb-lg-0" 
              src={imageName}
			 
              alt=""
            />
			</Link>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
              Konstantinos P. Anastasiadis web page using react, nodejs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
