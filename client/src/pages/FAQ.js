function FAQ(props){
    
    return(
        <div className="container-fluid bg-primary bg-opacity-25 pb-5 mb-5">
            <div className="row justify-content-center pt-4">
                <div className=" text-center">
                    <h1>Frequently Asked Questions</h1>
                    <p className='fs-5'></p>
                </div>
            </div>

            <div className="d-flex column-8 container justify-content-center">
                <div class="card">
                    <h5 class="card-header">Where are you located?</h5>
                    <div class="card-body">
                        <h5 class="card-title">We have two locations:</h5>
                        <p class="card-text">Heritage Site: 2310 South SR3, Hartford City, IN 47348</p>
                        <p class="card-text">Hometown Site: 1030 West Kickapoo St, Hartford City, IN 47348</p>                    
                    </div>
                </div>
                <div class="card">
                    <h5 class="card-header">What are your hours?</h5>
                    <div class="card-body">
                        <h5 class="card-title">While the units are accessible 24/7, normal business hours are 8am-5pm Monday through Friday.</h5>                    
                    </div>
                </div>
                <div class="card">
                    <h5 class="card-header">Do you offer other storage services?</h5>
                    <div class="card-body">
                        <h5 class="card-title">We no longer offer storage for boats, cars and RVs.</h5>                    
                    </div>
                </div>
                <div class="card">
                    <h5 class="card-header">What size storage units do you offer?</h5>
                    <div class="card-body">
                        <h5 class="card-title">We offer 4 sizes at each location:</h5>
                        <p class="card-text">5' x 10', 10' x 10', 10' x 15', 10' x 20'</p>                    
                    </div>
                </div>
                <div class="card">
                    <h5 class="card-header">Do you require a security deposit?</h5>
                    <div class="card-body">
                        <h5 class="card-title">Yes, one month's rent.</h5>                    
                    </div>
                </div>
                <div class="card">
                    <h5 class="card-header">When is rent due?</h5>
                    <div class="card-body">
                        <h5 class="card-title">At the beginning of the month</h5>                    
                    </div>
                </div>
            </div>

        </div>

    )
}

export default FAQ;
