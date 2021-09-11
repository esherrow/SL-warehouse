import React, {useState} from 'react';
import emailjs, {init} from 'emailjs-com';
init("user_TElUtaf71wvBz8tT6fn72")

function Contact(props){
    
    
    function sendEmail(e) {
        e.preventDefault();
        const serviceID = 'default_service';
        const templateID = 'template_wl0xwja';

        emailjs.sendForm(serviceID, templateID, e.target)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }
    
    return(
        <div>
            <form className='contact-form' onSubmit={sendEmail} id="contact">
                <div className="flex-row space-between my-2 form-control">
                    <label for="from_name">Your Name</label>
                    <input type="text" name="from_name" id="from_name"/>
                </div>
                <div className="flex-row space-between my-2 form-control">
                    <label for="message">What Can We Help With?</label>
                    <textarea rows='3' name="message" id="message"/>
                </div>
                <div className="flex-row space-between my-2 form-control">
                    <label for="phone">Phone Number</label>
                    <input type="text" name="phone" id="phone"/>
                </div>
                <div className="flex-row space-between my-2 form-control">
                    <label for="email">Email Address</label>
                    <input type="text" name="email" id="email"/>
                </div>
                <div classname="col-6 mx-auto">
                    <input type="submit" id="button" className="btn btn-danger" value="Send Email" />
                </div>
            </form>
        </div>    )
};

export default Contact;