import React, { Component } from 'react';

class DashTypeSelection extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="form-group text-center">
              <h5>Select SX dashboard options from the drop down</h5>
              <select
                id="postType"
                name="postType"
                className="custom-select"
                onChange={this.props.handleOnChange}
              >
                <option value="none">
                  Select your SX Dashboard type to operate{' '}
                </option>
                <option value="sxpursuits">
                  Intel of your SX pursuits per your postings{' '}
                </option>
                <option value="pursuitMessages">
                  Select Service Exchange Related Messages{' '}
                </option>
                <option value="agreements">
                  Initiate, create, and finalize agreements
                </option>
                <option value="activeSX">
                  Manage your projects and/or your endeavors
                </option>
                {/* <option value="historicSX">
                  Historic (past) projects for your references
                </option>
                <option value="sxreflection">
                  Personal SX reflections and intelligences
                </option> */}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashTypeSelection;
