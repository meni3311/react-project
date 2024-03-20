import React from 'react'
import index from './index.module.css'

export default function Slider() {
  return (
    <div>

      <div>


        {/* <div>
          <div className="strip">
            <h2 style={{ fontSize: '15vw', color: 'pink', WebkitTextStroke: '2px darkolivegreen', textAlign: 'center' }}>LickIt</h2>
          </div>
          <div style={{ maxHeight: '650px' }} id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="img\1.jpg" alt="1" width="100%" />
              </div>
              <div className="carousel-item">
                <img src="img\2.jpg" alt="2" width="100%" />
              </div>
              <div className="carousel-item">
                <img src="img\3.jpg" alt="3" width="100%" />
              </div>
            </div>
          </div>
        </div> */}


<div style={{ position: 'relative' }}>
  
  <div style={{ maxHeight: '650px' }} id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="img\1.jpg" alt="1" width="100%" />
      </div>
      <div className="carousel-item">
        <img src="img\2.jpg" alt="2" width="100%" />
      </div>
      <div className="carousel-item">
        <img src="img\3.jpg" alt="3" width="100%" />
      </div>
    </div>
  </div>
</div>



        <main className="container-fluid text-center pt-5">
          <div className="container round">

            <br /><br />
            <h2 data-aos="fade-down" className="my-4 display-5 text-center">so, why looka?</h2>

            <section className="py-3 py-md-5">
              <div className="container overflow-hidden">
                <div className="row gy-5">
                  <div className="col-12">
                    <div className="row align-items-center gy-3 gy-md-0 gx-xl-5">
                      <div data-aos="fade-right" data-aos-offset="150" data-aos-easing="ease-in-sine" className="col-xs-12 col-md-6">
                        <div className="img-wrapper position-relative bsb-hover-push">
                          <a href="#!">
                            <img className="img-fluid rounded w-100 h-100 object-fit-cover" loading="lazy" src="img\m1.gif" alt="Sports" />
                          </a>
                        </div>
                      </div>
                      <div data-aos="fade-left" data-aos-offset="150" data-aos-easing="ease-in-sine" className="col-xs-12 col-md-6">
                        <div>
                          <h2 className="h1 mb-3"><a className="link-dark text-decoration-none" href="#!">Useful Skateboarding Tips For Beginners</a></h2>
                          <p className="mb-4">Learning how to skateboard can be a simultaneously exciting and terrifying experience. Explore the 20 top tips for beginner skaters.</p>
                          <a className="btn btn-dark" href="#!" target="_self">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row align-items-center flex-row-reverse gy-3 gy-md-0 gx-xl-5">
                      <div data-aos="fade-left" data-aos-offset="150" data-aos-easing="ease-in-sine" className="col-xs-12 col-md-6">
                        <div className="img-wrapper position-relative bsb-hover-push">
                          <a href="#!">
                            <img className="img-fluid rounded w-100 h-100 object-fit-cover" loading="lazy" src="img\m2.gif" alt="Travel" />
                          </a>
                        </div>
                      </div>
                      <div data-aos="fade-right" data-aos-offset="150" data-aos-easing="ease-in-sine" className="col-xs-12 col-md-6">
                        <div>
                          <h2 className="h1 mb-3"><a className="link-dark text-decoration-none" href="#!">Strange Facts About Hot Air Balloons</a></h2>
                          <p className="mb-4">You think the Wright Brothers were impressive? Hot air balloons were carrying people through the air almost a century before the Wright Brothers were even born.</p>
                          <a className="btn btn-dark" href="#!" target="_self">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row align-items-center gy-3 gy-md-0 gx-xl-5">
                      <div data-aos="fade-right" data-aos-offset="150" data-aos-easing="ease-in-sine" className="col-xs-12 col-md-6">
                        <div className="img-wrapper position-relative bsb-hover-push">
                          <a href="#!">
                            <img className="img-fluid rounded w-100 h-100 object-fit-cover" loading="lazy" src="img\m3.gif" alt="Photography" />
                          </a>
                        </div>
                      </div>
                      <div data-aos="fade-left" data-aos-offset="150" data-aos-easing="ease-in-sine" className="col-xs-12 col-md-6">
                        <div>
                          <h2 className="h1 mb-3"><a className="link-dark text-decoration-none" href="#!">Reasons Why Photography Is an Art Form</a></h2>
                          <p className="mb-4">Before the first photo was captured in the 18th century, lifelike images of what the eyes can see could only be made by talented artists.</p>
                          <a className="btn btn-dark" href="#!" target="_self">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row align-items-center flex-row-reverse gy-3 gy-md-0 gx-xl-5">
                      <div data-aos="fade-left" data-aos-offset="150" data-aos-easing="ease-in-sine" className="col-xs-12 col-md-6">
                        <div className="img-wrapper position-relative bsb-hover-push">
                          <a href="#!">
                            <img className="img-fluid rounded w-100 h-100 object-fit-cover" loading="lazy" src="img\m4.gif" alt="Food" />
                          </a>
                        </div>
                      </div>
                      <div data-aos="fade-right" data-aos-offset="350" data-aos-easing="ease-in-sine" className="col-xs-12 col-md-6">
                        <div>
                          <h2 className="h1 mb-3"><a className="link-dark text-decoration-none" href="#!">Benefits of Having a Heavy Breakfast Every Morning</a></h2>
                          <p className="mb-4">Running late for work or school? "Let’s skip the breakfast!" Well, this might sound like the most ideal idea to save time when you are on the run.</p>
                          <a className="btn btn-dark" href="#!" target="_self">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>


      </div>
    </div>)
}
