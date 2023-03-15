import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useTogglePasswordVisibility } from "../Components/useTogglePasswordVisibility";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { HOST } from "../Components/Host/Constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NurseLogin = ({ navigation }) => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState("");
  const [loading, setLoading] = useState(false);
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const HandleLogin = async () => {
    setLoading(true);
    const response = await fetch(`${HOST}/api/nurse/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Email, password, isVerified }),
    });

    const json = await response.json();

    console.log(json);
    if (json.success) {
      await AsyncStorage.setItem("token", json.authtoken);
      if (json.data && json.data.user) {
        await AsyncStorage.setItem("userId", json.data.user.id);
        await AsyncStorage.setItem("name", json.data.user.name);
      }
      Alert.alert("Success!", "Anmelden erfolgreich 😍😍. Willkommen!", [
        {
          text: "Ok",
          onPress: () => null,
          style: "cancel",
        },
      ]);
      navigation.navigate("NurseProfile");
      setEmail("");
      setPassword("");
    } else if (!Email || !password) {
      setLoading(false);
      Alert.alert("Error!", "Fehler ! Bitte füllen sie alle erforderlichen(*) Felder aus", [
        {
          text: "Ok",
          onPress: () => null,
          style: "cancel",
        },
      ]);
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
        <View style={{ backgroundColor: "white" }}>
          <View style={styles.ballleft} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text>Logo</Text>
            </View>
            <View style={styles.imgView}>
              <Image style={styles.cliImg} />
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
                  placeholder="Geben sie ihre Email ein."
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
                Passwort*
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
                  placeholder="Geben sie ihr Passwort ein."
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
                onPress={() => navigation.navigate("ForgotNurse")}
              >
                Ich habe mein Passwort vergessen
              </Text>
            </View>
            <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
              <TouchableOpacity
                onPress={HandleLogin}
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
                paddingVertical: 40,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text> Ich habe keinen Account</Text>
              <Text
                onPress={() => navigation.navigate("NurseSignup")}
                style={{
                  marginLeft: 5,
                  fontWeight: "bold",
                  color: "#009571",
                  fontSize: 14,
                }}
              >
                Registrieren
              </Text>
            </View>
            <Text
              style={styles.Verify}
              onPress={() => navigation.navigate("Verify")}
            >
              Email bestätigen
            </Text>
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
    backgroundColor: "#009571",
    marginLeft: 5,
    position: "absolute",
    top: -120,
    right: -90,
  },
  Verify: {
    textAlign: "center",
    fontSize: 14,
    paddingBottom: 20,
    color: "#009571",
  },
});

export default NurseLogin;
