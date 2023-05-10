import { StatusBar } from "react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Routes from "../src/routes/app.routes";

export default function App(){
  return(
    <View style={{flex: 1}}>
      <StatusBar style="auto"/>
      <Routes/>
    </View>
  )
}