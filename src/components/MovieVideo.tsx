import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video';

const MovieVideo = () => {
  return (
    <Video
      controls
      fullscreen={true}
      resizeMode="contain"
      source={{
        uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
      }}
      style={{width: '100%', height: '100%'}}
    />
  );
};

export default MovieVideo;

const styles = StyleSheet.create({});
