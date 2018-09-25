import React, { Component } from 'react';

import TextFieldGroup from '../../../../utils/TextFieldGroup';
//import TextAreaFieldGroup from '../../../../utils/TextAreaFieldGroup';
import '../../utils/nook.css';

class ConnectToSocialCircle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {}
    };
  }
  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h3>Connect with your Circle</h3>
          </div>
          <br />
          <form onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-md-6">
                <TextFieldGroup
                  name="connectionName"
                  placeholder="Enter your connection's name ..."
                  value={this.state.connectionName}
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
                  info="E.g. Your dad/mom have a name but you may call them dad/mom :: "
                  must="Mandatory"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ConnectToSocialCircle;
