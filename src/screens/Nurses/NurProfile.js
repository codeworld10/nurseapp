import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import NurMenu from "../../Components/Navigation/NurMenu";

const NurProfile = ({navigation}) => {
  return (
   
    <View
    style={{
      flex: 1,
      justifyContent:"space-between"
    }}
    >
      <ScrollView
        //style={{backgroundColor:"white"}}
        showsVerticalScrollIndicator={false}
      >
    
        <View style={styles.profile}>
        <View style={{alignSelf:"flex-end", paddingHorizontal:20, marginVertical:10,}}>
        <TouchableOpacity
        onPress={() => navigation.navigate("UpdateNurse")}
        >
        <Ionicons
        name="settings" size={24} color="white" />
        </TouchableOpacity>
        </View>
          <Image
            style={styles.Img}
            source={require("../../../assets/usm.png")}
          />
          <Text style={styles.name}>Anna (Asian)</Text>
        </View>
        <View style={styles.Marg}>
          <Text style={styles.Require}>Requirements</Text>
          <View style={styles.Para}>
            <Text style={{ paddingHorizontal: 10, paddingVertical:10, color:"grey", }}>
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
              Dummy Text Dummy Text Dummy Text Dummy Text
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
              Dummy Text Dummy Text Dummy Text Dummy Text
            </Text>
          </View>
          <Text style={styles.Require}>Contact</Text>
          <View style={styles.ParaContact}>
          <View style={styles.contact}>
          <Feather name="phone-call" size={24} color="green" />
         <Text> +923413160032</Text>
          </View>
          <View style={styles.contact}>
          <MaterialIcons name="email" size={24} color="green" />
          <Text>usman000033@gmail.com</Text>
          </View>
        </View>
        </View>
      </ScrollView>
      <View>
     <NurMenu />
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    backgroundColor: "rgba(0, 130, 100, 0.95)",
    elevation: 20,
    borderBottomEndRadius: 80,
    borderBottomLeftRadius: 80,
  },
  Img: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    alignSelf: "center",
    borderRadius: 150,
  },
  name: {
    textAlign: "center",
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  Marg: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  Require: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
    paddingVertical: 10,
  },
  Para: {
    elevation: 20,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    backgroundColor: "white",
    borderRadius: 10,
  },
  ParaContact: {
    elevation: 20,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom:20,
  },
  contact:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
 paddingHorizontal:10,
 paddingVertical:10,
  },
});

export default NurProfile;
