// Import libraries to help create components
import React from 'react';
import { Text, View } from 'react-native';

// Create components
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    height: 60,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1
  },
  textStyle: {
    fontSize: 20
  }
};

// Make components available to other parts of the app
export default Header;
