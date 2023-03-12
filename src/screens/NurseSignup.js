import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TextInput,
    Pressable,
    TouchableOpacity,
    Linking,
    Alert,
  } from "react-native";
  import React, { useState } from "react";
  import { useTogglePasswordVisibility } from "../Components/useTogglePasswordVisibility";
  import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
  import { SafeAreaView } from "react-native-safe-area-context";
  import BouncyCheckbox from 'react-native-bouncy-checkbox';
  import { HOST } from "../Components/Host/Constants";
  
  const NurseSignup = ({navigation}) => {
    const [cname, setCname] = useState("");
    const [Email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false)
    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
      useTogglePasswordVisibility();

      const handleTextPress = () => {
        Linking.openURL('https://www.maniwebdev.com');
      };

      const HandleSignup = async () => {
        setLoading(true);
      
        // Check if all fields are filled
        if (!cname || !Email || !phone || !password || !conpassword) {
          setLoading(false);
          Alert.alert("Error", "Bitte füllen Sie alle Eingabefelder aus.", [
            {
              text: "Ok",
              onPress: () => null,
              style: "cancel",
            },
          ]);
          return;
        }
      
        // Check if passwords match
        if (password !== conpassword) {
          setLoading(false);
          Alert.alert("Error", "Das Passwort stimmt nicht überein.", [
            {
              text: "Ok",
              onPress: () => null,
              style: "cancel",
            },
          ]);
          return;
        }
      
        const response = await fetch(`${HOST}/api/nurse/newuser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cname, Email, phone, password, conpassword }),
        });
      
        const json = await response.json();
      
        console.log(json);
      
        if (Email === json.Email) {
          Alert.alert("Error!", "Es tut uns leid, ein Benutzer mit dieser E-Mail existiert bereits.", [
            {
              text: "Ok",
              onPress: () => null,
              style: "cancel",
            },
          ]);
        }
      
        if (json.success) {
          Alert.alert("Success!", "Registrieren Sie sich erfolgreich. Bestätigen Sie Ihre E-Mail!", [
            {
              text: "Ok",
              onPress: () => null,
              style: "cancel",
            },
          ]);
         navigation.navigate("Verify")
         setCname('');
         setEmail('');
         setPhone('');
         setPassword('');
         setConPassword('');
        } else {
          setLoading(false);
          Alert.alert("Error!", json.error, [
            {
              text: "Ok",
              onPress: () => null,
              style: "cancel",
            },
          ]);
        }
      };

    return (
      <View>
        <SafeAreaView>
        <View
        style={{backgroundColor:"white"}}
        >
          <ScrollView
          showsVerticalScrollIndicator= {false}
          >
          <View style={styles.ballleft} />
            <View>
              <Text>Logo</Text>
            </View>
            <View style={styles.imgView}>
              <Image
                style={styles.cliImg}
                source={require("../../assets/nursesignup.png")}
              />
            </View>
            <Text
            style={{
              fontSize: 14,
              marginTop: 20,
              fontWeight: "bold",
              color: "grey",
              marginLeft: 15,
            }}
          >
            User name*
          </Text>
            <View style={styles.LogIn2}>
            <FontAwesome name="user" size={24} color="#009571" />
              <TextInput
                style={styles.InputL1}
                autoCapitalize="none"
                underlineColorAndroid={"transparent"}
                autoCorrect={false}
                value={cname}
                placeholder="Enter Your Name"
                onChangeText={(actualdata) => setCname(actualdata)}
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
              Phone*
            </Text>
              <View style={styles.LogIn2}>
              <FontAwesome name="phone" size={24} color="#009571" />
                <TextInput
                  style={styles.InputL1}
                  autoCapitalize="none"
                  underlineColorAndroid={"transparent"}
                  keyboardType="number-pad"
                  autoCorrect={false}
                  value={phone}
                  placeholder="Enter Your Phone"
                  onChangeText={(actualdata) => setPhone(actualdata)}
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
                fontSize: 14,
                marginTop: 5,
                fontWeight: "bold",
                color: "grey",
                marginLeft: 15,
              }}
            >
              Confirm Password*
            </Text>
            <View style={styles.LogIn1}>
              <MaterialCommunityIcons name="lock" size={24} color="#009571" />
              <TextInput
                style={styles.InputL1}
                secureTextEntry={passwordVisibility}
                autoCapitalize="none"
                underlineColorAndroid={"transparent"}
                autoCorrect={false}
                value={conpassword}
                placeholder="Confirm Password"
                onChangeText={(actualdata) => setConPassword(actualdata)}
              />
              <Pressable onPress={handlePasswordVisibility}>
                <MaterialCommunityIcons
                  name={rightIcon}
                  size={22}
                  color="#009571"
                />
              </Pressable>
            </View>
            <BouncyCheckbox
            style={styles.ball}
            isChecked={isChecked}
            text={
              <TouchableOpacity onPress={handleTextPress}>
                <Text style={styles.checkboxLabel}>
                  I agree to the{' '}
                  <Text style={styles.linkText}>Terms & Policy</Text>
                </Text>
              </TouchableOpacity>
            }
            iconStyle={{ borderColor: '#007AFF' }}
            fillColor="#009571"
            size={22}
            onPress={(isChecked) => setIsChecked(isChecked)}
          />
            </View>
            <View
              style={{ paddingHorizontal: 20, marginTop: 10, paddingBottom:40 }}
            >
              <TouchableOpacity
              onPress={HandleSignup}
              disabled={!isChecked}
                style={{
                  backgroundColor: !isChecked ? "grey": "#009571",
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
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
        width: 200,
        height: 200,
        borderRadius: 500,
        backgroundColor: '#009571',
        marginLeft: 5,
        position: 'absolute',
        top: -120,
        right: -90,
    },
    linkText: {
      color: '#009571',
      textDecorationLine: 'underline',
    },
    ball:{
  paddingHorizontal:15,
  paddingVertical:10
    },
  });
  
  export default NurseSignup;
  