import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import profileContext from "../../component/profileContext";

const Contact = () => {
  const { addContact } = useContext(profileContext);
  const [message, setMessage] = useState("");

  const handleContact = () => {
    addContact(message);
    setMessage("");
    Alert.alert(
      "Success",
      "We have received your request and we will contact 📲 with you soon.",
      [
        {
          text: "Ok",
          onPress: () => null,
          style: "cancel",
        },
      ]
    );
  };

  return (
    <ScrollView>
    <View style={styles.container}>
    <View>
    <Text style={styles.Logo}>Logo</Text>
    </View>
      <View>
        <Text style={styles.topText}>
          If you want to ask something or need any help. Feel free to contact
          us!
        </Text>
        <Text
        style={styles.InputHead}
        >Message*</Text>
        <View style={styles.LogIn2}>
          <TextInput
          style={styles.InputL1}
            placeholder="Your message"
            multiline={true}
            value={message}
            onChangeText={(newValue) => setMessage(newValue)}
          />
        </View>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
        disabled={message.length < 10}
        style={{
          backgroundColor: message.length < 10 ? "grey" : "#009571",
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
        onPress={handleContact}>
          <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "500",
          }}
          >Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  Logo:{
textAlign:"center",
marginTop:100,
  },
  topText: {
    textAlign: "center",
    paddingHorizontal: 20,
    fontSize: 17,
    fontWeight: "400",
    paddingVertical:100,
  },
  btnView: {
    paddingHorizontal: 20,
    marginTop: 10,
    paddingBottom: 40,
  },
  LogIn2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "green",
    height: 80,
    borderRadius: 10,
    marginHorizontal: 15,
    paddingHorizontal: 2,
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
  InputHead:{
paddingHorizontal:15,
color:"grey",
  },
});

export default Contact;
