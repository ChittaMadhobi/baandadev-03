import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
//import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { handleToken } from '../../actions/financeActions';

class Payments extends Component {
  async callStripeAPI(token) {
    console.log('Reached this.callStripeAPI');
    //console.log('token id:' + token.id);
    console.log('baandaId: ' + JSON.stringify(this.props.auth.user));
    // Call in action in (financeActions.js)
    handleToken(token);
    console.log('xxx');
  }
  render() {
    return (
      <div>
        <StripeCheckout
          name="Baanda Dev"
          description="$7 for 5 (EIR) Baanda Token"
          amount={700}
          token={token => {
            console.log('token :' + JSON.stringify(token));
            this.callStripeAPI(token);
          }}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button className="btn btn-info btn-sm top-padding">
            {' '}
            Pay Via CC
          </button>
        </StripeCheckout>
      </div>
    );
  }
}

Payments.propTypes = {
  handleToken: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { handleToken }
)(Payments);

//export default Payments;
