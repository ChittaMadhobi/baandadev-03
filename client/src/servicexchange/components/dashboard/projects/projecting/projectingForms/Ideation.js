import React, { Component } from "react";
import Select from "react-select";
import TextFieldGroup from "../../../../../../../src/utils/TextFieldGroup";
import TextAreaFieldGroup from "../../../../../../../src/utils/TextAreaFieldGroup";

import "../project.css";
import { ongoingIdeas } from "../data/ongoingIdeas";
import { ideaType } from "../data/ideaType";
import { membersForIdeation } from "../data/membersForIdeation";
import { artGalleryIdeation } from "../data/ArtGalleryIdeation";

class Ideation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newIdea: false,
      existingIdea: false,
      howToIdeate: false,
      showIdeaLogs: false,

      newIdeaName: "",
      selecteIdeadName: "",
      ideaType: "",
      ideaTypeOther: "",
      inviteMember: [],
      ideaWhatFactor: "",
      ideaWhyFactor: "",
      ideaHowFactor: "",
      generalNotes: "",

      errors: []
    };

    this.gotoIdeationProcess = this.gotoIdeationProcess.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSelectedIdea = this.handleSelectedIdea.bind(this);
    this.handleViewLogs = this.handleViewLogs.bind(this);
    this.handleCloseViewLogs = this.handleCloseViewLogs.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick() {
    alert(
      "Eventually -- When you click this, your work will be saved in database and right people notified. In future ideation session, this could be referenced for discussions and evolution."
    );
  }

  handleViewLogs = () => {
    this.setState({
      showIdeaLogs: true
    });
  };

  handleCloseViewLogs = () => {
    this.setState({
      showIdeaLogs: false
    });
  };

  handleSelectedIdea = (ideaName, { action }) => {
    //console.log("Ideation handleNewIdea: " + JSON.stringify(ideaName) + ' ' + ideaName.label);

    this.setState({
      selecteIdeadName: ideaName
    });
    if (ideaName.label !== "New Idea") {
      this.setIdeaFormData(ideaName);
    }
  };

  setIdeaFormData = selectedIdeaName => {
    this.setState({
      newIdeaName: selectedIdeaName.label,
      ideaType: artGalleryIdeation.ideaType,
      inviteMember: artGalleryIdeation.members
    });
  };

  handleInviteMembers = (inviteMember, { action }) => {
    //console.log("Ideation handleNewIdea: " + JSON.stringify(ideaName) + ' ' + ideaName.label);
    this.setState({
      inviteMember
    });
  };

  handleIdeaType = (ideaType, { action }) => {
    //console.log("Ideation handleNewIdea: " + JSON.stringify(ideaName) + ' ' + ideaName.label);
    this.setState({
      ideaType
    });
  };

  onChange(e) {
    //console.log([e.target.name] + ' ' + e.target.value );
    this.setState({ [e.target.name]: e.target.value });
  }

  gotoIdeationProcess = value => {
    if (value === "createSteps") {
      this.setState({
        howToIdeate: !this.state.howToIdeate
      });
    }
  };

  render() {
    //console.log("Ideation props:" + JSON.stringify(this.props));
    //console.log("this.state:" + JSON.stringify(this.state));
    const { errors } = this.state;

    let ideationProcess, IdeationBody;

    IdeationBody = null;

    if (this.state.howToIdeate) {
      ideationProcess = (
        <div>
          <div className="row">
            <div className="how-to-create-team">
              <font color="yellow" size="3">
                <p>
                  A project is 
                  a set of tasks to achieve a goal or an objective. It could be for an individual or a team. 
                  A project starts
                  with an idea. The evolution of turning the idea into an actionable plan is part of the 
                  process.
                </p>
                <p>
                Project Projection enables Baandas (users) to take a hazy idea and turn it into a solid plan
                through the iterative steps of ideation, 
                discovery, baselines and effort estimations.     
                </p>
              </font>
              <p>Ideation is a recurring & collaborative process to fine-tune an idea via iterative evolution.</p>
              
              <p>Give your project/idea a name OR select one from drop-down.</p>
       
              Select the type of project ideation. Baanda will
              guide you with domain specific intelligence.
              <ul>
                <li>
                  Problem-Solving (Respond to an identified problem in some
                  area).
                </li>
                <li>Derivative (You intend to better an existing idea).</li>
                <li>Symbiotic-Idea (Arranging and bettering a set of ideas)</li>
                <li>
                  Revolutionary / Paradigm Shift (Changing the fundamental
                  concepts)
                </li>
                <li>
                  Serendipitious (Came across by chance - e.g. discovery of
                  Penicillin)
                </li>
                <li>
                  Artistic (Something that is artistic, but new and needs a
                  project to implement)
                </li>
                <li>Other (Specify in a word or hyphenated word)</li>
              </ul>
              Invite others to ideate. Remember, people you 
              invite need to have a Baanda login..
              <br />
              You can click the group-view checkbox if you want to see the
              participants of the group.
              <br />
              <ul>
                <li>
                  Define or refine the definition of your idea.
                </li>
                <li>
                  Why are you doing this project? What's the problem you are trying to solve?
                </li>
                <li>
                  Optionally, if you have a plan for how you plan to implement your idea, include it for
                  future reference. This may be applicable if you are returning
                  to ideation Post-Discovery phase.
                </li>
              </ul>
              You can provide a generalized description and/or URL's for
              reference, including work in Discovery phase.
              <br />
              You can optionally upload a document (document, audio, video) and
              view them from the Document button on the dashboard.
              <br />
              You can review past ideations with the most recent ideation at the
              top. You can propose, from the drop down, a next-step short
              proposal with a description. This will be sent to the rest of the
              group as your proposal in their message box.
            </div>
          </div>
        </div>
      );
    }

    let ideaTypeOther = (
      <TextFieldGroup
        name="ideaTypeOther"
        placeholder="Enter a different idea type"
        value={this.state.ideaTypeOther}
        onChange={this.onChange}
        //error={errors.newName}
        info="Enter the new idea type ..."
      />
    );

    let ideationHeader = (
      <div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-md-6">
            <TextFieldGroup
              name="newIdeaName"
              placeholder="Enter an idea name"
              value={this.state.newIdeaName}
              onChange={this.onChange}
              //error={errors.newName}
              info="Enter a unique idea name"
            />
          </div>
          <div className="space-between-rows" />
          <div className="col-md-6">
            <font color="#293087">
              <Select
                value={this.state.selecteIdeadName}
                //isMulti
                options={ongoingIdeas}
                //className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleSelectedIdea}
                maxMenuHeight={150}
                placeholder="Edit an existing idea or select new."
              />
            </font>
          </div>
        </div>
      </div>
    );

    IdeationBody = (
      <div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-md-6">
            <font color="#293087">
              <Select
                value={this.state.ideaType}
                options={ideaType}
                classNamePrefix="select"
                onChange={this.handleIdeaType}
                maxMenuHeight={150}
                placeholder="Select an idea type"
              />
            </font>
          </div>
          <div className="col-md-6">{ideaTypeOther}</div>
        </div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-md-6">
            <font color="#293087">
              <Select
                value={this.state.inviteMember}
                isMulti
                options={membersForIdeation}
                //className="basic-multi-select"
                classNamePrefix="select"
                onChange={this.handleInviteMembers}
                maxMenuHeight={150}
                placeholder="Invite members for ideation"
              />
            </font>
          </div>
          <div className="col-md-6">Show names of team members</div>
        </div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-12">
            <TextAreaFieldGroup
              placeholder="Describe the core idea"
              name="ideaWhatFactor"
              value={this.state.ideaWhatFactor}
              onChange={this.onChange}
              error={errors.ideaWhatFactor}
              info="Define the idea, or idea state. What is the idea now."
              must="Mandatory"
            />
          </div>
        </div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-12">
            <TextAreaFieldGroup
              placeholder="Enter the driving force ... the Why-factor"
              name="ideaWhyFactor"
              value={this.state.ideaWhyFactor}
              onChange={this.onChange}
              error={errors.ideaWhyFactor}
              info="State the reason behind the idea"
              must="Mandatory"
            />
          </div>
        </div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-12">
            <TextAreaFieldGroup
              placeholder="Enter how you intend to do it as of today (optional)"
              name="ideaHowFactor"
              value={this.state.ideaHowFactor}
              onChange={this.onChange}
              error={errors.ideaHowFactor}
              info="Describe at high-level how you intend to do what you want to achieve (optional)"
              must="Mandatory"
            />
          </div>
        </div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-12">
            <TextAreaFieldGroup
              placeholder="Enter notes, minutes, points-to-ponder, R&D/discovery, doc-upload names etc."
              name="generalNotes"
              value={this.state.generalNotes}
              onChange={this.onChange}
              error={errors.generalNotes}
              rows={3}
              info="Enter notes, minutes, points-to-ponder, R&D/discovery, proposal, reference URL for reference etc."
              must="Mandatory"
            />
          </div>
        </div>
        <div className="space-between-rows" />
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
                  Picture, ref-docs please ...
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
              <small>Please upload ideation references</small>
            </p>
          </div>
        </div>
        <div className="space-between-rows" />
        <div className="row">
          <div className="col-12">
            <div className="float-right">
              <button
                className="btn-check-ideation"
                onClick={this.handleViewLogs}
              >
                View Logs&nbsp;
                <div className="float-right">
                  <i className="fa fa-check" />
                </div>
              </button>
              <button
                className="btn-save-ideation"
                onClick={this.handleSaveClick}
              >
                Save & Notify&nbsp;
                <div className="float-right">
                  <i className="far fa-save" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="space-between-rows" />
        <div className="space-between-rows" />
        <div className="space-between-rows" />
      </div>
    );

    let ideaLogs = (
      <div>
        <div className="view-log">
          <div className="space-outside-buttons" />
          <div className="row">
            <div className="col">
              You will be seeing all the information in chronologically reversed
              order (last in first, with all the log entries.)
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="float-right" />
              <button
                className="btn-close-check-ideation"
                onClick={this.handleCloseViewLogs}
              >
                Close View &nbsp;
                <div className="float-right">
                  <i className="far fa-window-close" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );

    let output;

    if (this.state.showIdeaLogs) {
      output = ideaLogs;
    } else {
      output = IdeationBody;
    }

    return (
      <div>
        <div className="form-panel-ideation">
          <div className="text-center">
            <h3>Ideation for a Project</h3>
            <font color="green">
              <div className="row">
                <div className="float-left">
                  <button
                    className="btn control-btn-review"
                    onClick={() => {
                      this.gotoIdeationProcess("createSteps");
                    }}
                  >
                    Create Steps On/Off
                    <div className="float-right">
                      <i className="fas fa-toggle-off" />
                    </div>
                  </button>{" "}
                  &nbsp;{" "}
                  <font color="white">
                    Click to review Ideation-for-a-Project steps.
                  </font>
                </div>
              </div>
              <div className="row">
                <div className="col">{ideationProcess}</div>
              </div>
            </font>
            {ideationHeader}
            {output}
          </div>
        </div>
      </div>
    );
  }
}

export default Ideation;
