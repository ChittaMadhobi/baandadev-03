import React, { Component } from 'react';
import NoteContainer from '../../../utils/components/editor/NoteContainerW';
import '../utils/nook.css';

class TaskJournal extends Component {
  constructor(props) {
    super(props);

    this.handleSpeechToText = this.handleSpeechToText.bind(this);
    this.handleUpdateDiary = this.handleUpdateDiary.bind(this);
  }

  handleUpdateDiary() {
    alert(
      'This click, in production, will save the state of your tasks and diary in the database. If you save multiple times, the systen will readjust your task-states in the DB.' +
        ' However, the wiki will be augmented to your previous writes. Wiki is like your memory and for you only. Your wiki is not editable - like the real wiki, once saved.'
    );
  }

  handleSpeechToText() {
    alert(
      'This will enable speech to text in production. It will be activated only if your browser/device is capable of the speech recognition.' +
        ' You will be able to edit your entry before you save reducing your typing efforts.'
    );
  }

  render() {
    return (
      <div className="task-journal">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <br />
              <font color="#3f55c1">
                <h3>
                  <b>Your Wiki Journal </b>
                </h3>
              </font>
            </div>
            <p className="float-right">
              <button
                className="btn speech-button"
                onClick={this.handleSpeechToText}
              >
                <i className="fas fa-microphone-alt">&nbsp;Speech to Text</i>{' '}
              </button>
              &nbsp;&nbsp;
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="text-center">
              <div className="journal-background editor-height text-padding">
                <NoteContainer editorContext={'contextReachout'} />
              </div>
              <form>
                <div className="row">
                  <div className="col-md-12">
                    <div className="float-left ">
                      <button
                        type="button"
                        onClick={() =>
                          this.setState({
                            todotext: '',
                            tasknotes: '',
                            priority: 'medium'
                          })
                        }
                        style={{ marginTop: '25px', marginRight: '15px' }}
                        className="btn btn-info btn-sm custom_button4 btn-size-same"
                      >
                        Search
                      </button>
                    </div>
                    <div className="float-right ">
                      <button
                        type="button"
                        style={{ marginTop: '25px' }}
                        className="btn btn-success btn-sm custom_button3 btn-size-same"
                        onClick={this.handleUpdateDiary}
                      >
                        Save & Exit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskJournal;
