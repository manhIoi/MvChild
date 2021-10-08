import {useRoute} from '@react-navigation/core';
import React, {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {EpisodeType} from '../../types';
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
import Video, {OnLoadData, OnProgressData} from 'react-native-video';
import ToolBar from '../../components/ToolBar';
import styles from './styles';
import rootApi from '../../api/rootApi';

enum ResizeModeType {
  stretch = 'stretch',
  contain = 'contain',
  cover = 'cover',
  none = 'none',
}

const WatchMovieScreen = () => {
  const route = useRoute();
  const {params} = route;
  const {episodeNumber, id} = params;
  const [movie, setMovie] = useState<EpisodeType>();
  const videoPlayer = useRef<Video>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const [screenType, setScreenType] = useState<ResizeModeType>(
    ResizeModeType.contain,
  );
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);

  const fetchData = async () => {
    const data = await rootApi.getSourceMoive(id, episodeNumber);
    setMovie(data);
  };

  const onSeek = (seek: number) => {
    videoPlayer.current?.seek(seek);
  };
  const onPaused = () => {
    console.log('pause');
    if (!paused) {
      setPlayerState(PLAYER_STATES.PAUSED);
      setPaused(true);
    } else {
      setPlayerState(PLAYER_STATES.PLAYING);
      setPaused(false);
    }
  };
  const onReplay = () => {
    // console.log('replay');
    // setPlayerState(PLAYER_STATES.PLAYING);
    // setPaused(false);
  };
  const onProgress = (data: OnProgressData) => {
    setIsLoading(false);
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      setCurrentTime(data.currentTime);
    }
  };
  const onLoad = (data: OnLoadData) => {
    console.log(data);
    // get duration
    setDuration(data.duration);
    setIsLoading(false);
  };
  const onLoadStart = () => {
    setIsLoading(true);
  };
  const onEnd = () => {};
  const exitFullScreen = () => {
    console.log('Exit full screen');
  };
  const enterFullScreen = () => {
    console.log('Enter full screen');
  };
  const onFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    if (screenType == ResizeModeType.contain)
      setScreenType(ResizeModeType.cover);
    else setScreenType(ResizeModeType.contain);
  };
  const onSeeking = (seek: number) => {
    setCurrentTime(seek);
    setIsLoading(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Video
        onEnd={onEnd}
        onLoad={(data: OnLoadData) => onLoad(data)}
        onLoadStart={onLoadStart}
        onProgress={(data: OnProgressData) => onProgress(data)}
        paused={paused}
        ref={videoPlayer}
        resizeMode={screenType}
        // resizeMode="contain"
        fullscreen={isFullScreen}
        source={{
          uri: movie?.videoSource,
        }}
        style={styles.mediaPlayer}
        volume={10}
      />
      <MediaControls
        isFullScreen={isFullScreen}
        duration={duration}
        isLoading={isLoading}
        mainColor="#333"
        onFullScreen={onFullScreen}
        onPaused={onPaused}
        onReplay={onReplay}
        onSeek={(value: number) => onSeek(value)}
        onSeeking={(value: number) => onSeeking(value)}
        playerState={playerState}
        progress={currentTime}
        containerStyle={styles.mediaControl}>
        <MediaControls.Toolbar>
          <ToolBar />
        </MediaControls.Toolbar>
      </MediaControls>
    </View>
  );
};

export default WatchMovieScreen;
