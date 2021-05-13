import React from "react";
var styles = {
	color:'black',
	backgroundColor:'lightgrey',
	fontFamily : 'italics,sans-serif',
	fontWeight:'bold'
};
var styles1 = {
	color:'blue'
	
};

function Home() {
	

  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-8">
		   <h1 class="font-weight-light">Home</h1>
            <p>
              Alpha K. web page using nodejs,react
            </p>
			
			<h6><p >Κάθε ιστο σελίδα είναι και μια ιστορία ζωής για εμας. Κάθε ιστορία και μια επιτυχία. </p>
			<p>Κάθε επιτυχία δική μας , θα είναι και <span >μια επιτυχία δική σας, αν μας εμπιστευθείτε!</span> </p></h6>
			
		
			
        </div>
		</div>
		</div>
		
		
		 <table>
		 <tr>
		 <td>
		  <a href="https://skafosbiz.wixsite.com/mysite">
		   <h2>SITES</h2>
            <img
              class="img-fluid rounded mb-4 mb-lg-0" 
              src="https://static.wixstatic.com/media/ea71bb_370144e721bc43c289bfb35fed3376d1~mv2_d_4500_2124_s_2.jpg/v1/fill/w_1224,h_534,al_b,q_85,usm_0.66_1.00_0.01/ea71bb_370144e721bc43c289bfb35fed3376d1~mv2_d_4500_2124_s_2.webp"
			 width="430" height="320" 
              alt=""
            /></a>
			</td>
			<td width='200'></td>
			<td>
			
			  <h2>Java, Nodejs, React </h2>
         <img  class="img-fluid rounded mb-4 mb-lg-0" 
		 alt="vresto.eu" src="https://static.wixstatic.com/media/0c2d11194b8042ca9f11f7f681339102.jpg/v1/fill/w_1423,h_744,al_c,q_85,usm_0.66_1.00_0.01/0c2d11194b8042ca9f11f7f681339102.webp"
         width="430" height="260" />
			
			</td>
			<div style={styles}>
			
				</div>
			</tr>
			 </table>
			
			
		
			<table>
			<tr>
			<td>
			<a href="http://vresto.eu">
			  <h2>BLOGS</h2>
         <img  class="img-fluid rounded mb-4 mb-lg-0" 
		 alt="vresto.eu" src="http://anastasiadiskonstantinos.appspot.com/images/cpa7.jpg"
         width="430" height="360" />
			</a>
			</td>
			<td width='200'></td>
			<td>
			  <h2>Business Android apps </h2>
			 <img  class="img-fluid rounded mb-4 mb-lg-0" 
		 alt="vresto.eu" src="https://cdn.pixabay.com/photo/2016/12/20/22/32/holiday-shopping-1921658__340.jpg"
         width="430" height="320" />
			</td>
			
			</tr>
			</table>

			
			
			
		


<table>
<tr>
<td>
		<h2>E-SHOPs</h2>
		<a href="http://skafosbiz.wixsite.com/eshop">
		
         <img 
		 alt="Alpha K eshops" src="https://static.wixstatic.com/media/6f5d17_cc6f156710bd4479a49aba7f435b92da~mv2.jpeg/v1/fill/w_469,h_1084,al_c,q_85/6f5d17_cc6f156710bd4479a49aba7f435b92da~mv2.webp"
         width="150" height="250" />
			</a>
		</td>
<td>		
		
		  
		  <a href="http://konstantinos.company.site">	
         <img 
		 alt="Alpha K. eshops" src="https://d2j6dbq0eux0bg.cloudfront.net/startersite/images/53402010/1616526217507.jpg"
         width="300" height="250" />
			</a>
		</td>
		<td width='200'></td>
		<td>
		 <h2>Joomla, Prestashop, Wix, Shopify, Ecwid</h2>
			 <img  class="img-fluid rounded mb-4 mb-lg-0" 
		 alt="vresto.eu" src="https://thumbs.dreamstime.com/b/top-view-mobile-phone-sunglasses-cup-coffee-pen-notebook-plant-calculator-wooden-background-written-upsell-154833948.jpg"
         width="430" height="250" />
		</td>
		</tr>
		</table>
		 </div>
		
		
        
		  
         
    
     
    
  );
}

export default Home;
