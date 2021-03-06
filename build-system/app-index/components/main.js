/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-unused-vars */

import {Component, h, render} from 'preact';
import {ProxyForm} from './proxy-form';
import {SettingsOpener} from './settings';


const proxyFormRootOptional =
    document.querySelector('.proxy-form-component-root');

if (proxyFormRootOptional) {
  render(<ProxyForm /> , proxyFormRootOptional);
}

render(<SettingsOpener />,
    document.querySelector('.settings-opener-component-root'));
