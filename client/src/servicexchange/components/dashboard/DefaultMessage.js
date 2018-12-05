import React, { Component } from 'react';

import '../../css/dashboard.css';

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
                    <font color="lightgreen">
                      Select the Type of Dashboard Activity
                    </font>
                  </strong>
                </h5>
                <p className="card-test">
                  SX Pursuits are about your postings of any kind. These are yet
                  to be ... something you are pursuing.
                </p>
                <p className="card-test">
                  Manage your projects >> These are your active projects and/or
                  endeavors.
                </p>
                <p className="card-test">
                  Historic are references to your projects. This is your SX
                  memories recorded.
                </p>
                <p className="card-test">
                  <font color="powderblue">
                    Personal SX reflection >> This is if you want to know your
                    work life reflection from the world.
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
