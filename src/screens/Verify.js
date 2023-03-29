import React, { useState, useRef } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HOST } from "../Components/Host/Constants";

const Verify = ({navigation}) => {
  const [Otp, setOtp] = useState("")
  const refs = useRef([]);

  const handleChange = (value, index) => {
    setOtp((prevState) => {
      const newState = prevState.split("");
      newState[index] = value;
      return newState.join("");
    });

    if (value && index < 3) {
      refs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && index > 0) {
      refs.current[index - 1].focus();
    }
  };

  const handleVerifyOtp = async () => {
    try {
      // Call the API to verify the OTP
      const response = await fetch(`${HOST}/api/nurse/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
         Otp: Otp,
        }),
      });
      const json = await response.json();
      
      if (json.success) {
        Alert.alert("Success!", "Herzlichen Glückwunsch, Ihre E-Mail wurde erfolgreich bestätigt.", [
          {
            text: "Ok",
            onPress: () => null,
            style: "cancel",
          },
        ]);
        navigation.navigate("NurseLogin")
      } else {
        // If OTP is incorrect, show an error message
        Alert.alert("Error!", json.error, [
          {
            text: "Ok",
            onPress: () => null,
            style: "cancel",
          },
        ]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.ballleft} />
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
      <View>
        <View style={styles.imgView}>
          <Image
            style={styles.cliImg}
            source={require("../../assets/emailveri.png")}
          />
        </View>
        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "#009571",
              paddingVertical: 15,
            }}
          >
            Email Verification
          </Text>
          <Text style={{ textAlign: "center", paddingBottom: 15 }}>
            Check your email for OTP!
          </Text>
        </View>
        <View style={styles.container}>
          {[...Array(4)].map((_, i) => (
            <View style={styles.inputContainer} key={i}>
              <TextInput
                autoCapitalize="none"
                ref={(ref) => (refs.current[i] = ref)}
                value={Otp[i] || ""}
                onChangeText={(value) => handleChange(value, i)}
                onKeyPress={(e) => handleKeyPress(e, i)}
                maxLength={1}
                style={styles.input}
              />
              {i < 3 && <View style={styles.dash} />}
            </View>
          ))}
        </View>
        <View
        style={{ paddingHorizontal: 20, marginTop: 20, }}
        >
        <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ballleft: {
    width: 200,
    height: 200,
    borderRadius: 500,
    backgroundColor: "#009571",
    marginLeft: 5,
    position: "absolute",
    top: -120,
    right: -90,
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 5,
  },
  input: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    width: 40,
    height: 40,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#ccc",
  },
  dash: {
    width: 10,
    height: 2,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  button: {
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
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  imgView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cliImg: {
    height: 250,
    width: 250,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 150,
  },
});

export default Verify;
