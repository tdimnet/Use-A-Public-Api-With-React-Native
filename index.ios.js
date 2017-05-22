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

  // This function will have to go within a service folder
  searchForAMovie() {
    return fetch('https://api.spotify.com/v1/search?q=tania%20bowra&type=artist')
      .then(response => response.json());
  }

  // When the page is searching, show the element
  componentWillMount() {
    this.searchForAMovie()
      .then(json => console.log(json));
  }

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
