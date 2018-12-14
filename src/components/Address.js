import React from 'react';

class Address extends React.Component {
  render() {
    return (
      <div className="address">{this.props.street}, {this.props.city}</div>
    );
  }
}

export default Address;

// While component state is a very powerful feature, it should be used as sparingly as possible. 
// State is hard to manage and can be very easy to lose sight of. The more state we introduce 
// in our application, the harder it will be to keep track of all of the changes in our data.
 
// class Address extends React.Component {
//   constructor(props) {
//     super(props);
 
//     this.state = {
//       fullAddress: `${props.street}, ${props.city}`
//     }
//   } 
 
//   render() {
//     return (
//       <div className="address">
//         {this.state.fullAddress}
//       </div>
//     );
//   }
// }
 
// export default Address;