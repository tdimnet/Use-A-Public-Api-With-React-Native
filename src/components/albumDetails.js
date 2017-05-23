import React from 'react';
import {
  Text, View, Image, Linking
} from 'react-native';

import Card from './card';
import CardSection from './cardSection';

const AlbumDetails = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;

  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

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

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetails;
