import React, { Component } from 'react';

class SelectionBox extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="form-group text-center">
              <h5>
                <font color="blue">Personal Finance Management Corner</font>
              </h5>
              <select
                id="postType"
                name="postType"
                className="custom-select"
                onChange={this.props.handleOnChange}
              >
                <option value="none">Select your Budget Mgmt. Type</option>
                <option value="budgetPlanning">
                  Plan, create, and manage your budgets
                </option>
                <option value="actualIncomeExpense">
                  Manage the actuals for the budgets creates
                </option>
                <option value="financialIntel">
                  Your financial intelligence (Charts-trends)
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
