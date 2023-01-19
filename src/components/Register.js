import React from "react";

export default function TextForm() {
  return (
    <>
    <div className="p-5 container p-6">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
        </div>
        <div className="d-flex my-3">
        <label htmlFor="firstname" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control mx-2"
          id="firstname"
        />
        <label htmlFor="last" className="form-label mx-3">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastname"
        />
        </div>
      <div className="mb-3 d-flex row">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
          New password
        </label>
        <div className="col-sm-10">
          <input type="password" className="form-control my-3" id="inputPassword" />
        </div>
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
          Confirm Password
        </label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword" />
        </div>
      </div>
      <div className="container d-flex">
      <button type="button" className="btn btn-success">Signup</button>
      <button type="button" className="btn btn-success">Clear</button>
      </div>
      </div>
    </>
  );
}
