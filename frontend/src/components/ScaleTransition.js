import React from 'react';
import { CSSTransition } from 'react-transition-group';

const ScaleTransition = (props) => (
  <CSSTransition {...props} classNames="scale" timeout={{ enter: 200 }} />
);
export default ScaleTransition;
