import React, { Component } from 'react';

import ReactPhoneInput from 'react-phone-input-2';

import TextFieldGroup from '../../../../utils/TextFieldGroup';
import TextAreaFieldGroup from '../../../../utils/TextAreaFieldGroup';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import '../../utils/nook.css';

const defaultInviteNote =
  'I am sending you an invite to join my social circle in Baanda.' +
  ' It is a great way or us to connect,' +
  ' understand each-other, and stay connected. ' +
  ' This would tell us (me) how people in general think about us (me).' +
  ' That would enable me to fix my issues or stay nice something people like ...' +
  ' If you are not a Baanda yet, check them out. Click on the link and you will reach there. ' +
  ' If you are already a Baanda, then this would be in your Lobby -> Nook -> Social Circle -> Connect with social circle';

const defaultTextNote =
  'I have invited you to my social circle. If you are a Baanda, it is in your Nook-Messages else in your email box.';

class CreateSocialCircle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      connectionName: '',
      youCallBy: '',
      relationStrength: 5,
      inviteNote: defaultInviteNote,
      hailNote: '',
      signature: '',
      emailAddr: '',
      textInvite: false,
      mobileNumber: '',
      textNote: defaultTextNote,

      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.handleTextInvite = this.handleTextInvite.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick() {
    alert(
      'This is an UX or usability experience. Now, your entries are not being saved or validated. When released, the click of this button will save the data entered.'
    );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleRelationOnChange = value => {
    this.setState({
      relationStrength: value
    });
  };

  onChangePhone = value => {
    console.log('phone:' + value);
    // this.setState({
    //   mobileNumber: value
    // });
  };

  handleTextInvite() {
    //let xx = document.getElementById('inlineCheckbox1').value;
    //console.log('Value of textbox1 selected:' + xx);
    this.setState({
      textInvite: !this.state.textInvite
    });
  }

  render() {
    const { errors } = this.state;

    let textInviteInput;
    if (this.state.textInvite) {
      textInviteInput = (
        <div className="row">
          <div className="col-md-6">
            <TextAreaFieldGroup
              placeholder="Text note ..."
              name="textNote"
              value={this.state.textNote}
              rows={2}
              onChange={this.onChange}
              error={errors.textNote}
              info="If you want, change default note to text :: "
            />
          </div>
          <div className="col-md-6">
            <ReactPhoneInput
              name="mobileNumber"
              className="form-control form-control-sm"
              value={this.state.mobileNumber}
              defaultCountry={'us'}
              onChange={this.onChangePhone(this.state.mobileNumber)}
            />
            <p className="text-muted">
              <small>Mobile number (default USA) - mandatory.</small>
            </p>
          </div>
        </div>
      );
    } else {
      textInviteInput = null;
    }

    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h3>Request Connections</h3>
          </div>
          <br />
          <form onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-md-6">
                <TextFieldGroup
                  name="connectionName"
                  placeholder="Enter your connection's name ..."
                  value={this.state.defaultTextNote}
                  onChange={this.onChange}
                  error={errors.connectionName}
                  info="Name of the person who you want in your circle :: "
                  must="Mandatory"
                />
              </div>
              <div className="col-md-6">
                <TextFieldGroup
                  name="youCallBy"
                  placeholder="You call him/her by ..."
                  value={this.state.youCallBy}
                  onChange={this.onChange}
                  error={errors.youCallBy}
                  info="The name you use (e.g. dad, mom, nickname ...) :: "
                  must="Mandatory"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <label>
                  <strong>Relation Name</strong>
                </label>
              </div>
              <div className="col-md-4">
                <div className="selectWrapper form-control form-control-sm">
                  <select size="5" className="selectWidth">
                    <option value="friend">My Friend</option>
                    <option value="coworker">My co-worker</option>
                    <option value="father">My father</option>
                    <option value="mother">My Mother</option>
                    <option value="brother">My brother</option>
                    <option value="sister">My sister</option>
                    <option value="cousine">My cousine</option>
                    <option value="mentor">My teacher/mentor</option>
                    <option value="uncle">My Uncle</option>
                    <option value="aunt">My Aunt</option>
                    <option value="companion">My Companion</option>
                    <option value="husband">My husband</option>
                    <option value="wife">My wife</option>
                    <option value="partner">My partner</option>
                    <option value="boyfriend">My boyfriend</option>
                    <option value="girlfriend">My girlfriend</option>
                    <option value="lover">My lover</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <TextFieldGroup
                  name="youCallBy"
                  placeholder="You call him/her by ..."
                  value={this.state.youCallBy}
                  onChange={this.onChange}
                  error={errors.youCallBy}
                  info="If other ... name the relation :: "
                  must="Mandatory (if other)"
                />
              </div>
            </div>
            <div className="textspaceTop" />
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-body shadow card-top5-slider-header">
                    <div className="text-center">
                      <strong>
                        Relationship-strength &nbsp; || &nbsp; Use slider to
                        mark your score: &nbsp;
                        <font color="blue">{this.state.relationStrength}</font>
                      </strong>
                      <br />
                      Describe the strength of your relation as you feel{' '}
                      <b>today</b> with the person you are inviting. For strong
                      positive then score closer to 10. For very negative then
                      score close to 0 (zero). 5 should be avoided for that
                      marks it indifferent. That relation should not be in your
                      close circle.
                    </div>
                  </div>
                  <div className="card-body shadow card-top5-slider-body">
                    <Slider
                      value={this.state.relationStrength}
                      orientation="horizontal"
                      max={10}
                      handleLabel={'--Pts'}
                      onChange={this.handleRelationOnChange}
                    />
                  </div>
                </div>
                <div className="textspaceTop" />
              </div>
            </div>
            <div className="textspaceTop" />
            <div className="row">
              <div className="col-md-6">
                <TextFieldGroup
                  name="youCallBy"
                  placeholder="Dear ..."
                  value={this.state.hailNote}
                  onChange={this.onChange}
                  error={errors.hailNote}
                  info="Hail the person you are inviting ... "
                  must="Mandatory"
                />
              </div>
              <div className="col-md-6">
                <TextFieldGroup
                  name="youCallBy"
                  placeholder="Email of the addressed .."
                  value={this.state.emailAddr}
                  onChange={this.onChange}
                  error={errors.emailAddr}
                  info="Enter the email of the invitee ... "
                  must="Mandatory"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <TextAreaFieldGroup
                  placeholder="Your note of invite"
                  name="lifeSnippet"
                  value={this.state.inviteNote}
                  rows={5}
                  onChange={this.onChange}
                  error={errors.inviteNote}
                  info="Edit or write a note. This would be send as an email to the invite you would send. The above is a default note."
                />
              </div>
            </div>
            <div className="form-check form-check-inline">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="inlineCheckbox1"
                  value="option1"
                  checked={this.state.textInvite}
                  onChange={this.handleTextInvite}
                />{' '}
                <font color="green">
                  Check if you want to go to work from a different location.
                </font>
              </label>
            </div>
            {textInviteInput}
            <div className="textspaceTop" />
            <div className="row">
              <div className="col-12">
                <h6>
                  <font color="blue">
                    <strong>Note:</strong> Until the invite is accepted, he/she
                    will not appear in your social circle. In the 'Assess and
                    Get Reflection' from the drop down, you can change the
                    strength of, or drop off, a relation at any time. There
                    would be at max 15 person in your circle (reason explaned in
                    About tab).
                  </font>
                </h6>
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
          </form>
        </div>
      </div>
    );
  }
}

export default CreateSocialCircle;
