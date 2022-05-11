import React, { Component } from "react";
import StudentList from "./RenewStyling";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <p>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseWidthExample"
            aria-expanded="false"
            aria-controls="collapseWidthExample"
          >
            FAQ's
          </button>
        </p>
        <div>
          <div className="collapse collapse-horizontal" id="collapseWidthExample">
            <div className="">
              <StudentList
                Title="What is My Home Insurance?"
                text="Your dream home deserves to be protected. Our My Home Insurance policy is a very affordable financial tool designed to cover your home and its contents against natural and man-made calamities such as earthquakes, floods, fire, theft, burglaries and any other risks it might be prone to."
              />
            </div>
          </div>
        </div>
        <p>
          {/* <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Toggle width collapse
  </button> */}
        </p>
        <div>
          <div className="collapse collapse-horizontal" id="collapseWidthExample">
            <div className="">
              <StudentList
                Title="What is property insurance?"
                text="Property insurance is a policy offered to homeowners who wish to cover their property structure as well as its contents, which will protect them against financial losses caused due to incidents such as fire, burglary, flood, theft, etc. You can also cover only the contents of the house that you have rented for living purpose."
              />
            </div>
          </div>
        </div>
        <p>
          {/* <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Toggle width collapse
  </button> */}
        </p>
        <div>
          <div className="collapse collapse-horizontal" id="collapseWidthExample">
            <div className="">
              <StudentList
                Title="Who is eligible to buy My Home insurance policy?"
                text="Homeowners who own a property that is not more than 50 years old can purchase our My Home Insurance policy.

        B) Tenants living in a rented accommodation, as well as others who do not have home ownership, can insure their contents of the property occupied by them."
              />
            </div>
          </div>
        </div>
        <p>
          {/* <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Toggle width collapse
  </button> */}
        </p>
        <div>
          <div className="collapse collapse-horizontal" id="collapseWidthExample">
            <div className="">
              <StudentList
                Title="How to assess the value of my home structure and its contents?"
                text="It is important to assess the value of your home structure and its contents properly before purchasing a house insurance policy, just to make sure that you are not under or over insured."
              />{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
