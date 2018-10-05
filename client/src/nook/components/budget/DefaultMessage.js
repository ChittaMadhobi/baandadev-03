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
                    <font color="red">Manage your Budget and Financials</font>
                  </strong>
                </h5>
                <p className="card-test">
                  Please select one of the three personal-finance
                </p>
                <p className="card-test">
                  Your budget planning, setup and management
                </p>
                <p className="card-test">Your actual financial data input</p>

                <p className="card-test">
                  Various kinds of your financial landscape intelligence
                  reflection.
                </p>
                <br />
                <p className="card-test">
                  <font color="lightblue">
                    ** In Baanda roadmap (future scope), you would be able to
                    attach your banking, CC for direct links.
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
