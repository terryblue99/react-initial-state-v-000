import React from 'react';
 
class ToggleButton extends React.Component { 
  constructor() {
    super();
 
    this.state = {
      isEnabled: false
    }
  }
 
  render() {
    return (
      <button className="toggle-button">
        I am toggled {this.state.isEnabled ? 'on' : 'off'}
      </button>
    )
  }
}
 
export default ToggleButton;

// While component state is a very powerful feature, it should be used as sparingly as possible. 
// State is hard to manage and can be very easy to lose sight of. The more state we introduce 
// in our application, the harder it will be to keep track of all of the changes in our data.