import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class CoperativeLife extends Component {
  constructor() {
    super();
    this.state = {
      start: false,
      name: '',
      counter: 0,
      CoopInfo: true,
      coopPost: false,
      coopDashboard: false,
      coopBrowse: false
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
    let coopWorkPanel;

    if (this.state.CoopInfo) {
      coopWorkPanel = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <h3>Cooperation Guide</h3>
            </div>
          </div>
        </div>
      );
    }

    if (this.state.coopPost) {
      coopWorkPanel = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <h3>Post Coops</h3>
            </div>
          </div>
        </div>
      );
    }

    if (this.state.coopDashboard) {
      coopWorkPanel = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <h3>Dashboard</h3>
            </div>
          </div>
        </div>
      );
    }

    if (this.state.coopBrowse) {
      coopWorkPanel = (
        <div className="fixedsize">
          <div className="workarea-padding">
            <div className="pictures">
              <h3>Browse</h3>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="nook">
        <p className="top-padding" />
        <div className="container">
          <p className="top-padding-workarea" />
          <h4 className="display-5 text-center">Cooperative Life</h4>
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      CoopInfo: true,
                      coopPost: false,
                      coopDashboard: false,
                      coopBrowse: false
                    }));
                  }}
                >
                  About
                </button>
              </div>

              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      CoopInfo: false,
                      coopPost: true,
                      coopDashboard: false,
                      coopBrowse: false
                    }));
                  }}
                >
                  Post
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      CoopInfo: false,
                      coopPost: false,
                      coopDashboard: true,
                      coopBrowse: false
                    }));
                  }}
                >
                  Dashboard
                </button>
              </div>
              <div className="demobuttons">
                <button
                  className="btn btn-outline-primary btn-block btn-sm mt-4"
                  type="button"
                  onClick={() => {
                    this.setState(preState => ({
                      CoopInfo: false,
                      coopPost: false,
                      coopDashboard: false,
                      coopBrowse: true
                    }));
                  }}
                >
                  Browse
                </button>
              </div>
            </div>
            <div className="col-lg-10 col-md-8 col-sm-6">{coopWorkPanel}</div>
          </div>
        </div>
      </div>
    );
  }
}

CoperativeLife.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(CoperativeLife);
