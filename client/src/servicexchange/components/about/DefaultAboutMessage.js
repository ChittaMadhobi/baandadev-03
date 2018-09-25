import React, { Component } from 'react';

import '../posts/post.css';

class DefaultAboutMessage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mx-auto text-center">
              <div className="card card-body bg-dark text_white">
                <h5 className="card-title">
                  <strong>
                    <font color="red">Select Your Area of Interest below</font>
                  </strong>
                </h5>
                <p className="card-test">
                  Overview of Service Xchange related Q&A
                </p>
                <p className="card-test">
                  Please select the focused area of your interest. This contains
                  conceptual as well as field-details. In case you have
                  questions not in the lists then please look at Info-Center (at
                  the Lobby). If you don't find it there too, please feel free
                  to leave the question in Info Center and Baanda Librarian will
                  endeavor to answer that ASAP. You will be notified when your
                  question is answered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultAboutMessage;
