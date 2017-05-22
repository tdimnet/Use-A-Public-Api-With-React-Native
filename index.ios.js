import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  welcome: {
    fontSize: 20,
    color: '#444',
  }
})

class ReactSpotifyApi extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} >
          Search an album from Spotify
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactSpotifyApi', () => ReactSpotifyApi);
