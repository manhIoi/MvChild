import {useRoute} from '@react-navigation/core';
import React from 'react';
import {View, Text} from 'react-native';
// import Video from 'react-native-video';

const WatchMovieScreen = () => {
  const route = useRoute();
  const {params} = route;
  console.log(params);

  return (
    <View style={{flex: 1}}>
      {/* <Video
        source={{
          uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
        }} // Can be a URL or a local file.
        // ref={ref => {
        //   this.player = ref;
        // }} // Store reference
        // onBuffer={this.onBuffer} // Callback when remote video is buffering
        // onError={this.videoError} // Callback when video cannot be loaded
        style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
      /> */}
      {/* <Video source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}} style={{}} /> */}
    </View>
  );
};

export default WatchMovieScreen;
