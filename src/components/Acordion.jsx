import React from 'react';

function Acordion() {
  return (
    <section className="py-3 py-md-5">
      <div className="container">
        <div className="row gy-5 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6">
            <img className="img-fluid rounded" loading="lazy" src='img\FAQs.gif' alt="How can we help you?" />
          </div>
          <div className="col-12 col-lg-6">
            <div className="row justify-content-xl-end">
              <div className="col-12 col-xl-11">
                <h2 className="h1 mb-3">How can we help you?</h2>
                <p className="lead fs-4 text-secondary mb-5">We hope you have found an answer to your question. If you need any help, please search your query on our Support Center or contact us via email.</p>
                <div className="accordion accordion-flush" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingone">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseone" aria-expanded="false" aria-controls="collapseone">
                        How Does Payment System Work?
                      </button>
                    </h2>
                    <div id="collapseone" className="accordion-collapse collapse" aria-labelledby="headingone" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        A payment system is a way to transfer money from one person or organization to another. It is a complex process that involves many different parties, including banks, credit card companies, and merchants.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How Does Payment System Work?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        A payment system is a way to transfer money from one person or organization to another. It is a complex process that involves many different parties, including banks, credit card companies, and merchants.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        How Do I Cancel My Account?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>To cancel your account, please follow these steps:</p>
                        <ul>
                          <li>Go to our website and sign in to your account.</li>
                          <li>Click on your profile picture in the top right corner of the page and select "Account Settings."</li>
                          <li>Scroll to the bottom of the page and click on "Cancel Account."</li>
                          <li>Enter your password and click on "Cancel Account."</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Acordion;