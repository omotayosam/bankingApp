import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc  ";
import SafeView from "../components/SafeView";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={[SafeView.AndroidSafeArea, (backgroundColor: "#19173D")]}
    ></SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
