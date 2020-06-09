import React, { useEffect,useState } from "react";
import { View,  StyleSheet, TouchableOpacity, Text } from "react-native";
export default ({ movie,  onRemove }) => {
  const [mov, setMovie] = useState({})
  useEffect(() => {
    setMovie({...movie})
  },[movie])
  return (
    <TouchableOpacity
      onPress={onRemove}>
      <View style={styles.movieContainer}>
        <Text style={styles.text}>{mov.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  movieContainer: {
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
