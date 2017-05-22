import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';


class AlbumsList extends Component {

  state = { albums: [] }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => console.log(response));
  }

  render() {
    return (
      <Text>Foo</Text>
    );
  }
}

export default AlbumsList;
