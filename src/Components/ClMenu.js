import { Text, TouchableOpacity, View, Alert } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons, MaterialIcons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const ClMenu = () => {
const navigation = useNavigation();

  const Logout = () => {
    AsyncStorage.removeItem("token");
    navigation.navigate("Welcome");
    //console.log("Client is done")
  }

  return (
    <View
    style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:20,
        paddingVertical:10,
        backgroundColor:"#009571",
        borderRadius:20,
    }}
    >
    <TouchableOpacity>
    <MaterialCommunityIcons name="frequently-asked-questions" size={34} color="white" />
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => navigation.navigate("GetNurses")}
    >
    <MaterialIcons name="person-search" size={34} color="white" />
    </TouchableOpacity>
    <TouchableOpacity>
    <FontAwesome5 name="user-circle" size={34} color="white" />
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => navigation.navigate("Contact")}
    >
    <AntDesign name="customerservice" size={34} color="white" />
    </TouchableOpacity>
    <TouchableOpacity
    onPress={() => 
    Alert.alert("Hold on", "Are you sure you want to logout?", [
      {
        text:"Yes",
        onPress: () => Logout(),
        style: "cancel",
      },
      {
        text:"No",
        onPress: null,
        style: "cancel",
      },
    ])
    }
    >
    <AntDesign name="logout" size={34} color="white" />
    </TouchableOpacity>
    </View>
  )
}


export default ClMenu;