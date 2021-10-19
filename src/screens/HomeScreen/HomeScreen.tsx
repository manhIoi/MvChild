import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import rootApi from '../../api/rootApi';
import Avatar from '../../components/Avatar';
import ListMovieHorizotal from '../../components/ListMovieHorizotal';
import Loadding from '../../components/Loadding';
import SearchBtn from '../../components/SearchBtn';
import Slides from '../../components/Slides';
import {headerDimensions} from '../../constants/dimensions';
import sections from '../../constants/sections';
import {SectionType, SlideType} from '../../types';
import shuffle from '../../utils/shuffleArr';
import styles from './styles';

const HomeScreen = () => {
  // state
  const [slides, setSlides] = useState<SlideType[]>([]);
  const [dataSections, setDataSections] = useState<SectionType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const ContainerHeader = Animated.createAnimatedComponent(LinearGradient);

  // animated
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, headerDimensions.fullHeight);
  const translateY = diffClamp.interpolate({
    inputRange: [0, headerDimensions.fullHeight],
    outputRange: [0, -headerDimensions.fullHeight],
  });
  const opacity = diffClamp.interpolate({
    inputRange: [0, headerDimensions.fullHeight / 3],
    outputRange: [1, 0],
  });

  const fetchData = async () => {
    const SLIDES_DATA = await rootApi.getSlides();
    setSlides(SLIDES_DATA);

    const DATA_SECTIONS = await sections.map(async section => {
      return await rootApi.getSection(section.category, section.slug);
    });

    await Promise.all(DATA_SECTIONS).then(value => {
      const tmp = value.map((data, index) => {
        return {
          ...sections[index],
          data,
        };
      });
      setDataSections(tmp);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ContainerHeader
        colors={['#111', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0)']}
        style={[
          styles.headerContainer,
          {
            opacity,
            transform: [{translateY}],
          },
        ]}>
        <LeftHeader />
        <RightHeader />
      </ContainerHeader>
      {isLoading && <Loadding />}
      <ScrollView
        style={styles.screen}
        onScroll={e => {
          scrollY.setValue(Math.abs(e.nativeEvent.contentOffset.y));
        }}>
        <View style={styles.container}>
          {/* slide */}
          <Slides slides={slides} />

          {/* list container list horizontal */}
          <View style={{paddingHorizontal: 10}}>
            {dataSections.map((section, index) => (
              <ListMovieHorizotal
                key={`dataSection-key-${section.title}-${index}`}
                title={section.title}
                movies={
                  section.isShuffle ? shuffle(section.data) : section.data
                }
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const LeftHeader = () => {
  return (
    <TouchableOpacity
      style={{
        height: '100%',
        aspectRatio: 1,
        padding: 10,
        overflow: 'hidden',
      }}>
      <Image
        style={{width: '100%', height: '100%', borderRadius: 100}}
        source={require('../../assets/images/mockLogo.png')}
      />
    </TouchableOpacity>
  );
};

const RightHeader = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <SearchBtn />
      <Avatar name="Loi" size={40} rounded />
    </View>
  );
};

export default HomeScreen;
