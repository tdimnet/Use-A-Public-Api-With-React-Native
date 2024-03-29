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
      <AlbumDetails key={album.title} album={album} />
    );
  }


  render() {
    console.log(this.state.albums);

    return (
      <ScrollView>
        {this.renderAlbum()}
      </ScrollView>
    );
  }
}

export default AlbumsList;
