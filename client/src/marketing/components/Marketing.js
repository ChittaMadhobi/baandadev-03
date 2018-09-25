import React, { Component } from 'react';

//import SurveyNew from './reachout/SurveyNew';
import ReachoutNew from './reachout/ReachoutNew';

import mktInfo from '../img/mktInfo.png';
import mktConfig from '../img/mktConfig.png';
import mktDashboard from '../img/mktDashboard.png';
import mktInfluncer from '../img/mktInfluncer.png';

class Marketing extends Component {
  constructor() {
    super();
    this.state = {
      mktInfo: true,
      mktConfigure: false,
      mktReachout: false,
      mktDashboard: false,
      mktInfluencer: false
    };
  }

  render() {
    let finContext;

    if (this.state.mktInfo) {
      finContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={mktInfo} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.mktConfigure) {
      finContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={mktConfig} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.mktReachout) {
      finContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <ReachoutNew />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.mktDashboard) {
      finContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={mktDashboard} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.mktInfluencer) {
      finContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={mktInfluncer} width="100%" height="100%" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="finance">
        <p className="top-padding" />
        <div className="container">
          <p className="top-padding-workarea" />
          <h5 className="display-5 text-primary font-weight-bold text-center">
            Message Center
          </h5>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      mktInfo: true,
                      mktConfigure: false,
                      mktReachout: false,
                      mktDashboard: false,
                      mktInfluencer: false
                    }));
                  }}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Informs you about Baanda Financial Systems"
                >
                  About
                </button>
              </div>

              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      mktInfo: false,
                      mktConfigure: false,
                      mktReachout: true,
                      mktDashboard: false,
                      mktInfluencer: false
                    }));
                  }}
                >
                  Send Message
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      mktInfo: false,
                      mktConfigure: true,
                      mktReachout: false,
                      mktDashboard: true,
                      mktInfluencer: false
                    }));
                  }}
                >
                  Dashboard
                </button>
              </div>

              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      mktInfo: false,
                      mktConfigure: true,
                      mktReachout: false,
                      mktDashboard: false,
                      mktInfluencer: false
                    }));
                  }}
                >
                  Survey Setup
                </button>
              </div>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-6">
              <div className="fixedsize">{finContext}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Marketing;
