import React, { PureComponent } from 'react';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
//import RBCarousel from 'react-bootstrap-carousel';

class CarouselManualBody extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  render() {
    console.log('SCMessage props GGGGGGGGGGGGG: ' + JSON.stringify(this.props));

    let {
      id,
      from,
      title,
      message,
      messageType,
      MessageDate
    } = this.props.inputd;
    console.log('title:' + title);
    let msgWorkBoard;
    if (messageType === 'Message') {
      msgWorkBoard = <div>This is message</div>;
    } else {
      msgWorkBoard = <div>This is Invite</div>;
    }

    return (
      <div className="container">
        <div className="row">
          {/* <div className="col-md-4">
            <img className="text-position1" src={Holo} alt="..." />
          </div> */}
          <div className="col-md-12">
            {/* <div className="fixedsizeM"> */}
            {/* <RBCarousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={3000}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              onSelect={this.onSelect}
              ref={r => (this.slider = r)}
              version={4}
            > */}
            <div className="img-div-style">
              <h1>Its been a hard days work - Here we start</h1>
            </div>
            {msgWorkBoard}
            {/* </RBCarousel> */}
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselManualBody;
