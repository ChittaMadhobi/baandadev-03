import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class Agreeableness extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnOpenClickNo: '',
      scaleValue1: 5,
      scaleValue2: 5,
      scaleValue3: 5,
      scaleValue4: 5,
      scaleValue5: 5,
      scaleValue6: 5
    };

    this.handleOpenClick = this.handleOpenClick.bind(this);
  }

  handleOpenClick(e) {
    //console.log('btnOpenClickNo:' + e.target.id);
    this.setState({
      btnOpenClickNo: e.target.id
    });
  }

  handleOnChange1 = value => {
    this.setState({
      scaleValue1: value
    });
  };

  handleOnChange2 = value => {
    this.setState({
      scaleValue2: value
    });
  };

  handleOnChange3 = value => {
    this.setState({
      scaleValue3: value
    });
  };

  handleOnChange4 = value => {
    this.setState({
      scaleValue4: value
    });
  };

  handleOnChange5 = value => {
    this.setState({
      scaleValue5: value
    });
  };

  handleOnChange6 = value => {
    this.setState({
      scaleValue6: value
    });
  };

  render() {
    const { btnOpenClickNo } = this.state;

    let agreeablenessAns1 = null;
    let agreeablenessAns2 = null;
    let agreeablenessAns3 = null;
    let agreeablenessAns4 = null;
    let agreeablenessAns5 = null;
    let agreeablenessAns6 = null;

    // Imagination
    if (btnOpenClickNo === '1') {
      agreeablenessAns1 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Trust &nbsp; || &nbsp; Use slider to mark your score: &nbsp;
                  <font color="blue">{this.state.scaleValue1}</font>
                </strong>
                <br />
                Trust is a firm belief in the reliability, truth, ability, or
                strength of someone or something. It is a feeling, a rudimentary
                ingredient for society. Do you trust someone, stranger or
                otherwise, easily? Are you trust worthy?
              </div>
            </div>
            <div className="card-body shadow card-top5-slider-body">
              <Slider
                value={this.state.scaleValue1}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange1}
              />
            </div>
          </div>
          <div className="textspaceTop" />
        </div>
      );
    } else {
      agreeablenessAns1 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '2') {
      agreeablenessAns2 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Morality &nbsp; || &nbsp; Use slider to mark your scoree:
                  &nbsp;
                  <font color="blue">{this.state.scaleValue2}</font>
                </strong>
                <br />
                Morality is the principles concerning the distinction between
                right and wrong or good and bad behavior. Cultural Relativism -
                Right/wrong (moral) is determined by the particular set of
                principles or rules the relevant culture at a point of the time.
              </div>
            </div>
            <div className="card-body shadow card-top5-slider-body">
              <Slider
                value={this.state.scaleValue2}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange2}
              />
            </div>
          </div>
          <div className="textspaceTop" />
        </div>
      );
    } else {
      agreeablenessAns2 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '3') {
      agreeablenessAns3 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Altruism &nbsp; || &nbsp; Use slider to mark your score:
                  &nbsp;
                  <font color="blue">{this.state.scaleValue3}</font>
                </strong>
                <br />
                the belief in or practice of disinterested and selfless concern
                for the well-being of others. E.g.: Some may choose to work with
                vulnerable elderly people out of altruism. In zoology, behavior
                of an animal that benefits another at its own expense.
              </div>
            </div>
            <div className="card-body shadow card-top5-slider-body">
              <Slider
                value={this.state.scaleValue3}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange3}
              />
            </div>
          </div>
          <div className="textspaceTop" />
        </div>
      );
    } else {
      agreeablenessAns3 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '4') {
      agreeablenessAns4 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Cooperation &nbsp; || &nbsp; Use slider to mark your score:
                  &nbsp;
                  <font color="blue">{this.state.scaleValue4}</font>
                </strong>
                <br />
                Cooperation is the process of working together to the same end.
                An example of cooperation is when one person hands you a brick
                and you lay the brick. Cooperation is forged out of trust,
                respect, transparency, and communication.
                <strong>
                  {' '}
                  Scale Value: &nbsp;
                  <font color="blue">{this.state.scaleValue4}</font>
                </strong>
              </div>
            </div>
            <div className="card-body shadow card-top5-slider-body">
              <Slider
                value={this.state.scaleValue4}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange4}
              />
            </div>
          </div>
          <div className="textspaceTop" />
        </div>
      );
    } else {
      agreeablenessAns4 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '5') {
      agreeablenessAns5 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Modesty &nbsp; || &nbsp; Use slider to mark your score: &nbsp;
                  <font color="blue">{this.state.scaleValue5}</font>
                </strong>
                <div>
                  It is behavior, manner, or appearance intended to avoid
                  impropriety or indecency. Modesty is closely associated with
                  humility and often to forbade sexual attraction to others.
                  Rooted in Latin word 'modestus' (keeping within measure).
                </div>
              </div>
            </div>
            <div className="card-body shadow card-top5-slider-body">
              <Slider
                value={this.state.scaleValue5}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange5}
              />
            </div>
          </div>
          <div className="textspaceTop" />
        </div>
      );
    } else {
      agreeablenessAns5 = null;
    }

    // Artistic interest
    if (btnOpenClickNo === '6') {
      agreeablenessAns6 = (
        <div>
          <div className="card">
            <div className="card-body shadow card-top5-slider-header">
              <div className="text-center">
                <strong>
                  Sympathy &nbsp; || &nbsp; Use slider to mark your score:
                  &nbsp;
                  <font color="blue">{this.state.scaleValue6}</font>
                </strong>
                <div>
                  Feeling bad for someone else's misfortune. 'Sympathy' is when
                  you share the feelings of another; 'empathy' is understand the
                  feelings of another but not necessarily share them. E.g.
                  accomodate refugee at the cost one's own lifestyle.
                </div>
              </div>
            </div>
            <div className="card-body shadow card-top5-slider-body">
              <Slider
                value={this.state.scaleValue6}
                orientation="horizontal"
                max={10}
                handleLabel={'--Pts'}
                onChange={this.handleOnChange6}
              />
            </div>
          </div>
          <div className="textspaceTop" />
        </div>
      );
    } else {
      agreeablenessAns6 = null;
    }

    return (
      <div>
        <div className="row">
          <div className="col-md-12 col-sm-6">
            <button
              id="1"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Can people trust you? Do you, by default trust a stranger or
              others?
            </button>
            {agreeablenessAns1}

            <button
              id="2"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Are you a moral person? Do you have distinction between good and
              bad?
            </button>
            {agreeablenessAns2}
            <button
              id="3"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Do you believe or practice selfless concern for the well-being of
              others?
            </button>
            {agreeablenessAns3}
            <button
              id="4"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Do you believe in life of cooperation or do you prefer
              competition?
            </button>
            {agreeablenessAns4}
            <button
              id="5"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Do you think you are modest and humble? Do you think
              self-advertisement is needed now?
            </button>
            {agreeablenessAns5}
            <button
              id="6"
              className="btn btn-outline-primary btn-sm btn-block text-left"
              onClick={this.handleOpenClick}
            >
              Do you really feel sympathy/sad for other's misfortune? How about
              immegrants or refugees adversely effecing your life-style?
            </button>
            {agreeablenessAns6}
          </div>
        </div>
      </div>
    );
  }
}

export default Agreeableness;
