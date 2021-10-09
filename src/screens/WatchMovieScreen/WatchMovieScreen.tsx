import {useRoute} from '@react-navigation/core';
import React, {useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import {EpisodeType} from '../../types';
import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
import Video, {OnLoadData, OnProgressData} from 'react-native-video';
import ToolBar from '../../components/ToolBar';
import styles from './styles';
import rootApi from '../../api/rootApi';
import PrimaryButton from '../../components/PrimaryButton';

enum ResizeModeType {
  stretch = 'stretch',
  contain = 'contain',
  cover = 'cover',
  none = 'none',
}

enum ActionFetchMovie {
  CURRENT = 'current',
  NEXT = 'next',
}

const WatchMovieScreen = () => {
  const route = useRoute();
  const {params} = route;
  const {episodeNumber, id} = params;
  const [movie, setMovie] = useState<EpisodeType>();
  const [nextMovie, setNextMovie] = useState<EpisodeType>();
  const videoPlayer = useRef<Video>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const [showNextEpisode, setShowNextEpisodeBtn] = useState(false);
  const [screenType, setScreenType] = useState<ResizeModeType>(
    ResizeModeType.contain,
  );
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);

  const fetchData = async (
    _id: number,
    _episodeNumber: number,
    _action: ActionFetchMovie,
  ) => {
    const data = await rootApi.getSourceMoive(_id, _episodeNumber);
    if (_action === ActionFetchMovie.CURRENT) {
      setMovie(data);
    } else {
      setNextMovie(data);
    }
  };

  const getNextEpisode = () => {
    fetchData(id, episodeNumber + 1, ActionFetchMovie.NEXT);
  };

  const onSeek = (seek: number) => {
    videoPlayer.current?.seek(seek);
  };
  const onPaused = () => {
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
    console.log('progress', data);
    console.log(data.currentTime / data.seekableDuration);
    if (data.currentTime / data.seekableDuration > 0.98) {
      setShowNextEpisodeBtn(true);
      // getNextEpisode();
    } else {
      setShowNextEpisodeBtn(false);
    }
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
  const onEnd = () => {
    setMovie(nextMovie);
    setShowNextEpisodeBtn(false);
  };
  const exitFullScreen = () => {
    console.log('Exit full screen');
  };
  const enterFullScreen = () => {
    console.log('Enter full screen');
  };
  const onFullScreen = () => {
    if (isFullScreen) {
      exitFullScreen();
    } else {
      enterFullScreen();
    }
    setIsFullScreen(!isFullScreen);
  };
  const onSeeking = (seek: number) => {
    setCurrentTime(seek);
    setIsLoading(true);
  };
  useEffect(() => {
    fetchData(id, episodeNumber, ActionFetchMovie.CURRENT);
  }, []);

  useEffect(() => {
    if (showNextEpisode) {
      getNextEpisode();
    }
  }, [showNextEpisode]);

  return (
    <View style={{flex: 1}}>
      {showNextEpisode && (
        <PrimaryButton
          style={styles.nextEpisodeBtn}
          title={'Tập tiếp theo'}
          callback={onEnd}
        />
      )}

      <Video
        onEnd={onEnd}
        onLoad={(data: OnLoadData) => onLoad(data)}
        onLoadStart={onLoadStart}
        onProgress={(data: OnProgressData) => onProgress(data)}
        paused={paused}
        ref={videoPlayer}
        resizeMode={ResizeModeType.contain}
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
          <ToolBar title={movie?.film_name} subTitle={movie?.full_name} />
        </MediaControls.Toolbar>
      </MediaControls>
    </View>
  );
};

export default WatchMovieScreen;
