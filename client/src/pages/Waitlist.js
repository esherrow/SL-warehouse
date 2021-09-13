import React, {useState} from 'react';
import {useMutation} from '@apollo/client'
import { ADD_TO_WAIT } from '../utils/mutations';

function Waitlist(props){
    const [addToWait, { error }] = useMutation(ADD_TO_WAIT) 
    const[formState, setFormState]=useState({ first_name: '', last_name: '', phone: '', email: '', location: '', size: ''});


    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            const mutationResponse = await addToWait({
                variables:{
                    first_name: formState.firstName, last_name: formState.lastName, phone: formState.phone, email: formState.email, location: formState.location, size: formState.size 
                }
            });
        } catch (e) {
            console.log(e)
        }
    };

    const handleChange = event =>{
        const{name, value}=event.target;
        setFormState({
            ...formState, [name]:value
        });
    };

    return(
        <div className="container">
            <div className=" col ">
                <div className="row justify-content-center">
            <div className=" text-center"><h1>Join the WaitList</h1>
            <p> Please add your information to the waitlist and we will contact you when a unit is available.</p>
            </div>
            <form onSubmit={handleFormSubmit}>
                <div className="flex-row space-between justify-content-centermy-2">
                    <label className="col-md-4 control-label" htmlFor="firstName">First Name</label>  
                    <div className="col-md-4">
                        <input id="firstName" name="firstName" type="firstName" placeholder="First Name" className="form-control input-md" onChange={handleChange}/>
                        
                    </div>
                </div>

                <div className="flex-row space-between my-2">
                    <label className="col-md-4 control-label" htmlFor="lastName">Last Name</label>  
                    <div className="col-md-4">
                        <input id="lastName" name="lastName" type="text" placeholder="Last Name" className="form-control input-md" onChange={handleChange}/>
                        
                    </div>
                </div>

                <div className="flex-row space-between my-2">
                    <label className="col-md-4 control-label" htmlFor="email">Email</label>  
                    <div className="col-md-4">
                        <input id="email" name="email" type="email" placeholder="email@address.com" className="form-control input-md" onChange={handleChange}/>
                        
                    </div>
                </div>

                <div className="flex-row space-between my-2">
                    <label className="col-md-4 control-label" htmlFor="phone">Phone Number</label>  
                    <div className="col-md-4">
                        <input id="phone" name="phone" type="phone" placeholder="Phone Number" className="form-control input-md" onChange={handleChange}/>
                        
                    </div>
                </div>

                <div className="flex-row space-between my-2">
                    <label className="col-md-4 control-label" htmlFor="location">Preferred Location</label>
                    <div className="col-md-4">
                        <select id="location" name="location" className="form-control" onChange={handleChange}>
                        <option value="hometown">Hometown Site (Kickapoo St)</option>
                        <option value="heritage">Heritage Site (SR 3)</option>
                        </select>
                    </div>
                </div>

                <div className="flex-row space-between my-2">
                    <label className="col-md-4 control-label" htmlFor="size">Unit Size</label>
                    <div className="col-md-4">
                        <select id="size" name="size" className="form-control" onChange={handleChange}>
                        <option value="5x10">5' x 10'</option>
                        <option value="10x10">10' x 10'</option>
                        <option value="10x15">10' x 15'</option>
                        <option value="10x20">10' x 20'</option>
                        </select>
                    </div>
                </div>
                <div className="flex-row space-between my-2">
                    <button type="submit">Submit</button>
                </div>
            </form>
            </div>
            </div>
            </div>
    )
}

export default Waitlist;