import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import React,{useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { HOST } from "../Components/Host/Constants";

const Forgot = ({navigation}) => {
    const [Email, setEmail] = useState('');
    const [loading, setLoading] = useState('');

    const Forgotsubmit = async () => {
      setLoading(true);
      try {
        const response = await fetch(
         
          `${HOST}/api/clientauth/forgotclient`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ Email }),
          }
        );
  
        const json = await response.json();
  
        console.log(json);
        if (json.error) {
          setLoading(false);
          Alert.alert("Error", json.error, [
            {
              text: "OK",
              onPress: () => null,
              style: "cancel",
            },
          ]);
        } else {
          if (json.success) {
            setLoading(false);
            Alert.alert("Success!", "Check your email for a password reset OTP", [
              {
                text: "Ok",
                onPress: () => null,
                style: "cancel",
              },
            ]);
            navigation.navigate("NurseReset");
            console.log("done");
          } else if (!Email) {
            Alert.alert("Error!", "Geben sie eine gültige E-Mail-Adresse an.", [
              {
                text: "Ok",
                onPress: () => null,
                style: "cancel",
              },
            ]);
          }
        }
      } catch (error) {
        console.error(error.message);
      }
    };

  return (
    <View>
      <SafeAreaView>
        <View style={styles.ballleft} />
        <ScrollView>
          <View style={styles.imgView}>
            <Image
              style={styles.cliImg}
              source={require("../../assets/forgetpass.png")}
            />
          </View>
          <View>
            <Text
            style={{
                textAlign:"center",
                fontSize:18,
                paddingVertical:10,
                color:"#009571",
                fontWeight:"bold"
            }}
            >Forgot your Password?</Text>
            <Text
            style={{
                textAlign:"center",
            }}
            >Enter your Email address for password reset.</Text>
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
          <View
            style={{ paddingHorizontal: 20, marginTop: 10, }}
          >
            <TouchableOpacity
            onPress={() => navigation.navigate("Resetpass")}
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
                Send OTP
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
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
    marginTop: 120,
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
});

export default Forgot;
