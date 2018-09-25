import React, { Component } from 'react';

import DefaultMessage from './DefaultAboutMessage';
import SXOverview from './SXOverview';

class AboutRouter extends Component {
  render() {
    const { selectValue } = this.props;
    //console.log('selectValue:' + selectValue);
    let output;
    if (selectValue === 'none') {
      output = (
        <div>
          <DefaultMessage />
        </div>
      );
    }

    if (selectValue === 'overviewQuestions') {
      output = (
        <div>
          <SXOverview />
        </div>
      );
    }

    // if (selectValue === 'srvProvider') {
    //   output = (
    //     <div>
    //       <ServiceProvider />
    //     </div>
    //   );
    // }

    // if (selectValue === 'masterForIntern') {
    //   output = (
    //     <div>
    //       <MasterForApprentice />
    //     </div>
    //   );
    // }

    return (
      <div className="col-lg-12 col-md-8 col-sm-6">
        <div>{output}</div>
      </div>
    );
  }
}

export default AboutRouter;
