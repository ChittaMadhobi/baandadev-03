import React, { Component } from 'react';
import moment from 'moment';
// import ComparitiveRadarChart from '../../../../nook/components/charts/ComparitiveRadarChart';
// import SentimentGaugeChart1 from '../../../../nook/components/charts/SentimentGaugeChart1';
// import SentimentGaugeChart2 from '../../../../nook/components/charts/SentimentGaugeChart2';

import ComparitiveRadarChart from '../../../../nook/components/charts/socialcircle/ComparitiveRadarChart';
import SentimentGaugeChart1 from '../../../../nook/components/charts/socialcircle/SentimentGaugeChart1';
import SentimentGaugeChart2 from '../../../../nook/components/charts/socialcircle/SentimentGaugeChart2';

import './css/nook.css';

class SCMirrorBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comparitive: false,
      sentiment: true
    };

    this.switchToComparitive = this.switchToComparitive.bind(this);
    this.switchToSentiment = this.switchToSentiment.bind(this);
    this.showDetailMsg = this.showDetailMsg.bind(this);
  }

  showDetailMsg = () => {
    alert(
      'In production, this would lead to deeper level comparison of how you perceive yourself and how your circle perceived you.'
    );
  };

  switchToComparitive = () => {
    this.setState({
      comparitive: true,
      sentiment: false
    });
  };

  switchToSentiment = () => {
    this.setState({
      comparitive: false,
      sentiment: true
    });
  };

  render() {
    let sentimentout;
    let comparitiveout;

    // Show today's data as the time of the chart ----
    // let today = new Date();
    // let dd = today.getDate();
    // let mm = today.getMonth() + 1; //January is 0!
    // let yyyy = today.getFullYear();
    // if (dd < 10) {
    //   dd = '0' + dd;
    // }
    // if (mm < 10) {
    //   mm = '0' + mm;
    // }
    // let prtoday = mm + '/' + dd + '/' + yyyy;
    var exdate = moment();
    // var signDate = exdate.format('YYYY-MM-DD HH:mm A');
    var signDate = exdate.format('dddd, MMMM Do YYYY, h:mm:ss a');
    // -----------------------------------------------

    if (this.state.sentiment) {
      sentimentout = (
        <div className="fixedsize-gauge text-center">
          <h3>
            <font color="#4f6277">Your Circle's Sentiment Reflection</font>
          </h3>
          <strong>At: </strong>
          <font color="blue">{signDate}</font>
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-md-6">
              <div>
                <SentimentGaugeChart1 />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <SentimentGaugeChart2 />
              </div>
            </div>
          </div>
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-12">
              <div className="float-right">
                <button
                  className="btn btn-primary btn-sm shadow"
                  onClick={this.switchToComparitive}
                >
                  Show Comparitive Chart &nbsp;
                  <i className="fa fa-check" />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      sentimentout = null;
    }

    if (this.state.comparitive) {
      comparitiveout = (
        <div className="text-center">
          <h3>
            <font color="#4f6277">Assessment Superimposition</font>
          </h3>
          <strong>At: </strong>
          <font color="blue">{signDate}</font>
          <div className="row">
            <div className="col-md-3">
              <div className="row">
                <div className="col-12">
                  <p className="float-left">
                    <b>Legend</b>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <div className="square-lightblue" />
                </div>
                <div className="col-9">
                  <p className="float-left">Your 'Self' Assessment</p>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <div className="square-lightorange" />
                </div>
                <div className="col-9">
                  <p className="float-left">Social-Circle Assessment</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p className="legend-background">
                    The assessment comparison is expected to change over time as
                    your interaction, your social-circles, and/or social
                    dynamics changes.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 fixedsize-personality-radar">
              <div>
                <ComparitiveRadarChart />
              </div>
            </div>

            <div className="col-md-3">
              <div className="textspaceTop" />
              <div className="float-center">
                <button
                  className="btn btn-sm button-legend-fixed"
                  onClick={this.showDetailMsg}
                >
                  Openness&nbsp;
                  <div className="float-right">
                    <i className="fas fa-asterisk" />
                  </div>
                </button>
              </div>
              <div className="textspaceTop" />
              <div className="float-center">
                <button
                  className="btn btn-sm button-legend-fixed"
                  onClick={this.showDetailMsg}
                >
                  Conscientiousness&nbsp;
                  <div className="float-right">
                    <i className="fas fa-asterisk" />
                  </div>
                </button>
              </div>
              <div className="textspaceTop" />
              <div className="float-center">
                <button
                  className="btn btn-sm button-legend-fixed"
                  onClick={this.showDetailMsg}
                >
                  Extro- or Intro-version&nbsp;
                  <div className="float-right">
                    <i className="fas fa-asterisk" />
                  </div>
                </button>
              </div>
              <div className="textspaceTop" />
              <div className="float-center">
                <button
                  className="btn btn-sm button-legend-fixed"
                  onClick={this.showDetailMsg}
                >
                  Agreeableness&nbsp;
                  <div className="float-right">
                    <i className="fas fa-asterisk" />
                  </div>
                </button>
              </div>
              <div className="textspaceTop" />
              <div className="float-center">
                <button
                  className="btn btn-sm button-legend-fixed"
                  onClick={this.showDetailMsg}
                >
                  Neuroticism&nbsp;
                  <div className="float-right">
                    <i className="fas fa-asterisk" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="textspaceTop" />
          <div className="float-right">
            <button
              className="btn btn-primary btn-sm shadow"
              onClick={this.switchToSentiment}
            >
              Show Sentiment Gauge&nbsp;
              <i class="fas fa-check" />
            </button>
          </div>
        </div>
      );
    } else {
      comparitiveout = null;
    }

    return (
      <div>
        <div>{sentimentout}</div>
        <div>{comparitiveout}</div>
      </div>
    );
  }
}

export default SCMirrorBody;
