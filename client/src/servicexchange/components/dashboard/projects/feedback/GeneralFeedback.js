import React, { Component } from "react";
import Select from "react-select";
import Slider from "react-rangeslider";

import TextAreaFieldGroup from "../../../../../utils/TextAreaFieldGroup";
import "./feedback.css";
import { artGalleryMembers } from "./data/artGalleryMembers";
import { cbtlMembers } from './data/cbtlMembers';

class GeneralFeedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howtogenfeedback: false,
      feedbackOf: null,

      teamPlayer: 0,
      domainKB: 0,
      deliveryTime: 0,
      punctuality: 0,
      imaginative: 0,
      communication: 0,
      issueSolver: 0,
      verboseFeedback: "",

      errors: []
    };

    this.gotoFeedbackProcess = this.gotoFeedbackProcess.bind(this);
    this.handleChangeTarget = this.handleChangeTarget.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick() {
    alert(
      "This is a UX or usability experience. Your entries are not currently being saved or validated. When released, the click of this button will save the feedback entered for processing."
    );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handSliderOnChange = (value, sliderName) => {
    //console.log("value: " + value + " --SN: " + sliderName);
    // console.log("got here :" + value);
    for (let name in this.state) {
      if (name === sliderName) {
        this.setState({
          [name]: value
        });
      }
    }

    // for (let name in this.state) {
    //   if (name !== value) {
    //     this.setState({
    //       [name]: false
    //     });
    //   } else {
    //     this.setState({
    //       [name]: true
    //     });
    //   }
    // }
  };

  handleChangeTarget = (value, { action }) => {
    this.setState({
      feedbackOf: value
    });
  };

  gotoFeedbackProcess = value => {
    if (value === "feedbackSteps") {
      this.setState({
        howtogenfeedback: !this.state.howtogenfeedback
      });
    }
  };

  render() {
    // console.log('this.props: ' +  JSON.stringify(this.props.fwdProps.thisProject.msg.engagementType));
    let engagementType = this.props.fwdProps.thisProject.msg.engagementType;
    let options;

    if (engagementType === 'time-based') {
      options = cbtlMembers;
    } else {
      options = artGalleryMembers;
    }
    
    const { errors } = this.state;
    let feedbackSteps, feedbackBody;
    feedbackBody = null;

    if (this.state.howtogenfeedback) {
      feedbackSteps = (
        <div>
          <div className="row">
            <div className="how-to-create-team">
              You are encouraged to provide feedback at any point of time and as often as you like
              throughout the life of the project. All sliders range from -5 to 5 with
              default set to 0. If you leave a slider on 0, it means that you are not
              commenting in that dimension right now. :
              <ul>
                <li>Team Player: How good a team player is he/she?</li>
                <li>
                  Domain Knowledge: How much does he/she know about the work you're doing?
                </li>
                <li>Delivery Time: Does he/she get his/her work done on time?</li>
                <li>Punctuality: Is he/she punctual?</li>
                <li>
                  Imaginative: Do you think he/she is a creative thinker in this field of work?
                </li>
                <li>
                  Communication: Do you think his/her communication style is effective?
                </li>
                <li>
                  Issue Solver: Faced with an issue, what is your perspective of
                  his/her ability to solve it?
                </li>
              </ul>
              Additionally, please provide a comment detailing
              your recommendations for improvement etc. if any.
            </div>
          </div>
        </div>
      );
    } else {
      feedbackSteps = null;
    }

    feedbackBody = (
      <div>
        <div className="row">
          <div className="col-4">
            <div className="text-padding float-right">Team Player: </div>
          </div>
          <div className="col-6">
            <div className="slider-padding">
              <Slider
                value={this.state.teamPlayer}
                orientation="horizontal"
                min={-5}
                max={5}
                handleLabel={"--Pts"}
                onChange={e => {
                  this.handSliderOnChange(e, "teamPlayer");
                }}
              />
            </div>
          </div>
          <div className="col-2 text-center">
            <div className="text-padding float-left">
              <font color="lightgreen">{this.state.teamPlayer}</font>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <div className="text-padding float-right">Domain Knowledge: </div>
          </div>
          <div className="col-6">
            <div className="slider-padding">
              <Slider
                value={this.state.domainKB}
                orientation="horizontal"
                min={-5}
                max={5}
                handleLabel={"--Pts"}
                onChange={e => {
                  this.handSliderOnChange(e, "domainKB");
                }}
              />
            </div>
          </div>
          <div className="col-2 text-center">
            <div className="text-padding float-left">
              <font color="lightgreen">{this.state.domainKB}</font>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <div className="text-padding float-right">Delivery Time: </div>
          </div>
          <div className="col-6">
            <div className="slider-padding">
              <Slider
                value={this.state.deliveryTime}
                orientation="horizontal"
                min={-5}
                max={5}
                handleLabel={"--Pts"}
                onChange={e => {
                  this.handSliderOnChange(e, "deliveryTime");
                }}
              />
            </div>
          </div>
          <div className="col-2 text-center">
            <div className="text-padding float-left">
              <font color="lightgreen">{this.state.deliveryTime}</font>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <div className="text-padding float-right">Punctuality: </div>
          </div>
          <div className="col-6">
            <div className="slider-padding">
              <Slider
                value={this.state.punctuality}
                orientation="horizontal"
                min={-5}
                max={5}
                handleLabel={"--Pts"}
                onChange={e => {
                  this.handSliderOnChange(e, "punctuality");
                }}
              />
            </div>
          </div>
          <div className="col-2 text-center">
            <div className="text-padding float-left">
              <font color="lightgreen">{this.state.punctuality}</font>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <div className="text-padding float-right">Imaginative: </div>
          </div>
          <div className="col-6">
            <div className="slider-padding">
              <Slider
                value={this.state.imaginative}
                orientation="horizontal"
                min={-5}
                max={5}
                handleLabel={"--Pts"}
                onChange={e => {
                  this.handSliderOnChange(e, "imaginative");
                }}
              />
            </div>
          </div>
          <div className="col-2 text-center">
            <div className="text-padding float-left">
              <font color="lightgreen">{this.state.imaginative}</font>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <div className="text-padding float-right">Communication: </div>
          </div>
          <div className="col-6">
            <div className="slider-padding">
              <Slider
                value={this.state.communication}
                orientation="horizontal"
                min={-5}
                max={5}
                handleLabel={"--Pts"}
                onChange={e => {
                  this.handSliderOnChange(e, "communication");
                }}
              />
            </div>
          </div>
          <div className="col-2 text-center">
            <div className="text-padding float-left">
              <font color="lightgreen">{this.state.communication}</font>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <div className="text-padding float-right">Issue Solver: </div>
          </div>
          <div className="col-6">
            <div className="slider-padding">
              <Slider
                value={this.state.issueSolver}
                orientation="horizontal"
                min={-5}
                max={5}
                handleLabel={"--Pts"}
                onChange={e => {
                  this.handSliderOnChange(e, "issueSolver");
                }}
              />
            </div>
          </div>
          <div className="col-2 text-center">
            <div className="text-padding float-left">
              <font color="lightgreen">{this.state.issueSolver}</font>
            </div>
          </div>
        </div>
        <div className="textspaceTop" />
        <div className="row">
          <div className="col-12">
            <TextAreaFieldGroup
              placeholder="Provide detailed comment."
              name="verboseFeedback"
              value={this.state.verboseFeedback}
              rows={4}
              onChange={this.onChange}
              error={errors.verboseFeedback}
              info="Provide details to backup the scores you gave above."
            />
          </div>
        </div>
        <div className="textspaceTop" />
        <div className="float-right">
          <button className="btn-check-ideation" onClick={this.handleSaveClick}>
            Save &nbsp;
            <div className="float-right">
              <i className="fa fa-check" />
            </div>
          </button>
        </div>
      </div>
    );

    return (
      <div>
        <div className="form-panel-create-team">
          <div className="text-center">
            <h3>General Feedback</h3>
            <font color="green">
              <div className="row">
                <div className="col-md-4">
                  <div className="float-left">
                    <button
                      className="btn control-btn-review"
                      onClick={() => {
                        this.gotoFeedbackProcess("feedbackSteps");
                      }}
                    >
                      How-To Steps
                      <div className="float-right">
                        <i className="fas fa-toggle-off" />
                      </div>
                    </button>{" "}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="justify-content-md-left">
                    <Select
                      value={this.state.feedbackOf}
                      //isMulti
                      autosize={false}
                      options={options}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={this.handleChangeTarget}
                      maxMenuHeight={150}
                      isSearchable={true}
                      placeholder="Select individual"
                    />
                  </div>
                </div>
                <div className="col-md-2"> &nbsp;</div>
                {/* </div> */}
              </div>
              <div className="row">
                <div className="col">{feedbackSteps}</div>
              </div>
            </font>
            {feedbackBody}
          </div>
        </div>
      </div>
    );
  }
}

export default GeneralFeedback;
