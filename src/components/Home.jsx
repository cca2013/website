import React from "react";

function Home() {
	

  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
		   <h1 class="font-weight-light">Home</h1>
            <p>
              Konstantinos P. Anastasiadis web page using react, nodejs
            </p>
         <h2>ΙΣΤΟΣΕΛΙΔΕΣ </h2>
		  <a href="https://skafosbiz.wixsite.com/mysite">
            <img
              class="img-fluid rounded mb-4 mb-lg-0" 
              src="https://static.wixstatic.com/media/ea71bb_370144e721bc43c289bfb35fed3376d1~mv2_d_4500_2124_s_2.jpg/v1/fill/w_1224,h_534,al_b,q_85,usm_0.66_1.00_0.01/ea71bb_370144e721bc43c289bfb35fed3376d1~mv2_d_4500_2124_s_2.webp"
			 width="430" height="240" 
              alt=""
            /></a>
			<p></p><p></p>
			<a href="http://vresto.eu">
         <img  class="img-fluid rounded mb-4 mb-lg-0" 
		 alt="K.P.Anastasiadis-vresto.eu" src="http://anastasiadiskonstantinos.appspot.com/images/cpa7.jpg"
         width="430" height="170" />
			</a>
			</div>

			<div class="row align-items-center my-8">
		
		<a href="http://skafosbiz.wixsite.com/eshop">
         <img  class="img-fluid rounded mb-4 mb-lg-0" 
		 alt="K.P.Anastasiadis-eshops" src="https://static.wixstatic.com/media/6f5d17_cc6f156710bd4479a49aba7f435b92da~mv2.jpeg/v1/fill/w_469,h_1084,al_c,q_85/6f5d17_cc6f156710bd4479a49aba7f435b92da~mv2.webp"
         width="300" height="80" />
			</a>
		 <h2>E-SHOPs</h2>
          </div>
		  
         
        </div>
      </div>
    </div>
  );
}

export default Home;
