import React, { Component } from 'react';

import './post.css';

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
                    <font color="red">Select Posting Type Please</font>
                  </strong>
                </h5>
                <p className="card-test">
                  Please select the posting type to render the right input-form
                </p>
                <p className="card-test">
                  More information you provide, more likely is to provide a
                  refined & right match by Baanda.
                </p>
                <p className="card-test">
                  <font color="red">**</font> Mandatory fields would be
                  mentioned.
                </p>
                <p className="card-test">
                  <font color="lightblue">**</font> Some fields not visible to
                  others; used by matching algorithms only; will be mentioned.
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
