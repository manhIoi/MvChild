import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SocialButton from './SocialButton';

interface GroupSocialButtonPropsType {
  socialButton: any[];
}

const GroupSocialButton = ({socialButton}: GroupSocialButtonPropsType) => {
  return (
    <View style={styles.container}>
      {socialButton.map(button => (
        <SocialButton
          socialButton={button}
          key={`social-button-${button.uri}`}
        />
      ))}
    </View>
  );
};

export default GroupSocialButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
