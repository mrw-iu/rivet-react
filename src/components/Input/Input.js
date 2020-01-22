/*
Copyright (C) 2018 The Trustees of Indiana University
SPDX-License-Identifier: BSD-3-Clause
*/
import React from 'react';
import * as Rivet from '../util/Rivet';
import { InputTag, propTypes } from './common';

const Input = (attrs) => <InputTag Tag="input" {...attrs}/>;
Input.displayName = 'Input';
Input.propTypes = propTypes;

export default Rivet.rivetize(Input);