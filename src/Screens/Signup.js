import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [signData, setsignData] = useState({
    name: "",
    mobileNo: "",
    password: "",
    location: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: signData.name,
        mobileNo: signData.mobileNo,
        password: signData.password,
        location: signData.location,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials!");
    }
  };

  const OnChange = (event) => {
    setsignData({ ...signData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={signData.name}
              onChange={OnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mobileNo" className="form-label">
              Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              name="mobileNo"
              value={signData.mobileNo}
              onChange={OnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={signData.location}
              onChange={OnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={signData.password}
              onChange={OnChange}
            />
          </div>
          <button type="submit" className="btn btn-success text-white">
            Submit
          </button>
          <Link to="/Login" className="m-3 btn btn-primary">
            Already Signed Up? Log In.
          </Link>
        </form>
      </div>
    </>
  );
}
