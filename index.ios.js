import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import Header from './src/components/header';
import AlbumsList from './src/components/albumsList';

class ReactSpotifyApi extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Search an album with the Spotify API'} />
        <AlbumsList />
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactSpotifyApi', () => ReactSpotifyApi);
