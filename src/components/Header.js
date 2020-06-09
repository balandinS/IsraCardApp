import React from "react";
import { View, StyleSheet, Text } from "react-native";
import * as THEME from '../global/Theme'
export default ({ title }) => {
  return (
    <View style={styles.navContianer}>
      <Text style={styles.navbar}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navContianer: {
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: THEME.PRIMERY_COLOR,
    height: 70,
  },
  navbar: {
    fontSize: 30,
    color: THEME.TEXT_COLOR_WHITE,
  },
});
