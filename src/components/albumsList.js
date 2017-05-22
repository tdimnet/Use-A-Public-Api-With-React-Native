import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetails from './albumDetails';


class AlbumsList extends Component {

  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        this.setState({
          albums: response.data
        })
      });
  } // End: componentWillMount


  renderAlbum() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }


  render() {
    return (
      <Text>Foo</Text>
    );
  }
}

export default AlbumsList;
