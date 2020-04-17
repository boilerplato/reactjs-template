import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './index.css';
import * as fooActions from '../../store/foo/actions';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="home">
        Home page
        <p>
          Lorem Ipsum
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  foo: state.foo,
  bar: state.bar,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...fooActions
}, dispatch);

const enhance = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(enhance(Home));
