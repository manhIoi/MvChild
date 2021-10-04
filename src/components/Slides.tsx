import React, {useEffect, useRef, useState} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import rootColor from '../constants/colors';
import dimensions from '../constants/dimensions';
import {rootFont} from '../constants/fonts';
import {SlideType} from '../types';
import PrimaryButton from './PrimaryButton';
import Slide from './Slide';

interface SlidesPropsType {
  slides: SlideType[];
}

let lengthSlide = 0;

const Slides = ({slides}: SlidesPropsType) => {
  const activeIndexAnimated = useRef(new Animated.Value(0)).current;
  let activeIndex = useRef(0).current;
  const inputRange = [-activeIndex - 1, -activeIndex, -activeIndex + 1];
  const [activeMovie, setActiveMovie] = useState(slides[activeIndex]);
  const moveSlide = () => {
    if (activeIndex === lengthSlide - 1) {
      activeIndex = 0;
    } else {
      activeIndex += 1;
    }
    Animated.timing(activeIndexAnimated, {
      toValue: -activeIndex,
      duration: 700,
      useNativeDriver: true,
    }).start(() => {
      setActiveMovie(slides[activeIndex]);
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      moveSlide();
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    lengthSlide = slides.length;
  }, [slides]);

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.overlay}
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.2)', '#111']}
      />
      {slides.map((slide, index) => {
        const opacity = activeIndexAnimated.interpolate({
          inputRange: [-index - 1, -index, -index + 1],
          outputRange: [0, 1, 0],
        });
        return (
          <Animated.View
            key={`slide-${slide.slug}`}
            style={[
              styles.slideContainer,
              {
                opacity,
                zIndex: slides.length - index,
              },
            ]}>
            <Slide slide={slide} index={index} />
          </Animated.View>
        );
      })}
      <View style={styles.detailSlide}>
        <PrimaryButton
          style={styles.detailBtn}
          title="Xem ngay"
          callback={() => console.log(activeMovie)}
        />
        <View style={styles.textSlideContainer}>
          {slides.map((slide, index) => {
            const translateY = activeIndexAnimated.interpolate({
              inputRange,
              outputRange: [
                (-activeIndex - 1) * 80,
                -activeIndex * 80,
                (-activeIndex + 1) * 80,
              ],
            });
            return (
              <Animated.Text
                style={[styles.textSlide, {transform: [{translateY}]}]}
                key={`text-slide-${slide.slug}`}>
                {slide.name}
              </Animated.Text>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Slides;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: dimensions.width,
    height: dimensions.height * 0.6,
  },
  textSlide: {
    fontFamily: rootFont.bold,
    fontSize: 25,
    height: 80,
    textAlignVertical: 'center',
    color: rootColor.white,
  },
  detailSlide: {
    position: 'absolute',
    width: '70%',
    top: '60%',
    zIndex: 2000,
  },
  detailBtn: {
    marginBottom: 20,
  },
  textSlideContainer: {
    height: 80,
    overflow: 'hidden',
  },
  slideContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
  },
  mockBtn: {
    alignSelf: 'flex-end',
    padding: 10,
    margin: 10,
    backgroundColor: 'tomato',
    zIndex: 100000,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
});
