import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideModal } from '../../../../actions/modalActions';
import '../../../css/localModal.css';
import './css/entrance.css';

import FeaturePic from './img/BaandaFeaturePic.png';
import StartHereGuide from './img/startHereGuide.png';
import StartHereNook from './img/startHereNook.png';
import HolographicUX from './img/holograpgicUX.png';

class StartHereModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todotext: ''
    };

    this.closeModal = this.closeModal.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  closeModal(e) {
    e.preventDefault();
    console.log('closeModal.func : ' + this.state.todotext);
    const modTask = {
      todotext: this.state.todotext
    };

    this.props.hideModal(modTask);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    console.log('props :' + JSON.stringify(this.props));
    //const { title, message, todotext } = this.props;
    const { user } = this.props.auth;
    console.log('user:' + JSON.stringify(user));
    const { title, message } = this.props;

    console.log('title :' + title + ' | message:' + message);
    return (
      <div className="container">
        <div className="modal-content-z">
          <div className="row text-center justify-content-center">
            <div className="modal-header">
              <h5>
                Welcome{' '}
                <font color="blue">{this.props.auth.user.name} ...</font>
                &nbsp;Let's Begin
              </h5>
            </div>
          </div>

          <div className="modal-body">
            <div className="fixedsize">
              <div className="row">
                <div className="col-12">
                  <div className="starthere-padding">
                    <div className="text-center">
                      <h3>
                        <b>Intent </b>
                      </h3>
                      <h4>
                        This is a User Experience (UX) pre-validation. The
                        focus is on <font color="blue">feeling and functionality.</font>
                      </h4>
                      <b>
                      
                      </b>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <div className="starthere-padding">
                    <h4>What is Baanda:</h4>
                    <p>
                      It is a collection of tools for individuals oriented on an
                      intelligent platform.{' '}
                    </p>
                    <p>
                      The Present focus is on{' '}
                      <font color="blue">
                        <strong>Service Xchange</strong>
                      </font>{' '}
                      (work-as-peers) while secondary focus is on{' '}
                      <font color="blue">
                        <strong>Co-living</strong> &nbsp;
                      </font>
                      (forge togetherness)
                    </p>
                    <p>
                      In the{' '}
                      <font color="blue">
                        <strong>Service Xchange </strong>
                      </font>{' '}
                      you will post for help-wanted or post your desire for a job.
                      Baanda will not only match you in multiple dimensions,
                      but it will also facilitate you to work with and mitigate fear-factors
                      of working with strangers. Now, the focus is towards
                      everyday people. Progressively, Baanda will enable
                      freelancers for large businesses. Baanda also revives the ancient
                      'Master-Apprentice' practice of passing on one's hands-on
                      expertise. We also enable service-providers to form co-ops to work together on
                      jobs.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="starthere-padding">
                    <div className="fixedsize-starthere-pic">
                      <div className="pictures">
                        <img
                          src={FeaturePic}
                          width="100%"
                          height="100%"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <h4>Responsive (future facing Hologram UI)</h4>
                  <div className="starthere-padding top-padding-starthere">
                    <div className="fixedsize-starthere-pic">
                      <div className="pictures">
                        <img
                          src={HolographicUX}
                          width="100%"
                          height="100%"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="starthere-padding">
                    <div>
                      <font color="blue">
                        <strong>
                          <h5>Paradigm Shift (Hologram first UX design):</h5>
                        </strong>
                      </font>{' '}
                      In the last decade, people have gotten used to &nbsp;
                      <b>Mobile-First design</b> with singleton applications
                      being the trend. That is, simple one-function
                      click-and-done applications that are designed for small
                      devices (smart phones).
                    </div>
                    <p>
                      Complex systems dealing with human minds, an individual's
                      life and his/her interplay in society in many dimensions,
                      paradigm shifting next-gen socio-economy, are the
                      antithesis of the prevailing singleton app{' '}
                      <strong>KISS</strong> (keep it simple stupid) model.
                    </p>
                    <p>
                      Baanda is a future-facing system. So is its alignment to
                      emerging devices such as{' '}
                      <strong>Holographic UI/UX.</strong> It is designed for
                      large UI with{' '}
                      <strong>
                        <u>LAYERED FOCUS</u>
                      </strong>{' '}
                      to emulate NG holographic UX. &nbsp;
                      <font color="blue">
                        <strong>
                          Reviewing it on a large device is encouraged.
                        </strong>
                      </font>
                      &nbsp; For example{' '}
                      <font color="green">
                        <strong>
                          {' '}
                          This modal layer you are viewing is such an emulation.
                        </strong>
                      </font>
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <h4>UX Exploration:</h4>
                  <div className="starthere-padding top-padding-starthere">
                    <div className="fixedsize-starthere-pic">
                      <div className="pictures">
                        <img
                          src={StartHereGuide}
                          width="100%"
                          height="100%"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="starthere-padding">
                    <p>
                      <font color="blue">
                        <strong>Paradigm Shift: </strong>
                      </font>{' '}
                      There is a set of paradigm shifts associated with Baanda
                      services. <strong>About</strong> sections inform about
                      the nuances, possible re-orientation of thought process
                      etc. for the envisioned socio-economic emergence.
                    </p>
                    <p>
                      Some known, but not popular concepts such as{' '}
                      <font color="red">
                        <strong>
                          - If you work for someone, you earn for him or her -
                        </strong>
                      </font>{' '}
                      hierarchical socio-economic governance (
                      <i>leading to one-percenters</i>) is to be transformed
                      into a
                      <font color="blue">
                        <strong>- flat cooperation-of-peers -</strong>
                      </font>{' '}
                      where you work together and share equivalent to your
                      participation.
                    </p>
                    <p>
                      {' '}
                      Similarly,
                      <font color="blue">Contextual Intelligence</font>; that
                      is,{' '}
                      <b>
                        How would a particular engagement, service-provider,
                        apprentice-master relation or co-living
                      </b>{' '}
                      fit an individual in multiiple dimensions is a paradigm
                      shift in intelligence mining.
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <div className="starthere-padding">
                    <h4>Your Nook:</h4>
                    <p>
                      Baanda is all about understanding an individual to better
                      his/her life and mine his/her potential or talents.
                    </p>
                    <p>
                      In the
                      <font color="blue">
                        <strong> Nook </strong>
                      </font>{' '}
                      you are provided with daily tools and Baanda
                      interactions. This enables Baanda to know your
                      life-context and you as a unique
                      <font color="blue">
                        <strong> INDIVIDUAL.</strong>
                      </font>
                    </p>
                    <p>
                      Imagine you meet <font color="blue">someone</font> in your
                      life. If you want to work and live
                      together, you have to know each other. Nook is that tool
                      that enables cooperation and togetherness by knowing and
                      understanding you. The process of knowing is continuous,
                      life-long and dynamic just like your life.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="starthere-padding top-padding-starthere">
                    <div className="fixedsize-starthere-pic">
                      <div className="pictures">
                        <img
                          src={StartHereNook}
                          width="100%"
                          height="100%"
                          alt="..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-12">
                  <div className="starthere-padding">
                    <div>
                      <h4>
                        <strong>
                          <font color="red">Privacy Confidence:</font>
                        </strong>
                      </h4>
                      You will enable Baanda to assist you as an individual by
                      sharing your life, mind, and spirit. That also
                      makes anyone fearful of what if the confidance is broken,
                      particularly in the light of recent social media betrayals.
                      <font color="blue">
                        &nbsp; Baanda introduces a Library tab, a new feature in
                        software application, for discussing and presenting various
                        possibilities, understanding emergences, shifts, and to
                        learn from each other.
                      </font>
                      &nbsp;
                      <b>
                        A special section has been dedicated (in 'About' at the
                        library) around &nbsp;
                        <u>
                          confidence, information security, & Baanda's promises
                        </u>{' '}
                        &nbsp; to mitigate any fear you may have.
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.closeModal}
              onChange={this.onChange}
            >
              <strong>Continue</strong> &nbsp;
              <div className="float-right">
                <i className="fas fa-broadcast-tower" />
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

StartHereModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { hideModal }
)(StartHereModal);
