import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface SocialButtonPropsType {
  socialButton: any;
}

const SocialButton = ({socialButton}: SocialButtonPropsType) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: socialButton.uri,
        }}
        style={{...StyleSheet.absoluteFillObject, ...styles.image}}
      />
    </View>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 25,
    overflow: 'hidden',
    margin: 10,
  },
  image: {},
});
