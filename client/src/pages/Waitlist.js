// import React, {useState} from 'react';
// import {useMutation} from '@apollo/react-hooks'
// import { ADD_TO_WAIT } from '../utils/mutations';

// function Waitlist(props){
//     const[addToWait]=useState(ADD_TO_WAIT);

//     const handleFormSubmit = async event => {
//         event.preventDefault();
//         const mutationResponse = await addToWait({
//             variables:{
//                 email: formState.email, firstName: formState.firstName
//             }
//         })
//     }
// }
import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />

      <input {...register} type="radio" value="Hometown Site (Kickapoo St)" />
      <input {...register} type="radio" value=" Heritage Site (SR 3)" />
      <input {...register} type="radio" value=" No Preference" />

      <input {...register} type="radio" value="5' x 10'" />
      <input {...register} type="radio" value=" 10' x 10'" />
      <input {...register} type="radio" value=" 10' x 15'" />
      <input {...register} type="radio" value=" 10' x 20'" />

      <input type="submit" />
    </form>
  );
}