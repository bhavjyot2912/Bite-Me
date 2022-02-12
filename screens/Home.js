import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MenuBar from "../components/MenuBar";
import Items from "../components/Items";

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
      <ScrollView >
        <MenuBar />
        <Items />
        <Items />
        <Items />
      </ScrollView>
    </SafeAreaView>
  );
}
