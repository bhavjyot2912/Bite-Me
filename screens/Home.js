import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MenuBar from "../components/MenuBar";

export default function Home() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View style={{ backgroundColor: "#006491", padding: 43.5 }}>
        <Header />
        <SearchBar />
      </View>
      <MenuBar/>
    </SafeAreaView>
  );
}
