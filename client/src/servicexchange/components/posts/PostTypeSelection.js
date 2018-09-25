import React, { Component } from 'react';

class SelectionBox extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="form-group text-center">
              <select
                id="postType"
                name="postType"
                className="custom-select"
                onChange={this.props.handleOnChange}
              >
                <option value="none">Select your Post Type</option>
                <option value="srvRequestor">
                  Service Requester (Help Wanted / Job Posting)
                </option>
                <option value="srvProvider">
                  Service Provider (Will Help / Seeking Work)
                </option>
                <option value="masterForIntern">
                  Master seeking apprentice and assistance
                </option>
                <option value="internForMaster">
                  Apprentice seeking Master to learn and assist{' '}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectionBox;
