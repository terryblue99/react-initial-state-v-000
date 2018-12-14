import React from 'react';
import ReactDOM from 'react-dom';

import Address from './components/Address';
import ToggleButton from './components/ToggleButton';

ReactDOM.render(
  <Address 
    street="Santa Monica Blvd."
    city="Santa Monica"
  />,
  document.getElementById('root')
)