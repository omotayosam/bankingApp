import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View>
          <Image
            style={styles.usersm}
            source={require("../../assets/u1.png")}
          />
          <View>
            <Text>Welcome Back</Text>
            <text>David Tachine</text>
          </View>
        </View>

        <View>
          <Image
            style={[styles.usersm, { color: "white" }]}
            source={require("../../assets/icons/Group.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  usersm: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
});
