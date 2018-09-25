import React, { Component } from 'react';

class AboutTypeSelection extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="form-group text-center">
              <h5>Select your curiosity-path from the drop down</h5>
              <select
                id="aboutType"
                name="aboutType"
                className="custom-select"
                onChange={this.props.handleOnChange}
              >
                <option value="none">Select your Curiosity Area Type</option>
                <option value="overviewQuestions">
                  Overview Q&A on your Nook (Conceptual)
                </option>
                <option value="profileQuestions">
                  Profile: Q&A on your profile (How-to, user's guide)
                </option>
                <option value="taskdiaryQuestion">
                  Tasks: Q&A about Life's Tasks and Journals (User's guide)
                </option>
                <option value="societyQuestion">
                  Social Circle: Q&A about your social circle (User's guide)
                </option>
                <option value="budgetingQuestion">
                  Budgeting: Q&A - art and science of budgeting (User's guide)
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
