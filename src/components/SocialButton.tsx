import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface SocialButtonPropsType {
  socialButton: any;
}

const SocialButton = ({socialButton}: SocialButtonPropsType) => {
  return (
    <TouchableOpacity onPress={socialButton.callback} style={styles.container}>
      <Image
        source={{
          uri: socialButton.uri,
        }}
        style={{...StyleSheet.absoluteFillObject, ...styles.image}}
      />
    </TouchableOpacity>
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
