import React, { Component } from 'react';

class SXBrowse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answer1: '',
      answer2: '',
      answer3: '',
      btnClickNo: ''
    };

    this.handlePostClick = this.handlePostClick.bind(this);
  }

  handlePostClick(e) {
    console.log(e.target.id);
    this.setState({
      btnClickNo: e.target.id
    });
  }

  render() {
    const { btnClickNo } = this.state;

    let aboutAns1 = null;
    let aboutAns2 = null;
    let aboutAns3 = null;
    // let aboutAns4 = null;
    // let aboutAns5 = null;
    // let aboutAns6 = null;
    if (btnClickNo === '1') {
      aboutAns1 = (
        <div>
          <font color="blue">Ans 1: </font> In order to browse, you must first post something. Then, you
          can browse jobs. 
          <div className="textspaceTop" />
        </div>
      );
    }

    if (btnClickNo === '2') {
      aboutAns2 = (
        <div>
          <font color="blue">Ans 2: </font> Baanda's main function is to provide intelligent matches for you.
          In order to do that, it needs to know a little about you and what you're looking for.  
          
          <div className="textspaceTop" />
        </div>
      );
    }

    if (btnClickNo === '3') {
      aboutAns3 = (
        <div>
          <font color="blue">Ans 5: </font> Currently, in the UX, the Browse
          function brings up random photos, random names and random ipsem lorem
          descriptions. You can click on them to give you an idea of how the
          system will work when we go live and have real data. The reason is
          driven by 3 factors:
          <br />
          <br />
          <ul>
            <li>
              Our focus is on getting feedback from this sample users (you) for
              the point-of-view of an user's experience. It has been found that,
              when it is done by actual readable data, users spend time in
              reading the content. Content is not of importance here. Loren
              ipsum, fakers have been created for this purpose only and Baanda
              use that extensively.{" "}
            </li>
            <li>
              To have a good user'e experience, there needs to be adequate data
              and knowledge in place. For that, a user have to use it for long
              time. We have created pre-fab data and intel to bypass that hurdle
              for that purpose.
            </li>
            <li>
              There needs to be 3-AI (The Mask, DCCS, & NL to FL translator)
              engines that has to be in place to generate the intel data. Those
              are yet to be made.
            </li>
          </ul>
          <p>
            <font color="blue" size="2">
              Some of it does look a bit creepy! Hope you have a good laugh.
            </font>
          </p>
          <div className="textspaceTop" />
        </div>
      );
    }
    // if (btnClickNo === '4') {
    //   aboutAns4 = (
    //     <div>
    //       <font color="blue">Ans 4: </font> xx
    //       <div className="textspaceTop" />
    //     </div>
    //   );
    // }
    // if (btnClickNo === '5') {
    //   aboutAns5 = (
    //     <div>
    //       <font color="blue">Ans 5: </font> xx
    //       <div className="textspaceTop" />
    //     </div>
    //   );
    // }
    // if (btnClickNo === '6') {
    //   aboutAns6 = (
    //     <div>
    //       <font color="blue">Ans 6: </font> xx
    //       <div className="textspaceTop" />
    //     </div>
    //   );
    // }

    return (
      <div>
        <div className="row">
          <div className="col-12">
            <button
              id="1"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              1. How can I browse the job boards?
            </button>
            {aboutAns1}
            <button
              id="2"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              2. Why do I have to post first?
            </button>
            {aboutAns2}
            <button
              id="3"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              3. Why is the browse section full of fake information?
            </button>
            {aboutAns3}
            {/* <button
              id="4"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              4. q?
            </button>
            {aboutAns4}
            <button
              id="5"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              5. q?
            </button>
            {aboutAns5}
            <button
              id="6"
              className="btn btn-outline-info btn-sm btn-block text-left"
              onClick={this.handlePostClick}
            >
              6. q6?
            </button>
            {aboutAns6} */}
          </div>
        </div>
      </div>
    );
  }
}

export default SXBrowse;
