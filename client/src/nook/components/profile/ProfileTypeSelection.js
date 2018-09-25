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
                <option value="basicProfile">
                  Basic profil:Mostly identity related entry (mandatory start)
                </option>
                <option value="selfEval">
                  Multidimensional self-evaluation & self-perception
                </option>
                <option value="personalityTests">
                  Personality Tests with Core-Value Evaluations
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
