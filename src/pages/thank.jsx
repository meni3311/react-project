import React, { useEffect } from 'react';

const Thank = () => {
  useEffect(() => {

    const init = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          let url = "http://localhost:3001/users/userInfo";
          let resp = await fetch(url, {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              'x_api_key': token
            }
          });

          let data = await resp.json();
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      else {
        window.location.href = "/login";
      }

    }

    init();
  }, []);

  return (
    <div className='text-center'>

      <div className="row justify-content-md-center">
        <div className="">
          <div className='rounded-4' style={{ background: "pink" }}><h2 className="m-4 display-5 text-center text-danger">Good summer!</h2></div>
          <div className="text-center w-100">
            <img width={500} src="img\Super thank you.gif" alt="hg" />
          </div>
          <p className="text-secondary text-danger mb-5 text-center lead fs-4">We are a group of innovative, experienced, and proficient teams. You will love to collaborate with us.</p>
          <hr className="w-50 mx-auto mb-5 mb-xl-9 border-danger-subtle" />
        </div>
      </div>
    </div>
  );
};

export default Thank;