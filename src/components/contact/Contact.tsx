import React from "react";


const Contact: React.FC = () => {
  return (
    <div className="contact container mt-5">
      <div className="container">
        <h4 className="text-danger">Help & Support</h4>
        <p>Let's take a step ahead and help you better.</p>
      </div>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseichi"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What are the mandatory documents needed to list my restaurant on
              Swiggy?
            </button>
          </h2>
          <div
            id="collapseichi"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                - Copies of the below documents are mandatory <br/> - FSSAI Licence OR
                FSSAI Acknowledgement<br/> - Pan Card <br/>- GSTIN Certificate<br/> - Cancelled
                Cheque OR bank Passbook <br/>- Menu
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             After I submit all documents, how long will it take for my restaurant to go live on Swiggy?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            After all mandatory documents have been received and verified 
            t takes upto 7-10 working days for the onboarding to be completed
             and make your restaurant live on the platform.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            What is this one time Onboarding fees? Do I have to pay for it while registering?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            What is this one time Onboarding fees? Do I have to pay for it while registering?
This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. 
It is deducted from the weekly payouts after you start receiving orders from Swiggy.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsefour"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
           Who should I contact if I need help & support in getting onboarded?
            </button>
          </h2>
          <div
            id="collapsefour"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            You can connect with Partner Support on 080-67466777/68179777 or write to partnersuport@ichiraku.in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
