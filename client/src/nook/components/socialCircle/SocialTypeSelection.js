import React, { Component } from 'react';

class SelectionBox extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="form-group text-center">
              <h5>Select your ops-option from the drop down</h5>
              <select
                id="postType"
                name="postType"
                className="custom-select"
                onChange={this.props.handleOnChange}
              >
                <option value="none">Select your Post Type</option>
                <option value="createSocialCircle">
                  Invite people into your circle to reflect your image
                </option>
                <option value="connectWithCircle">
                  Connect with your Social Circle (Messages)
                </option>
                <option value="assessAndReflection">
                  Assess and get a reflection from your circle
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
