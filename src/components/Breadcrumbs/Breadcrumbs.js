/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import classNames from 'classnames';
import React from 'react';
import * as Rivet from '../util/Rivet';

const Breadcrumbs =
  ({ children, variant, ...attrs }) => {
    const childCount = React.Children.count(children);
    const breadcrumbLinks = React.Children.map(children, (child, index) => (index === (childCount - 1)) ? <li aria-current="page">{child}</li> : <li>{child}</li>);
    const classes = classNames({
      ['rvt-breadcrumbs']: true,
      [`rvt-breadcrumbs--${variant}`]: variant
    });
    return (
      <nav {...attrs}>
        <ol className={classes}>
          {breadcrumbLinks}
        </ol>
      </nav>
    );
  };
Breadcrumbs.displayName = 'Breadcrumbs';

export default Rivet.rivetize(Breadcrumbs);