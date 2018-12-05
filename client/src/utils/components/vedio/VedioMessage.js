import React, { Component } from 'react';
import MediaCapturer from 'react-multimedia-capture';

import './vedio.css';

class VedioMessage extends Component {
  constructor() {
    super();
    this.state = {
      granted: false,
      rejectedReason: '',
      recording: false,
      paused: false,
      showurl: '',
      showblob: ''
    };

    this.handleGranted = this.handleGranted.bind(this);
    this.handleDenied = this.handleDenied.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.setStreamToVideo = this.setStreamToVideo.bind(this);
    this.releaseStreamFromVideo = this.releaseStreamFromVideo.bind(this);
    this.downloadVideo = this.downloadVideo.bind(this);

    this.previewVideo = this.previewVideo.bind(this);
    this.handleSendClick = this.handleSendClick.bind(this);
  }

  handleSendClick() {
    alert(
      'This is an UX or usability experience. At this point (by your click on Send button), your message would apear in ' +
        "the receipient's message box. The quality of the video-mesage will depend on your camera, microphone, driers and browsers."
    );
  }

  handleGranted() {
    this.setState({ granted: true });
    // console.log('Permission Granted!');
  }
  handleDenied(err) {
    this.setState({ rejectedReason: err.name });
    // console.log('Permission Denied!', err);
  }
  handleStart(stream) {
    this.setState({
      recording: true
    });

    this.setStreamToVideo(stream);
    // console.log('Recording Started.');
  }
  handleStop(blob) {
    this.setState({
      recording: false
    });

    this.releaseStreamFromVideo();

    // console.log('Recording Stopped.');
    this.downloadVideo(blob);
  }

  handleError(err) {
    console.log(err);
  }
  setStreamToVideo(stream) {
    let video = this.refs.app.querySelector('video');

    if (window.URL) {
      video.src = window.URL.createObjectURL(stream);
    } else {
      video.src = stream;
    }
  }
  releaseStreamFromVideo() {
    this.refs.app.querySelector('video').src = '';
  }
  downloadVideo(blob) {
    // console.log('in downloadVideo:');
    let url = URL.createObjectURL(blob);

    this.setState({
      showurl: url,
      showblob: blob
    });
  }

  previewVideo() {
    if (this.state.showurl !== '') {
      var p = document.getElementById('yyy');
      p.src = this.state.showurl;
    } else {
      console.log('this.state.showurl is blank');
    }
  }

  render() {
    // console.log('this.proops:' + JSON.stringify(this.props));
    const granted = this.state.granted;
    const rejectedReason = this.state.rejectedReason;
    const recording = this.state.recording;
    //const paused = this.state.paused;
    const render1 = ({ start, stop }) => (
      <div className="text-center ctrl-panel-x">
        <div className="space-at-top" />
        <h4>
          <div className="header-shadow">
            <b>
              <font color="#cbd8ed">Video Controls</font>
            </b>
          </div>
        </h4>
        <div className="space-at-top" />
        <div className="float-center">
          <div>
            {/* <b>Granted:</b> {granted.toString()} */}
            <b>Granted:</b> &nbsp;&nbsp;
            {granted ? (
              <font color="lightgreen">
                <b>Yes</b>
              </font>
            ) : (
              <font color="#e59679">
                <b>No</b>
              </font>
            )}
          </div>
          <div>
            <b>Rejected:</b>
            &nbsp;&nbsp;
            {rejectedReason === '' ? (
              <font color="lightgreen">
                <b>No</b>
              </font>
            ) : (
              <font color="#e59679">
                <b>rejectedReason</b>
              </font>
            )}
          </div>
          <div>
            <b>Rcording:</b>
            &nbsp;&nbsp;
            {recording ? (
              <font color="lightgreen">
                <b>Yes</b>
              </font>
            ) : (
              <font color="#e59679">
                <b>No</b>
              </font>
            )}
          </div>
        </div>
        <div className="space-between-buttons" />
        <div className="text-center">
          {/* <p>Paused: {paused.toString()}</p> */}
          <button className="btn control-btn-start" onClick={start}>
            Start
            <div className="float-right">
              <i className="far fa-play-circle" />
            </div>
          </button>{' '}
        </div>
        <div className="space-between-buttons" />
        <div className="text-center">
          <button className="btn control-btn-done" onClick={stop}>
            Done
            <div className="float-right">
              <i className="far fa-stop-circle" />
            </div>
          </button>
        </div>
        <div className="space-between-buttons" />
        <div className="text-center">
          <button
            className="btn control-btn-preview "
            type="button"
            onClick={this.previewVideo}
          >
            Preview
            <div className="float-right">
              <i className="far fa-play-circle" />
            </div>
          </button>
        </div>
        <div className="space-between-buttons" />
        <div className="text-center">
          <button
            className="btn control-btn-send"
            type="button"
            onClick={this.handleSendClick}
          >
            Send &nbsp;&nbsp;
            <div className="float-right">
              <i className="far fa-envelope" />
            </div>
          </button>
        </div>
        <div className="space-between-buttons" />

        <div className="row">
          <div className="col-1">&nbsp;</div>
          <div className="col-10">
            <div className="text-center vedio-msg">
              Click <b>Start</b> then <b>Done</b>. &nbsp; Repeat till OK then{' '}
              <b>Send</b>.
            </div>
          </div>
          <div className="col-1">&nbsp;</div>
        </div>
      </div>
    );

    return (
      <div className="container the-box-background">
        <div ref="app">
          <div className="text-center">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <MediaCapturer
                  constraints={{ audio: true, video: true }}
                  timeSlice={10}
                  onGranted={this.handleGranted}
                  onDenied={this.handleDenied}
                  onStart={this.handleStart}
                  onStop={this.handleStop}
                  onPause={this.handlePause}
                  onResume={this.handleResume}
                  onError={this.handleError}
                  render={render1}
                />
              </div>
              <div className="col-md-8 col-sm-6">
                <video className="fixed-height" id="yyy" autoPlay />{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VedioMessage;