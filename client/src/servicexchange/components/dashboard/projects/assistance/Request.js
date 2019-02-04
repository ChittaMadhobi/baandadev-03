import React, { Component } from "react";
import Select from "react-select";
// import Slider from "react-rangeslider";

import TextAreaFieldGroup from "../../../../../utils/TextAreaFieldGroup";
import TextFieldGroup from "../../../../../utils/TextFieldGroup";

import { artGalleryTargets } from "./data/artGalleryTargets";
import { cbtlTargets } from "./data/cbtlTargets";
import { assistanceType } from "./data/assistanceType";

import "./assistance.css";

class Request extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howtoRequest: false,
      requestTarget: [],
      requestName: "",
      whatFactorDesc: "",
      whyFactorDesc: "",
      howFactorDesc: "",
      assistanceType: "",

      errors: []
    };

    this.onChange = this.onChange.bind(this);
    this.gotoRequestingProcess = this.gotoRequestingProcess.bind(this);
    this.handleChangeTarget = this.handleChangeTarget.bind(this);
    this.gotoFundReq = this.gotoFundReq.bind(this);
    this.handleRequestSave = this.handleRequestSave.bind(this);
    this.handleAssiatanceType = this.handleAssiatanceType.bind(this);
    this.handleChangeTarget = this.handleChangeTarget.bind(this);
  }

  handleChangeTarget = value => {
    this.setState({
      requestTarget: value
    });
  };

  handleAssiatanceType = value => {
    this.setState({
      assistanceType: value
    });
  };
  handleRequestSave() {
    alert(
      "At this point, in production, the request will be sent to the target(s). Target will also see it when they click the Assistance's Respond button"
    );
  }

  gotoFundReq = value => {
    //console.log('value:' + value);
    this.setState({
      requestInspectRelease: value
    });
  };

  handleChangeTarget = (value, { action }) => {
    this.setState({
      requestTarget: value
    });
  };

  gotoRequestingProcess = value => {
    this.setState({
      howtoRequest: !this.state.howtoRequest
    });
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    let engagementType = this.props.fwdProps.thisProject.msg.engagementType;
    let option;

    if (engagementType === "time-based") {
      option = cbtlTargets;
    } else {
      option = artGalleryTargets;
    }
    let requestingSteps;

    if (this.state.howtoRequest) {
      requestingSteps = (
        <div>
          <div className="row">
            <div className="how-to-create-team">
              <p>
                To make a request for assistance on a project, specify a name
                for the request (for reference) and a person(s) you want to target for help.
              </p>
              <p>
                Include all the details regarding what you need, why you need it, when
                you need it, etc. Include how you want to be assisted and if you want to 
                fund the assistance in points or some other way.
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      requestingSteps = null;
    }

    let requestPanel;
    requestPanel = (
      <div>
        <div className="space-between-buttons" />
        <div className="row">
          <div className="col-6 text-inputarea-md6">
            <TextFieldGroup
              name="requestName"
              placeholder="Give this request a unique name"
              value={this.state.requestName}
              onChange={this.onChange}
              //error={errors.newName}
              info="Give this request a name for later reference"
            />
          </div>
          <div className="col-6">
            <div className="justify-content-md-left">
              <font color="blue">
                <Select
                  value={this.state.requestTarget}
                  isMulti
                  autosize={false}
                  options={option}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handleChangeTarget}
                  maxMenuHeight={150}
                  isSearchable={true}
                  placeholder="Select target of request"
                />
              </font>
            </div>
          </div>
        </div>
        {/* <div className="space-between-buttons" /> */}
        <div className="row">
          <div className="col text-inputarea-md12">
            <TextAreaFieldGroup
              placeholder="Describe what you need help with"
              name="whatFactorDesc"
              value={this.state.whatFactorDesc}
              rows={3}
              onChange={this.onChange}
              error={errors.whatFactorDesc}
              info="Describe what you need help with. Include URL if you have one."
            />
          </div>
        </div>
        {/* <div className="space-between-buttons" /> */}
        <div className="row">
          <div className="col text-inputarea-md12">
            <TextAreaFieldGroup
              placeholder="Describe why you need help"
              name="whyFactorDesc"
              value={this.state.whyFactorDesc}
              rows={3}
              onChange={this.onChange}
              error={errors.whyFactorDesc}
              info="Describe why you are making this request."
            />
          </div>
        </div>
        {/* <div className="space-between-buttons" /> */}
        <div className="row">
          <div className="col text-inputarea-md12">
            <TextAreaFieldGroup
              placeholder="Describe how you would like to be assisted."
              name="howFactorDesc"
              value={this.state.howFactorDesc}
              rows={3}
              onChange={this.onChange}
              error={errors.howFactorDesc}
              info="Describe the approach you would like to take"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <font color="#e5c09c">Participate in expenses: </font>&nbsp;&nbsp;
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                  onClick={() => {
                    this.gotoFundReq("yes");
                  }}
                />
                Yes
              </label>
            </div>
            &nbsp;&nbsp;
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                  onClick={() => {
                    this.gotoFundReq("no");
                  }}
                />
                No
              </label>
            </div>
            &nbsp;&nbsp;
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  name="optradio"
                  onClick={() => {
                    this.gotoFundReq("part");
                  }}
                />
                Partial
              </label>
            </div>
          </div>
        </div>
        <div className="space-between-buttons" />
        <div className="row">
          <div className="col-6">
            <div className="justify-content-md-right">
              <font color="blue">
                <Select
                  value={this.state.assistanceType}
                  //isMulti
                  autosize={false}
                  options={assistanceType}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  onChange={this.handleAssiatanceType}
                  maxMenuHeight={150}
                  isSearchable={true}
                  placeholder="Select reason for request"
                />
              </font>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="float-right">
              <button className="btn-locate" onClick={this.handleRequestSave}>
                Save & Notify &nbsp;
                <i className="fas fa-check" />
              </button>
            </div>
          </div>
        </div>
        <div className="space-between-buttons" />
        <div className="space-between-buttons" />
      </div>
    );

    let output = requestPanel;

    return (
      <div>
        <div className="form-panel-create-team">
          <div className="text-center">
            <h5>Request Project Assistance</h5>
            <div className="row">
              <div className="col-md-4">
                <div className="float-left">
                  <button
                    className="btn btn-howto-assist"
                    onClick={() => {
                      this.gotoRequestingProcess("reportingSteps");
                    }}
                  >
                    How-to-steps
                    <div className="float-right">
                      <i className="fas fa-toggle-off" />
                    </div>
                  </button>{" "}
                </div>
              </div>
              {/* <div className="col-md-2">
                {" "}
                <div className="float-right"> Request To:</div>{" "}
              </div>
              <div className="col-md-6">
                <div className="justify-content-md-left">
                  <font color="blue">
                    <Select
                      value={this.state.requestTarget}
                      isMulti
                      autosize={false}
                      options={option}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={this.handleChangeTarget}
                      maxMenuHeight={150}
                      isSearchable={true}
                      placeholder="Select target of request"
                    />
                  </font>
                </div>
              </div> */}
              <div className="col-8">&nbsp;</div>
            </div>
            <div className="row">
              <div className="col">{requestingSteps}</div>
            </div>
            {output}
          </div>
        </div>
      </div>
    );
  }
}

export default Request;
