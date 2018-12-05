import React, { Component } from 'react';

class AboutTypeSelection extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="form-group text-center">
              <select
                id="aboutType"
                name="aboutType"
                className="custom-select"
                onChange={this.props.handleOnChange}
              >
                <option value="none">Select your Curiosity Area Type</option>
                <option value="overviewQuestions">
                  Overview Questions on Service Xchange (Conceptual)
                </option>
                <option value="postQuestions">
                  Questions about Postings (Details, like a manual)
                </option>
                <option value="dashboardQuestion">
                  Questions about Dashboard (Details, like a manual)
                </option>
                <option value="browseQuestion">
                  Questions about Browsing (Details, like a manual)
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutTypeSelection;
