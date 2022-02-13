import React from "react";
import { View, Text} from "react-native";


export default function BottomTabs(){
    return(
        <View style={{flexDirection: "row", margin: 10, marginHorizontal: 30, fontWeight: "900", justifyContent: "space-between", alignItems: "center"}}> 
            <Text>
                Refresh
            </Text>
            <Text>
                Exit
            </Text>
            <Text>
                View Cart
            </Text>
        </View>
    );
}

