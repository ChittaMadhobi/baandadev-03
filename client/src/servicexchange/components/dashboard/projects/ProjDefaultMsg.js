import React, { Component } from 'react';

import '../../../css/dashboard.css';

class ProjDefaultMsg extends Component {

    render() {
        //console.log(JSON.stringify(this.props));
        let msg;
        if (this.props.msgType === 'project') {
            msg = (
                <div className="project-panel-size-dark">
                    <h3>Project Buttons</h3>
                    <div className="row">
                        <div className="col">
                            <div className="text-center default-project-messages">
                                <font color="lightblue">
                                    Overview of operations for projects
                                </font>
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                                <strong>Init:</strong> If you are seeing  this, you have already initialized your project. However, you can edit it if needed.
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                            <strong>Team:</strong> Here you build your team. Including each member is a two step process. First, get an ‘acknowledgement’ that the person agrees to be a member and second, ‘association with an agreement.’
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                            <strong>Tasks:</strong> This is where you break a project into tasks and/or sub-projects. You also associate the task to one or more members and request acknowledgement. You can set by default to ‘yes’ but a person can object and provide reasons.
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                            <strong>Budget:</strong> Develop a budget associated with tasks and/or sub-project. The  Budget is based on both time and cost.
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                            <strong>Update:</strong> Input status of tasks done in % as well as cost-time incurred. You can also add comments and include IoT device feed.
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                            <strong>Status:</strong> This provides multidimensional charts and graphs that show the state of the project.
    
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (this.props.msgType === 'general') {
            msg = (
                <div className="project-panel-size-dark">
                    <h3>General Buttons</h3>
                    <div className="row">
                        <div className="col">
                            <div className="text-center default-project-messages">
                                <font color="lightblue">
                                    Overview of operations used for all projects
                                </font>
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                                <strong>Feedback:</strong> Allows you to provide feedback about a project as well as anyone associated with it. This should be used regularly to help individuals know how others view their contribution to the project. This forms a pillar of DCCS (Dynamic Co-op Chemistry Score)
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                            <strong>Conflict:</strong> If you have any issues with a person on a team or with a project overall, this is the place to handle that. This will also show conflict patterns. The intention is to reduce conflicts due to miscommunication and/or misunderstanding.
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                            <strong>Document:</strong> Associate documents (pdf, jpg, tif, gif, png, blog, webm, etc.) with a project for review. You will be able to associate other file types, but need to use proprietary readers to view them.
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                            <strong>Decision:</strong> This is where teams vote on contextual problems and come up with alternative solutions. This follows a contextual decision algorithm. This is particularly good for co-ops and for projects to make important decisions. 
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                            <strong>Iot Feed:</strong> Not currently enabled, but provisioned. A project can be associated with an IoT feed (e.g. video, inspection, barometrics, drone-delivery, etc.).
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                            <strong>Assistance:</strong> This is for you to seek assistance from your team. You can point your question to one or more members or to the whole team. Requests for assistance and assistance provided will be evaluated towards DCCS and will enable cooperation over competition.
                            </div>
                        </div>
                    </div>
                </div>
            );
        
        } else {
            msg = (
                <div className="project-panel-size-dark">
                    <h3>Initiating a Project</h3>
                    <div className="row">
                        <div className="col">
                            <div className="text-center default-project-messages">
                                <font color="lightblue">
                                    Start a project. It may be a new project, a co-op project, a mentoring project, or any combination per service agreement.
                                </font>
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                                Step 1: Click button ‘Init’ to enter required information. (The rest of the buttons are inactive at this state.)
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                                Step 2: If this is a sub-project, then hook it to the parent project from your drop down. If this is a root project, indicate that and you will not be required to hook it to a parent project.
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                                Step 3: Hook the project to the agreement you forged with others for the project. If it is a solitary project (no separate owner, client etc.) then you mention that to avoid hook-up.
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                                Step 4: Upon ‘Save’, the corresponding parties will be notified for approval.
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                                <font color="lightblue">
                                    The project will appear in your dashboard as ‘inactive’ or blue color. The ‘Status’ button on the ‘Project’ panel will be operational and will indicate the hold up (if any).
                                </font>
                            </div>
                        </div>
                    </div>
                    <div className="agreement-spacing" />
                    <div className="agreement-spacing" />
                    <div className="row">
                        <div className="col">
                            <div className="default-project-messages text-align-left">
                                Step 5: Once approved by the team, the rest of the buttons will become active. Refer to the users guide in ‘About’ button in SX if further clarification is needed.
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                {msg}
            </div>
        );
    }
}

export default ProjDefaultMsg;