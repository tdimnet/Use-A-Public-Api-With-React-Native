import React from 'react';
import {
  Text, View, Image
} from 'react-native';

const AlbumDetails = ({ album }) => {
  const { title, artist, thumbnail_image } = album;
  return (
    <View>
      <View>
        <Text>{ title } - { artist }</Text>
      </View>
      <View>
        <Image style={{height: 40, width: 40}} source={{ uri: thumbnail_image }} />
      </View>
    </View>
  );
}

export default AlbumDetails;
