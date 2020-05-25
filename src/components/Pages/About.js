import React, { Fragment } from 'react';

export const About = () => {
  return (
    <div className="text-center mt-2">
      <div className="row">
        <div className="col-md-4">
          <img
            src="/assets/img.JPG"
            alt="tanmay"
            className=" rounded-pill img-fluid"
            style={{ width: '390px', height: '250px' }}
          />
          <h5 className="m-3">
            <strong>Created By: </strong>Tanmay{' '}
          </h5>
        </div>
        <div className="col-md-8 mt-5">
          <div className="card card-body">
            <h1>GitHub Finder</h1>
            <p>App to search GitHub Users </p>
            <p>Version- 1.0.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
