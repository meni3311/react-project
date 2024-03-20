import React from 'react';
import { useForm } from 'react-hook-form';

const Forms = () => {


  const { register, getValues, handleSubmit, formState: { errors } } = useForm();

  const onSub = async (bodyData) => {
    delete bodyData.email2;
    console.log(bodyData);
    try {
      let url = "http://localhost:3001/users";
      let resp = await fetch(url, { method: 'POST', body: JSON.stringify(bodyData), headers: { 'content-type': 'application/json' } });
      let data = await resp.json();
      console.log(data);
      if (resp.ok) {
        alert("Success");
        window.location.href = "/login";
      } else {
        let errorMessage = await resp.text();
        alert("Try again, maybe your email is already in use");
      }
    } catch (error) {
      alert("Try again, maybe your email is already in use");
    }

  };

  return (
    <form onSubmit={handleSubmit(onSub)} className='form'>
      <div style={{ padding: "0", width: '30rem', borderRadius: '25px', border: "2px solid rgb(229, 48, 72)" }}>
        <div className="text-center text-white" style={{ background: 'rgb(229, 48, 72)', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
          <p className="h5  py-4 font-weight-bold"> Sign up </p>
        </div>
        <div className="mx-4 text-center">
          <div className="form-row mb-n4">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                <div className='' style={{ marginRight: '10px', width: '60px' }}>Name:</div>
                <input className='mt-3 form-control' {...register("name", { required: true, minLength: 5 })} label={<span style={{ color: 'red' }}>First name</span>} type="text" style={{ borderColor: 'pink', flex: 1 }} />
              </div>
              {errors.name && <span className='text-danger text-center'>enter valid name, min 5 characters</span>}
              <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                <div className='' style={{ marginRight: '10px', width: '60px' }}>Phone:</div>
                <input className='mt-3 form-control' {...register("phone", { required: true, minLength: 9, pattern: /^[0-9]+$/ })} label={<span style={{ color: 'red' }}>phone</span>} type="phone" style={{ borderColor: 'pink', flex: 1 }} />
              </div>
              {errors.phone && <span className='text-danger text-center'>enter valid phone, min 9 didits</span>}
              <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                <div className='' style={{ marginRight: '10px', width: '60px' }}>Email:</div>
                <input className='mt-3 form-control' {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} label={<span style={{ color: 'red' }}>email</span>} type="email" style={{ borderColor: 'pink', flex: 1 }} />
              </div>
              {errors.email && <span className='text-danger text-center'>Enter valid email</span>}

              <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                <div className='' style={{ marginRight: '10px', width: '60px' }}>Repeat:</div>
                <input className='mt-3 form-control' {...register("email2", {
                  required: true, validate: (value) =>
                    value === getValues("email")
                })} label={<span style={{ color: 'red' }}>email2</span>} type="phone" style={{ borderColor: 'pink', flex: 1 }} />
              </div>
              {errors.email2 && <span className='text-danger text-center'>email not match!</span>}

              <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                <div className='' style={{ marginRight: '10px', width: '60px' }}>Password: </div>
                <input className='mt-3 form-control' {...register("password", {
                  required: true,
                  minLength: 6
                })}
                  label={<span style={{ color: 'red' }}>Password</span>} type="password" style={{ borderColor: 'pink', flex: 1 }} />
              </div>
              {errors.password && <span className='text-danger text-center'>Not strong enough!</span>}
            </div>
          </div>
          <button color="dark" className="btn my-3 mx-0" style={{ borderColor: 'pink', color: 'red' }}>
            <span style={{ color: 'red' }}>Sign up</span>
          </button>
        </div>
      </div>
    </form>

  );
};
export default Forms;