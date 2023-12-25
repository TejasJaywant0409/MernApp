import React from "react";

export default function Card() {
  return (
    <div>
      <div className="card m-3" style={{ width: "18rem" }}>
        <img
          src="https://source.unsplash.com/random/760x420/?food"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Paneer Tikka</h5>
          <p className="card-text">Some quick example text.</p>
          <div className="container w-100">
            <select className="m-2 bg-success rounded h-100">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 bg-success rounded h-100">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <p className="d-inline m-1">Total price</p>
          </div>
        </div>
      </div>
    </div>
  );
}
