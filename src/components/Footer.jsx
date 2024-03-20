import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center container">
    <div className="container p-4">
      <section className="mb-4">
        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i
            className="fab fa-facebook-f"></i></a>

        <a data-mdb-ripple-init className=" btn btn-outline btn-floating m-1" href="#!" role="button"><i
            className="fab fa-twitter"></i></a>

        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i
            className="fab fa-google"></i></a>

        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i
            className="fab fa-instagram"></i></a>

        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i
            className="fab fa-linkedin-in"></i></a>

        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button"><i
            className="fab fa-github"></i></a>
      </section>
      <section className="">
        <form action="">
          <div className="row d-flex justify-content-center">
            <div className="col-auto">
              <p className="pt-2">
                <strong>Sign up:</strong>
              </p>
            </div>
            <div className="col-md-5 col-12">
              <div data-mdb-input-init className="form-outline mb-4">
                <input type="email" id="form5Example24" className="form-control" />
                <label className="form-label" htmlFor="form5Example24">Email address</label>
              </div>
            </div>
            <div className="col-auto">
              <button data-mdb-ripple-init type="submit" className="btn btn-outline mb-4">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </section>
      <section className="mb-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
          repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum
          harum corrupti dicta, aliquam sequi voluptate quas.
        </p>
      </section>

    </div>
  </footer>
  )
}

export default Footer