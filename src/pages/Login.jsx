import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
// import styles from '../my-style.module.css';

const Login = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSub = async (bodyData) => {
        let bodyObg = {
            email: bodyData.Email,
            password: bodyData.Password
        }

        let url = "http://localhost:3001/users/login";
        let resp = await fetch(url, { method: 'POST', body: JSON.stringify(bodyObg), headers: { 'Content-Type': 'application/json' } })
        let data = await resp.json();
        console.log(data);
        if (data.token) {
            localStorage.setItem('token', data.token);
            window.location.href = "/thank";
        }
        else {
            alert("Wrong email or password")
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSub)} className='form'>
                <div style={{ padding: "0", width: '30rem', borderRadius: '25px', border: "2px solid rgb(229, 48, 72)" }}>
                    <div className="text-center text-white" style={{ background: 'rgb(229, 48, 72)', borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}>
                        <p className="h5  py-4 font-weight-bold"> Login </p>
                    </div>
                    <div className="mx-4 text-center">
                        <div className="form-row mb-n4">
                            <div style={{ display: 'flex', flexDirection: 'column' }}>

                                <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className='' style={{ marginRight: '10px', width: '60px' }}>Email:</div>
                                    <input className='mt-3 form-control' {...register("Email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} label={<span style={{ color: 'red' }}>Email</span>} type="email" style={{ borderColor: 'pink', flex: 1 }} />
                                </div>
                                {errors.Email && <span className='text-danger text-center'>enter valid email</span>}

                                <div className="col" style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className='' style={{ marginRight: '10px', width: '60px' }}>Password:</div>
                                    <input className='mt-3 form-control' {...register("Password", {
                                        required: true,
                                        minLength: 6
                                    })}
                                        label={<span style={{ color: 'red' }}>Password</span>} type="password" style={{ borderColor: 'pink', flex: 1 }} />
                                </div>
                                {errors.Password && <span className='text-danger text-center'>Not strong enough!</span>}
                            </div>
                        </div>
                        <button color="dark" className="btn my-3 mx-0" style={{ borderColor: 'pink', color: 'red' }}>
                            <span style={{ color: 'red' }}>Login</span>
                        </button>
                    </div>
                </div>

            </form>
        </>

    );
};
export default Login;