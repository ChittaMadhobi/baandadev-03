import React, { Component } from 'react';
import AddTasks from './AddTasks';
import TaskTable from './TaskTable';
import '../utils/nook.css';
import TaskJournal from './TaskJournal';

class TaskContainer extends Component {
  constructor(props) {
    super(props);

    window.localStorage.removeItem('contextNookJournal');
  }
  render() {
    return (
      <div className="tasks">
        <div className="container" style={{ marginTop: '10px' }}>
          <div className="row">
            <div className="col-12">
              <AddTasks />
              <TaskTable />
              <TaskJournal />
            </div>
            <div className="row">
              <div className="col">&nbsp;</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskContainer;
