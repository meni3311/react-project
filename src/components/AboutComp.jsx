import React from 'react'
import Map from './map'

function AboutComp() {
  return (

    <main className="container-fluid">
      <div className="container round">
        <section className="py-3 py-md-5 py-xl-8">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="">
                <div className='rounded-4' style={{ background: "pink" }}><h2 className=" m-0 display-5 text-center text-danger">About us</h2></div>
                <div className="text-center p-0">
                  <img src="img\About us page.gif" alt="hg" />
                </div>
                <p className="text-secondary mb-5 text-center lead fs-4 text-danger">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto earum aut et non, eius corrupti unde a provident eos sequi numquam recusandae facilis vel corporis iusto ut tenetur laborum asperiores eum placeat, quisquam voluptatum? Minus, numquam praesentium. Alias, ipsam ullam.</p>
                <hr className="w-50 mx-auto mb-5 mb-xl-9 border-danger-subtle" />
              </div>
            </div>
          </div>
          <div className="justify-content-center text-center row p-3">
            <iframe className="col-9" width="560" height="315" src="https://www.youtube.com/embed/YGmQR8yCT_0?si=IS6MYIgOnj1eHVCx" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </section>

        {/* Team 1 - Bootstrap Brain Component */}
        <section className="py-3 py-md-5 py-xl-8">
          <div className="container">

            <div className='rounded-4' style={{ background: "pink" }}><h2 className="my-4 display-5 text-center text-danger">Location</h2></div>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-danger-subtle" />
            <div className="text-center p-0">
              <img src="img\location.gif" alt="hg" />
            </div>
            <Map />

            <div className="row justify-content-md-center">
              <div className="">
              <div className='rounded-4' style={{ background: "pink" }}><h2 className="m-4 display-5 text-center text-danger">Our Team</h2></div>
                <div className="text-center w-100">
                  <img width={500} src="img\team page.gif" alt="hg" />
                </div>
                <p className="text-secondary text-danger mb-5 text-center lead fs-4">We are a group of innovative, experienced, and proficient teams. You will love to collaborate with us.</p>
                <hr className="w-50 mx-auto mb-5 mb-xl-9 border-danger-subtle" />
              </div>
            </div>
          </div>

          <div className="container overflow-hidden">
            <div className="row gy-4 gy-lg-0 gx-xxl-5">
              <div data-aos="fade-up" data-aos-duration="3000" className="col-12 col-md-6 col-lg-3">
                <div className="card border-0 shadow-sm overflow-hidden">
                  <div className="card-body p-0 ">
                    <figure className="m-0 p-0 ">
                      <img className="img-fluid " loading="lazy" src="img\about-pic-1.jpg" alt="Flora Nyra" />
                      <figcaption className="m-0 p-4 ">
                        <h4 className="text-danger mb-1">Flora Nyra</h4>
                        <p className="text-danger mb-0">Product Manager</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="col-12 col-md-6 col-lg-3">
                <div className="card border-0 shadow-sm overflow-hidden">
                  <div className="card-body p-0">
                    <figure className="m-0 p-0">
                      <img className="img-fluid" loading="lazy" src="img\about-pic-2.jpg" alt="Evander Mac" />
                      <figcaption className="m-0 p-4">
                        <h4 className="text-danger mb-1">Evander Mac</h4>
                        <p className="text-danger mb-0">Art Director</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="3000" className="col-12 col-md-6 col-lg-3">
                <div className="card border-0 shadow-sm overflow-hidden">
                  <div className="card-body p-0">
                    <figure className="m-0 p-0">
                      <img className="img-fluid" loading="lazy" src="img\about-pic-4.jpg" alt="Taytum Elia" />
                      <figcaption className="m-0 p-4">
                        <h4 className="text-danger mb-1">Taytum Elia</h4>
                        <p className="text-danger mb-0">Investment Planner</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
              <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="col-12 col-md-6 col-lg-3">
                <div className="card border-0 shadow-sm overflow-hidden">
                  <div className="card-body p-0">
                    <figure className="m-0 p-0">
                      <img className="img-fluid" loading="lazy" src="img\about-pic-3.jpg" alt="Wylder Elio" />
                      <figcaption className="m-0 p-4">
                        <h4 className="text-danger mb-1">Wylder Elio</h4>
                        <p className="text-danger mb-0">Financial Analyst</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default AboutComp