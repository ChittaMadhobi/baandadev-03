import React, { Component } from 'react';

import '../utils/nook.css';

class DefaultAboutMessage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="mx-auto text-center">
              <div className="card card-body bg-dark text_white">
                <h5 className="card-title">
                  <strong>
                    <font color="red">Usage Overview</font>
                  </strong>
                </h5>
                <p className="card-test">
                  Information -- All about your Nook Q&A
                </p>
                <div className="card-test text_center">
                  <font color="lightblue">
                    Step 1: Select your area of interst from the above drop
                    down.
                    <br />
                    Step 2: Click on a question and Baanda will answer.
                    <br />
                    Step 3: If your question is not on the list, ask that in
                    baanda.com
                  </font>
                  <br />
                  <br />
                  <i className="fas fa-angle-double-right" /> &nbsp;Overview:
                  Q&A on Overview: concepts of your Nook (Why, What, & How){' '}
                  <br />
                  <i className="fas fa-angle-double-right" /> &nbsp; Profile:
                  Focuses on your profile (How and Why) & roadmap <br />
                  <i className="fas fa-angle-double-right" /> &nbsp; TaskList:
                  This focus on daily chores (What and How) & roadmap <br />
                  <i className="fas fa-angle-double-right" /> &nbsp; Social
                  Circle: Focuses on your life of togetherness & roadmap <br />
                  <i className="fas fa-angle-double-right" /> &nbsp; Budgeting:
                  Provides tooling for budgeting your life & roadmap <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultAboutMessage;
