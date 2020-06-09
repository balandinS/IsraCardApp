import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import * as THEME from "../../global/Theme";

export default ({ children ,color=THEME.DEFUALT_COLOR, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} >
      <View style={{...styles.button, backgroundColor: color}}>
        <Text style={{fontSize: 20, fontWeight: "bold", color: THEME.TEXT_COLOR_WHITE}}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
   button: {
     flexDirection: "row",
     paddingHorizontal: 5,
     paddingVertical: 10,
     borderRadius: 5,
     padding: 10,
     justifyContent: "center",
     alignItems: "center",
     fontSize: 20,
     minWidth: 100,
     height: 40
     

   }
});
