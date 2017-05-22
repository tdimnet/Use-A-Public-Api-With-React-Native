import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import Header from './src/components/header';


class ReactSpotifyApi extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header />
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactSpotifyApi', () => ReactSpotifyApi);
