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
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HOST } from "../Components/Host/Constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTogglePasswordVisibility } from "../Components/useTogglePasswordVisibility";

const Resetpass = ({ navigation }) => {
  const [Otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConPassword] = useState("");
  const [loading, setLoading] = useState("");
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
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

  const Resetsubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${HOST}/api/auth/resetpas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Otp, password }),
      });

      const json = await response.json();

      if (!json.success) {
        setLoading(false);
        Alert.alert("Error", json.msg, [
          {
            text: "OK",
            onPress: () => null,
            style: "cancel",
          },
        ]);
      } else if (!Otp || !password) {
        setLoading(false);
        Alert.alert("Error!", "Kindly enter your OTP and password", [
          {
            text: "Ok",
            onPress: () => null,
            style: "cancel",
          },
        ]);
      } else if (json.success) {
        setLoading(false);
        Alert.alert("Success!", json.msg, [
          {
            text: "Ok",
            onPress: () => null,
            style: "cancel",
          },
        ]);
        navigation.navigate("ClientLogin");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.ballleft} />
      <ScrollView showsVerticalScrollIndicator={false}>
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
                paddingBottom: 15,
                fontSize: 20,
                paddingVertical: 20,
                color: "#009571",
              }}
            >
              Enter your OTP!
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
          <View>
            <Text
              style={{
                fontSize: 14,
                marginTop: 5,
                fontWeight: "bold",
                color: "grey",
                marginLeft: 15,
              }}
            >
              New Password*
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
                placeholder="Enter Your New Password"
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
              Confirm New Password*
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
                placeholder="Confirm New Password"
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
          </View>
          <View
            style={{ paddingHorizontal: 20, marginTop: 20, paddingBottom: 20 }}
          >
            <TouchableOpacity
              disabled={password !== conpassword}
              style={{
                backgroundColor: password === conpassword ? "#009571" : "grey",
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
              onPress={Resetsubmit}
            >
              <Text style={styles.buttonText}>Reset Password</Text>
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
});

export default Resetpass;
