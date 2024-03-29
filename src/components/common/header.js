import React from 'react';
import {
  Text,
  View
} from 'react-native';


const styles = {
  viewStyle: {
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    marginTop: 20,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: '#eee'
  }
};

const Header = (props) => {

  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {props.headerText}
      </Text>
    </View>
  );
};

export default Header;
