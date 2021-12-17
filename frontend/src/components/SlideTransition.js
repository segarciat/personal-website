import React from 'react';
import { CSSTransition } from 'react-transition-group';

const SlideTransition = (props) => (
  <CSSTransition {...props} classNames="slide" timeout={{ enter: 200 }} />
);

export default SlideTransition;
