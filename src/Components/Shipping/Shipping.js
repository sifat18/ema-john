import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import useAuth from '../../Utils/useAuth';

const Shipping = () => {
    const { user } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const history = useHistory()
    const onSubmit = data => {
        console.log(data)
        history.push('/placeorder')
    };

    // const handleclick = () => {
    //     history.push('/placeorder')
    // }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input className='login-input' defaultValue={user.displayName} {...register("name", { required: true })} />
            <input className='login-input' defaultValue={user.email} {...register("email", { required: true })} />
            {errors.email?.type === 'required' && <span style={{ marginLeft: '45%', color: 'red' }}>This field is required</span>}

            <input className='login-input' placeholder='address' {...register("Address", { required: true })} />
            {errors.Address?.type === 'required' && <span style={{ marginLeft: '45%', color: 'red' }}>This field is required</span>}

            <input className='btn login-input' type="submit" />
        </form>
    );
};

export default Shipping;