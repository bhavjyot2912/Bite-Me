// import { View, Text } from "react-native";
// import React from "react";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import Ionicons from "react-native-vector-icons/Ionicons";

// export default function SearchBar() {
//   return (
//     <View style={{ marginTop: 10, flexDirection: "row" }}>
//       <GooglePlacesAutocomplete
// 	  	onPress={(data, deatils = null) => {
// 			  console.log(data.description)
// 			  const city = "Detroit"
// 			  cityHandler(city);
// 		  } }
//         placeholder="Location 📍"
//         styles={{
//           textColor: {
//             backgroundColor: "#eee",
//             borderRadius: 40,
//             marginTop: 10,
//             fontWeight: "500",
//           },
//           textInputContainer: {
//             backgroundColor: "#006491",
//             borderRadius: 40,
//             flexDirection: "row",
//             alignItems: "center",
//             marginRight: 10,
//           },
//         }}
//         renderRightButton={() => (
//           <View
//             style={{
//               flexDirection: "row",
//               backgroundColor: "#eee",
//               marginRight: 8,
//               borderRadius: 40,
//               padding: 10,
//             }}
//           >
//             <Text> 🔍 Search</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import Home from "../screens/Home";

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={
          !props.clicked
            ? styles.searchBar__unclicked
            : styles.searchBar__clicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search 📍"
          value={props.searchPhrase}
          //const city={value}
          //const city={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
          onFocus={() => {
            props.setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {props.clicked && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              props.setSearchPhrase("");
            }}
          />
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {props.clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              props.setClicked(false);
              const city = value;
            }}
          ></Button>
        </View>
      )}
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});
