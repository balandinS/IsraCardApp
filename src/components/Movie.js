import React from "react";
import { View,  StyleSheet, TouchableOpacity, Text } from "react-native";
export default ({ movie,  onNavigate }) => {
  return (
    <TouchableOpacity
      onPress={onNavigate}
    >
      <View style={styles.movie}>
        <Text style={styles.text}>{movie.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  movie: {
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#eee",
    marginBottom: 10,
  },
  text: {
    fontSize: 20
  }
});
