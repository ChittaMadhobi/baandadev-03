import React, { Component } from "react";
import AddTasks from "./AddTasks";
import TaskTable from "./TaskTable";
import "../utils/nook.css";
import TaskJournal from "./TaskJournal";
import DefaultMessage from './DefaultMessage';

class TaskDiaryRouter extends Component {
  render() {
    const { selectValue } = this.props;
    //console.log('selectValue:' + selectValue);
    let output;

    if (selectValue === "none") {
      output = (
        <div>
          <DefaultMessage />{" "}
        </div>
      );
    }

    if (selectValue === "handlingTasks") {
      output = (
        <div className="tasks">
          <div className="container" style={{ marginTop: "10px" }}>
            <div className="row">
              <div className="col-12">
                <AddTasks />
                <TaskTable />
              </div>
              <div className="row">
                <div className="col">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (selectValue === "journal") {
      output = (
        <div className="tasks">
          <div className="container" style={{ marginTop: "10px" }}>
            <div className="row">
              <div className="col-12">
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
    return (
      <div className="col-lg-12 col-md-8 col-sm-6">
        <div>{output}</div>
      </div>
    );
  }
}

export default TaskDiaryRouter;
