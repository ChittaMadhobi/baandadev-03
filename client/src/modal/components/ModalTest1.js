import React, { Component } from 'react';
import { connect } from 'react-redux';

import ModalRoot from './ModalContainer';

import '../css/template.css';
// -----------
import '../css/localModal.css';
//import './App.css';

import { showModal, hideModal } from '../../actions/modalActions';

const MESSAGE = 'A redux modal component.';

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    dispatch(showModal({ modalProps, modalType }));
  }
});

class ModalTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };

    this.closeModal = this.closeModal.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.openAlertModal = this.openAlertModal.bind(this);
    this.openConfirmModal = this.openConfirmModal.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.openPromptModal = this.openPromptModal.bind(this);
    this.showInput = this.showInput.bind(this);
  }

  closeModal(event) {
    this.props.hideModal();
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  showInput(event) {
    console.log(this.state);
  }

  //openAlertModal(event) {
  // openAlertModal(e) {
  //   this.props.showModal(
  //     {
  //       open: true,
  //       title: 'Alert Modal xx',
  //       message: 'This could be Jit ID:',
  //       closeModal: this.closeModal
  //     },
  //     'alert'
  //   );
  // }

  openAlertModal = param => e => {
    console.log('param : ' + param);
    let msg = 'This could be Jit ID: ' + param;
    this.props.showModal(
      {
        open: true,
        title: 'Alert Modal xx',
        message: msg,
        closeModal: this.closeModal
      },
      'alert'
    );
  };

  openConfirmModal(event) {
    this.props.showModal(
      {
        open: true,
        title: 'Confirm Modal',
        message: MESSAGE,
        confirmAction: this.closeModal,
        closeModal: this.closeModal
      },
      'confirm'
    );
  }

  openDeleteModal(event) {
    this.props.showModal(
      {
        open: true,
        title: 'Delete Modal',
        message: MESSAGE,
        deleteAction: this.closeModal,
        closeModal: this.closeModal,
        deleteText: 'delete'
      },
      'delete'
    );
  }

  openPromptModal(event) {
    this.props.showModal(
      {
        open: true,
        title: 'Prompt Modal',
        fields: [
          {
            label: 'Address name',
            name: 'addressName',
            placeholder: 'Enter address name'
          }
        ],
        onInputChange: this.onInputChange,
        confirmAction: this.showInput
      },
      'prompt'
    );
  }

  render() {
    const ans = 'abcd';

    return (
      <div className="fixedsize">
        <div className="workarea-padding">
          <div className="app">
            <header className="app-header">
              <h1 className="app-title">A Redux Modal Component</h1>
            </header>
            <div className="container">
              <div className="modal-types row d-flex justify-content-center align-items-center">
                <div className="col">
                  <button
                    className="btn btn-outline-primary btn-block"
                    onClick={this.openAlertModal(ans)}
                  >
                    alert
                  </button>
                </div>
                <div className="col">
                  <button
                    className="btn btn-outline-primary btn-block"
                    onClick={this.openConfirmModal}
                  >
                    confirm
                  </button>
                </div>
                <div className="col">
                  <button
                    className="btn btn-outline-primary btn-block"
                    onClick={this.openDeleteModal}
                  >
                    delete
                  </button>
                </div>
                <div className="col">
                  <button
                    className="btn btn-outline-primary btn-block"
                    onClick={this.openPromptModal}
                  >
                    prompt
                  </button>
                </div>
              </div>
            </div>
            <span className="app-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </span>
            <ModalRoot />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ModalTest);
