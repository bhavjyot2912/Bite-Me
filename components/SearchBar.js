import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SearchBar() {
  return (
    <View style={{ marginTop: 10, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        placeholder="Location 📍"
        styles={{
          textColor: {
            backgroundColor: "#eee",
            borderRadius: 40,
            marginTop: 10,
            fontWeight: "500",
          },
          textInputContainer: {
            backgroundColor: "#006491",
            borderRadius: 40,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#eee",
              marginRight: 8,
              borderRadius: 40,
              padding: 10,
            }}
          >
            <Text> 🔍 Search</Text>
          </View>
        )}
      />
    </View>
  );
}
