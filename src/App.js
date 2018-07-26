import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">

      <RenderOtherToo other={RenderMe} text="App text!"/>

      </div>
    );
  }
}


const RenderOther = (props) => {
  const OtherComponent = props.other;
  return (
    <div>
      <h1>I am Render other!</h1>
      <OtherComponent {...props}/>
    </div>
  );
}


const RenderOtherToo = ({other: OtherComponent, ...rest}) => {
  return (
    <div>
      <h1>Render Other too!</h1>
      <OtherComponent {...rest}/>
    </div>
  );
}



class RenderMeToo extends React.Component {
  render() {
    return (
      <div>

      <h2>Render me too!</h2>

      </div>
    );
  }
}



const RenderMe = (props) => {
  return (
    <ul>
      <li>Hello</li>
      <li>{props.text}</li>
    </ul>
  );
}

export default App;
