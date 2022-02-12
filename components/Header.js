import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Header(props) {
  /*const [activeTab, setActiveTab] = useState("Delivery");*/

  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
        style={{ marginTop: 30 }}
      />

      <HeaderButton
        text="Takeaway"
        btnColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
        style={{ marginTop: 30 }}
      />

      <HeaderButton
        text="Deliver on Train 🚆"
        btnColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
        style={{ marginTop: 30 }}
      />

      <HeaderButton
        text="Dine-in"
        btnColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
        style={{ marginTop: 30 }}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "black" : "white",
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 10,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? "white" : "black",
        fontSize: 15,
        fontWeight: "700",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
