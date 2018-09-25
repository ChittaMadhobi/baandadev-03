import React, { Component } from 'react';

import '../../css/profile.css';

class DefaultMessage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mx-auto text-center">
              <div className="card card-body bg-dark text_white">
                <h5 className="card-title">
                  <strong>
                    <font color="red">Select Social Circle Work Type</font>
                  </strong>
                </h5>
                <p className="card-test">
                  Please select the Social Circle type for the the right
                  operation
                </p>
                <p className="card-test">
                  Request someone to be a part of your Social Circle
                </p>
                <p className="card-test">
                  Beyond self-evaluations, personality-tests, and Baanda
                  assessments, your social circle would provide vital reflection
                  of you.
                </p>
                <p className="card-test">
                  <font color="powderblue">
                    ** You want to get a proper reflection from your friends and
                    adversaries{' '}
                  </font>
                </p>
                <p className="card-test">
                  <font color="powderblue">
                    ** The better the assessment, better is the probability of
                    Baanda assisting you in your life journey.{' '}
                  </font>
                </p>
                <p className="card-test">
                  <font color="powderblue">
                    ** None of this self-reflection is for anyone else but you.
                    Select your Social Circle wisely.
                  </font>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultMessage;
