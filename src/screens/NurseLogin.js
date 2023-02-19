import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    Pressable,
    TouchableOpacity,
  } from "react-native";
  import React, { useState } from "react";
  import { useTogglePasswordVisibility } from "../Components/useTogglePasswordVisibility";
  import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
  import { SafeAreaView } from "react-native-safe-area-context";
  
  const NurseLogin = ({navigation}) => {
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
      useTogglePasswordVisibility();
    return (
      <View>
        <SafeAreaView>
        <View
        style={{display:"flex", justifyContent:"space-between", backgroundColor:"white"}}
        >
          <ScrollView>
            <View>
              <Text>Logo</Text>
            </View>
            <View style={styles.imgView}>
              <Image
                style={styles.cliImg}
                source={require("../../assets/nurselogin.png")}
              />
            </View>
            <Text
              style={{
                fontSize: 14,
                marginTop: 5,
                fontWeight: "bold",
                color: "grey",
                marginLeft: 15,
              }}
            >
              Email*
            </Text>
            <View>
              <View style={styles.LogIn2}>
                <MaterialIcons name="email" size={24} color="#009571" />
                <TextInput
                  style={styles.InputL1}
                  autoCapitalize="none"
                  underlineColorAndroid={"transparent"}
                  autoCorrect={false}
                  value={Email}
                  placeholder="Enter Your Email"
                  onChangeText={(actualdata) => setEmail(actualdata)}
                />
              </View>
              <Text
                style={{
                  fontSize: 14,
                  marginTop: 5,
                  fontWeight: "bold",
                  color: "grey",
                  marginLeft: 15,
                }}
              >
                Password*
              </Text>
              <View style={styles.LogIn1}>
                <MaterialCommunityIcons name="lock" size={24} color="#009571" />
                <TextInput
                  style={styles.InputL1}
                  secureTextEntry={passwordVisibility}
                  autoCapitalize="none"
                  underlineColorAndroid={"transparent"}
                  autoCorrect={false}
                  value={password}
                  placeholder="Enter Your Password"
                  onChangeText={(actualdata) => setPassword(actualdata)}
                />
                <Pressable onPress={handlePasswordVisibility}>
                  <MaterialCommunityIcons
                    name={rightIcon}
                    size={22}
                    color="#009571"
                  />
                </Pressable>
              </View>
              <Text
                style={{
                  textAlign: "right",
                  paddingHorizontal: 15,
                  paddingVertical: 15,
                  color: "#009571",
                }}
              >
                Forgot Password
              </Text>
            </View>
            <View
              style={{ paddingHorizontal: 20, marginTop: 10, }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#009571",
                  height: 45,
                  justifyContent: "center",
                  borderRadius: 15,
                  elevation: 20,
                  shadowColor: "#000000",
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <View
            style={{
              paddingVertical:40,
              display:"flex",
              flexDirection:"row",
              justifyContent:"center",
              alignItems:"center",
            }}
            >
            <Text>
            Don't have an account? 
            </Text>
            <Text
            onPress={() => navigation.navigate("NurseSignup")}
            style={{
              marginLeft:5,
             fontWeight:"bold",
             color:"#009571",
             fontSize:14
            }}
            >
            Sign Up
            </Text>
            </View>
          </ScrollView>
          <View style={styles.ballleft} />
          </View>
        </SafeAreaView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    cliImg: {
      height: 250,
      width: 250,
      resizeMode: "contain",
      alignSelf: "center",
      marginTop: 120,
    },
    imgView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    LogIn1: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "green",
      height: 40,
      borderRadius: 10,
      marginHorizontal: 15,
      paddingHorizontal: 12,
    },
    InputL1: {
      width: "90%",
      paddingHorizontal: 5,
      elevation: 20,
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    LogIn2: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "green",
      height: 40,
      borderRadius: 10,
      marginHorizontal: 15,
      paddingHorizontal: 2,
    },
    ballleft: {
      position: 'absolute',
      bottom: -140,
      left: -120,
      width: 200,
      height: 200,
      borderRadius: 500,
      backgroundColor: '#009571',
    },
  });
  
  export default NurseLogin;
  