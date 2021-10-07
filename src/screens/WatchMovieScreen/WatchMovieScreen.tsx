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
        source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      /> */}
    </View>
  );
};

export default WatchMovieScreen;
