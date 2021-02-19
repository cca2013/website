import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
		    <a href="https://smconstructions.gr">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://media.architecturaldigest.com/photos/59398c1eda7d477a9a07f15b/16:9/w_850/hilary-newman-thea-home-venice-beach-3.jpg"
              alt=""
            /></a>
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
             Ιστοσελίδα για ανακαινίσεις κατοικιών. Δημιουργήθηκε τον Δεκέμβριο του 2020. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
