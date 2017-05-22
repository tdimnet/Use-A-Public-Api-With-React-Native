import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
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

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      popularity: '',
      source: 'https://facebook.github.io/react/img/logo_og.png'
    }
  }

  // This function will have to go within a service folder
  searchForAMovie() {
    return fetch('https://api.spotify.com/v1/search?q=tania%20bowra&type=artist')
      .then(response => response.json());
  }

  // When the page is searching, show the element
  componentWillMount() {
    this.searchForAMovie()
      .then((json) => {
        this.setState({
          name: json.artists.items[0].name,
          popularity: json.artists.items[0].popularity,
          source: json.artists.items[0].images[0].url,
        })
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} >
          Search an album from Spotify
        </Text>
        <Text>
          Artist Name: {this.state.name}
        </Text>
        <Text>
          Artist Popularity: {this.state.popularity}
        </Text>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: this.state.source}}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactSpotifyApi', () => ReactSpotifyApi);
