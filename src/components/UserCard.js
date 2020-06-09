import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {useSelector} from 'react-redux';
import AppButton from './ui/AppButton';
import FBKlogin from './FBKlogin';
export default ({onNavigation}) => {
  const user = useSelector(state => state.user);
  return (
    <View style={styles.contianer}>
      <View>
        <Text style={styles.text}>Hello, {user.userName}</Text>
      </View>

      <View style={styles.imageContianer}>
        <Image
          style={styles.image}
          source={require(`../../assests/images/user.png`)}
        />
      </View>
      <FBKlogin />
      <AppButton onPress={onNavigation}>
        Skip Signin
      </AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  imageContianer: {
    height: 300,
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 30,
  },
});
