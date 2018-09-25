import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
//import serviceExchangeInfo from '../img/serviceExchangeInfo.png';

import sxDashboard from '../img/sxDashboard.png';
import HelpWantedMatch from '../components/matches/HelpWantedMatch';
import SxPost from './posts/PostContainer';
import SxAbout from './about/AboutContainer';

class SXchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      name: '',
      counter: 0,
      errors: {},
      defaultSXInfo: true,
      createManageProfile: false,
      yourDashboard: false,
      coWorkMatch: false,
      coWorkBrowse: false
    };

    this.input = React.createRef();
  }

  componentDidMount() {
    console.log('componentDidMount()');
    if (this.props.auth.isAuthenticated) {
      this.setState({ name: this.props.auth.user.name });
    } else {
      if (this.state.start) {
        return <Redirect to="/" />;
      }
    }
  }

  render() {
    //const { errors } = this.state;
    let SXContext = '';

    if (this.state.defaultSXInfo) {
      SXContext = (
        <div className="fixedsize">
          <div className="pictures">
            <SxAbout />
          </div>
        </div>
      ); 
    }

    if (this.state.createManageProfile) {
      SXContext = (
        <div className="fixedsize">
          <div>
            <div className="pictures">
              <SxPost />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.yourDashboard) {
      SXContext = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <img src={sxDashboard} width="100" height="650" alt="..." />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.coWorkMatch) {
      SXContext = (
        <div className="fixedsize">
          <div>
            <div className="pictures">
              <HelpWantedMatch />
            </div>
          </div>
        </div>
      );
    }

    if (this.state.coWorkBrowse) {
      SXContext = (
        <div className="fixedsize">
          <div>
            <div className="pictures">
              <h3>CoWork Browse</h3>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="library">
        <p className="top-padding" />
        <div className="container">
          <p className="top-padding-workarea" />
          <h4 className="display-5 text-center">
            <b>Service Xchange</b>
          </h4>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      defaultSXInfo: true,
                      createManageProfile: false,
                      yourDashboard: false,
                      coWorkMatch: false,
                      coWorkBrowse: false
                    }));
                  }}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Overview of Service Xchange."
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
                      defaultSXInfo: false,
                      createManageProfile: true,
                      yourDashboard: false,
                      coWorkMatch: false,
                      coWorkBrowse: false
                    }));
                  }}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Please create and  manage your profile."
                >
                  Post
                </button>
              </div>

              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      defaultSXInfo: false,
                      createManageProfile: false,
                      yourDashboard: true,
                      coWorkMatch: false,
                      coWorkBrowse: false
                    }));
                  }}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Your SX Dashboard."
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
                      defaultSXInfo: false,
                      createManageProfile: false,
                      yourDashboard: false,
                      coWorkMatch: true,
                      coWorkBrowse: false
                    }));
                  }}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Engage in service exchange process."
                >
                  Matches
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-lg btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      defaultSXInfo: false,
                      createManageProfile: false,
                      yourDashboard: false,
                      coWorkMatch: false,
                      coWorkBrowse: true
                    }));
                  }}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Engage in service exchange process."
                >
                  Browse
                </button>
              </div>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-6">
              <div>{SXContext}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SXchange.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(SXchange);
