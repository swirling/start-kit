import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withProps, lifecycle } from 'recompose';
import { addCount, loadCount } from '../../actions/counter';
import './index.less';

export const Counter = props =>
  (<div className="a">
    <div className="b">{props.count}----{props.a}</div>
    <button onClick={() => props.addCount(1)}>addone</button>
  </div>);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  a: PropTypes.string.isRequired,
  addCount: PropTypes.func.isRequired,
};

export default compose(
  connect(
    state => ({
      count: state.counter,
    }),
    { addCount, loadCount },
  ),
  withProps({ a: 1 }),
  lifecycle({
    componentDidMount() {
      this.props.loadCount();
    },
  }),
)(Counter);
