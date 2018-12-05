import React, { Component } from 'react';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import { RadioGroup, Radio } from 'react-radio-group';

import TextFieldGroup from './TextFieldGroup';
import TextAreaFieldGroup from './TextAreaFieldGroup';

class CoopPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postType: 'CoopPost',
      postName: '',
      postCaption: '',
      workshopAddress: '',
      workshopZipCode: '',
      masterDescription: '',
      specialTrainingArea1: '',
      specialTrainingArea2: '',
      highLevelOtherDomain: '',
      coopName: '',
      specilToolRequeredList: '',
      specialToolRequired: true,
      volume: 5,
      specialTraining: false,
      selectedValue: 'no',
      selectedBackgroundCheck: 'yes',
      diffWorkshopAddr: false,
      metaTagList: '',
      coopurl: '',

      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSpecialTrainingCheck = this.handleSpecialTrainingCheck.bind(
      this
    );
    this.handleSpecialToolReq = this.handleSpecialToolReq.bind(this);
    this.handleDiffShopaddr = this.handleDiffShopaddr.bind(this);
    this.handleBackgroundCheck = this.handleBackgroundCheck.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handlePostClick = this.handlePostClick.bind(this);
  }

  handlePostClick() {
    alert(
      'Eventually -- When you click this, your work will be saved in database and posted at the same time and visible to others. This would be available in your dashboard for you to ask intelligence, connect etc.'
    );
  }

  handleSaveClick() {
    alert(
      'Eventually -- When you click this, your work will be saved in database. This post will appear in your dashboard as not-posted. You can post it from there. Your account will not be charged till you post.'
    );
  }

  handleBackgroundCheck(value) {
    console.log('background value:' + value);
    this.setState({
      selectedBackgroundCheck: value
    });
  }

  handleDiffShopaddr() {
    this.setState({
      diffWorkshopAddr: !this.state.diffWorkshopAddr
    });
  }

  handleSpecialToolReq(value) {
    //console.log(value);
    this.setState({
      selectedValue: value
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  handleOnChange = value => {
    this.setState({
      volume: value
    });
  };

  handleSpecialTrainingCheck() {
    //let xx = document.getElementById('inlineCheckbox1').value;
    //console.log('Value of textbox1 selected:' + xx);
    this.setState({
      specialTraining: !this.state.specialTraining
    });
  }

  render() {
    const { errors } = this.state;

    let specialTool;
    if (this.state.selectedValue === 'yes') {
      specialTool = (
        <div>
          <TextFieldGroup
            name="specilToolRequeredList"
            placeholder="List tools, comma separated"
            value={this.state.specilToolRequeredList}
            onChange={this.onChange}
            error={errors.specilToolRequeredList}
            info="List tools comma(,) separated: "
            must="Mandatory"
          />
        </div>
      );
    } else {
      specialTool = (
        <div>
          <font color="green">
            <b>Any tools preferred for the co-op </b>
          </font>
        </div>
      );
    }

    let askAddr;
    if (this.state.diffWorkshopAddr) {
      askAddr = (
        <div className="row">
          <div className="col-md-6">
            <TextFieldGroup
              name="workshopAddress"
              placeholder="Enter Co-op location Address"
              value={this.state.workshopAddress}
              onChange={this.onChange}
              error={errors.workshopAddress}
              info="If virtual, state overall geo-location (city,country)."
              must="Mandatory"
            />
          </div>
          <div className="col-md-6">
            <TextFieldGroup
              name="workshopZipCode"
              placeholder="Enter location zipcode ...(postal code)"
              value={this.state.workshopZipCode}
              onChange={this.onChange}
              error={errors.workshopZipCode}
              info="Address zip code :: "
              must="Mandatory"
            />
          </div>
        </div>
      );
    } else {
      askAddr = null;
    }

    let specialTrainingDesc;
    if (this.state.specialTraining) {
      specialTrainingDesc = (
        <div className="row">
          <div className="col-md-6">
            <TextFieldGroup
              name="specialTrainingArea1"
              placeholder="Primary special training"
              value={this.state.specialTrainingArea1}
              onChange={this.onChange}
              error={errors.specialTrainingArea1}
              info="State your primary training area :: "
              must="Mandatory"
            />
          </div>
          <div className="col-md-6">
            <TextFieldGroup
              name="specialTrainingArea2"
              placeholder="Secondary special training in ..."
              value={this.state.specialTrainingArea2}
              onChange={this.onChange}
              error={errors.specialTrainingArea2}
              info="Enter secondary special training in :: "
            />
          </div>
        </div>
      );
    } else {
      specialTrainingDesc = null;
    }

    return (
      <div className="container">
        <h4>
          <p className="text-center text-primary font-weight-bold">
            Cooperative Formation Initiative
          </p>
        </h4>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-md-5">
              <TextFieldGroup
                name="postName"
                placeholder="Enter Co-op Posting name ..."
                value={this.state.postName}
                onChange={this.onChange}
                error={errors.postName}
                info="A name for you to dashboard Ref :: "
                must="Mandatory"
              />
            </div>
            <div className="col-md-1">
              <button
                className="btn btn-outline-info btn-xsm"
                data-toggle="tooltip"
                data-placement="top"
                title="This would be a name for you to refer in your dashboard."
              >
                ?
              </button>
            </div>
            <div className="col-md-5">
              <TextFieldGroup
                name="postCaption"
                placeholder="Enter Caption name ..."
                value={this.state.postCaption}
                onChange={this.onChange}
                error={errors.postCaption}
                info="Visible to your the people who may join you:: "
                must="Mandatory"
              />
            </div>
            <div className="col-md-1">
              <button
                className="btn btn-outline-info btn-xsm"
                data-toggle="tooltip"
                data-placement="top"
                title="Enter a catchy name for others to notice. This would be posted/published."
              >
                ?
              </button>
            </div>
          </div>

          <div className="form-check form-check-inline">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                value="option1"
                checked={this.state.diffWorkshopAddr}
                onChange={this.handleDiffShopaddr}
              />{' '}
              <font color="green">
                Check if your Co-op location is different from home.
              </font>
            </label>
          </div>
          {askAddr}

          <div className="textspaceTop" />
          <div className="row">
            <div className="col-12">
              <TextAreaFieldGroup
                placeholder="This would be somewhat elaborate to excite people to join in or for Baanda to feel the sentiment of the co-op."
                name="masterDescription"
                value={this.state.masterDescription}
                onChange={this.onChange}
                error={errors.masterDescription}
                rows={5}
                info="Describe your vision of the co-operative ::"
                must="Mandatory"
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <TextFieldGroup
                name="coopName"
                placeholder="Enter your Co-op name ..."
                value={this.state.coopName}
                onChange={this.onChange}
                error={errors.coopName}
                info="Enter a co-op name even as a placeholder : "
                must="Mandatory"
              />
            </div>
            <div className="col-md-6">
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                    checked={this.state.specialTrainingCheck}
                    onChange={this.handleSpecialTrainingCheck}
                  />{' '}
                  <font color="green">
                    Check if any special trainings/expertise is required.
                  </font>
                </label>
              </div>
            </div>
          </div>
          {specialTrainingDesc}
          <div className="row">
            <div className="col-md-6">
              <div className="float-left slider-text-paddig">
                <h5>
                  Age of the co-op (zero if new) :
                  <font color="blue">
                    <strong> {this.state.volume}</strong>
                  </font>
                </h5>
              </div>
            </div>
            <div className="col-md-6">
              <Slider
                value={this.state.volume}
                orientation="horizontal"
                max={20}
                handleLabel={'--Years'}
                onChange={this.handleOnChange}
              />
            </div>
          </div>
          <div className="textspaceTop" />

          <div className="row">
            <div className="col-md-6">
              <div className="input-group mb-3">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="inputGroupFile02"
                  />
                  <label className="custom-file-label">
                    Co-op brochure ...
                  </label>
                </div>
                <div className="input-group-append">
                  <span className="input-group-text" id="">
                    Upload
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <p>
                <small>Upload any document, brocure (if you have one).</small>
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <RadioGroup
                name="specialToolRequired"
                selectedValue={this.state.selectedValue}
                onChange={this.handleSpecialToolReq}
              >
                {' '}
                <label>
                  <h6>Require personal tool? &nbsp;&nbsp;</h6>
                </label>
                <label>
                  <Radio value="yes" />
                  &nbsp;Yes &nbsp;&nbsp;
                </label>
                <label>
                  <Radio value="no" />
                  &nbsp;No
                </label>
              </RadioGroup>
            </div>
            <div className="col-md-6">{specialTool}</div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <RadioGroup
                name="yourProfession"
                selectedValue={this.state.selectedBackgroundCheck}
                onChange={this.handleBackgroundCheck}
              >
                {' '}
                <label>
                  <h6>Background check OK? &nbsp;&nbsp;</h6>
                </label>
                <label>
                  <Radio value="yes" />
                  &nbsp;OK&nbsp;&nbsp;
                </label>
                <label>
                  <Radio value="no" />
                  &nbsp;Not-OK&nbsp;&nbsp;
                </label>
              </RadioGroup>
            </div>
            <div className="col-md-6">&nbsp;</div>
          </div>
          <div className="textspaceTop" />
          <div className="row">
            <div className="col-md-6">
              <TextFieldGroup
                name="metaTagList"
                placeholder="Meta-tag best describe your Co-op ..."
                value={this.state.metaTagList}
                onChange={this.onChange}
                error={errors.metaTagList}
                info="Enter meta-tag words, comma separated : "
                must="Mandatory"
              />
            </div>
            <div className="col-md-6">
              <TextFieldGroup
                name="coopurl"
                placeholder="Enter your co-op URL ..."
                value={this.state.coopurl}
                onChange={this.onChange}
                error={errors.coopurl}
                info="If co-op has a web-site, paste the URL here : "
                must="Mandatory"
              />
            </div>
          </div>
          <div className="textspaceTop" />
          <div className="text-center">
            <div className="row">
              <div className="col">
                <font color="#1b7018">
                  <h6>
                    Co-op is an endeavor of peers. You are not looking for
                    people to work FOR you but to join you and/or work WITH you.
                    If you want someone to work for pay (employee or freepancer)
                    please post as 'service request / Help Wanted' section.
                  </h6>
                </font>
              </div>
            </div>
          </div>
          <div className="textspaceTop" />
          <div className="float-right">
            <button
              className="btn shadow border border-white btn-primary btn-sm button-pad-top"
              onClick={this.handleSaveClick}
            >
              Save &nbsp;
              <i className="fa fa-check" />
            </button>
          </div>
          <div className="float-left">
            <button
              className="btn shadow border border-white btn-success btn-sm button-pad-top"
              onClick={this.handlePostClick}
            >
              Post &nbsp;
              <i className="fa fa-check" />
            </button>
          </div>
          <div className="form_padding_bottom_big">&nbsp;</div>
        </form>
      </div>
    );
  }
}

export default CoopPost;
