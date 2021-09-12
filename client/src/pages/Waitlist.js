import React, {useState} from 'react';
// import {gql, useMutation} from '@apollo/client'
import { ADD_TO_WAIT } from '../utils/mutations';

function Waitlist(props){
    const addToWait = {ADD_TO_WAIT } 
    const[formState, setFormState]=useState(ADD_TO_WAIT);

    const handleFormSubmit = async event => {
        event.preventDefault();
        await addToWait({
            variables:{
                first_name: formState.firstName, last_name: formState.lastName, phone: formState.phone, email: formState.email, location: formState.location, size: formState.size 
            }
        });
    };

    const handleChange = evt=>{
        const{name, value}=evt.target;
        setFormState({
            ...formState, [name]:value
        });
    };

    return(
        <div>
            <h1>WaitList</h1>
            <form onSubmit={handleFormSubmit}>
                <div className="flex-row space-between my-2">
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
    )
}

export default Waitlist;