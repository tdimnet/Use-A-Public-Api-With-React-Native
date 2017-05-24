import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
} from 'react-native';

import Header from './components/common/header';
import AlbumsList from './components/albumsList';

const App = () => {

    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Search an album with the Spotify API'} />
        <AlbumsList />
      </View>
    );

}

export default App;
