import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Scrawl } from '../stories/Scrawl.stories';

describe('Scrawl', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Scrawl />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
