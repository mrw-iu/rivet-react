/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import * as Rivet from '../util/Rivet';

const propTypes = {
  fit: PropTypes.bool
};

const SegmentedButton =
  ({ className, children, fit, ...attrs }) => {
    const classes = classNames({
      'rvt-button-segmented': true,
      'rvt-button-segmented--fitted': fit
    }, className);
    return (
      <div {...attrs} role="group" className={classes}>
        {children}
      </div>
    );
  };
SegmentedButton.displayName = 'SegmentedButton';
SegmentedButton.propTypes = propTypes;

export default Rivet.rivetize(SegmentedButton);
