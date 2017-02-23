import React, { Component } from 'react';
import ButtonComponent, { CircleButton, RoundButton, RectangleButton } from 'react-native-button-component';


class App extends Component {
  render(){
    return(
      <ButtonComponent
        onPress={() => {}}
        text="Button"
        image={require('./image.png')}
      >
      </ButtonComponent>
    );

  }

}

export default App;
