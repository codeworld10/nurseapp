import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, RefreshControl, } from "react-native";
import React,{useState, useEffect, useCallback} from "react";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import NurMenu from "../../Components/Navigation/NurMenu";
import { HOST } from "../../Components/Host/Constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NurProfile = ({navigation}) => {
  const host = `${HOST}`;
  const [nurse, setNurse] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  
  const getUser = async () => {
    const response = await fetch(`${host}/api/nurse/getuser/:userId`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": await AsyncStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setNurse(json);
  };
  useEffect(() => {
    getUser();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

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
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getUser} />
        }
      >
    
        <View style={styles.profile}>
        <View style={{alignSelf:"flex-end", paddingHorizontal:20, marginVertical:10,}}>
        <TouchableOpacity
        onPress={() => navigation.navigate("UpdateNurse", {nurse})}
        >
        <Ionicons
        name="settings" size={24} color="white" />
        </TouchableOpacity>
        </View>
          <Image
            style={styles.Img}
            source={require("../../../assets/usm.png")}
          />
          <Text style={styles.name}>{nurse.cname}</Text>
        </View>
        <View style={styles.Marg}>
          <Text style={styles.Require}>Requirements</Text>
          <View style={styles.Para}>
            <Text style={{ paddingHorizontal: 10, paddingVertical:10, color:"grey", }}>
              Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text
              Dummy Text Dummy Text Dummy Text Dummy Text
            </Text>
          </View>
          <Text style={styles.Require}>Contact</Text>
          <View style={styles.ParaContact}>
          <View style={styles.contact}>
          <Feather name="phone-call" size={24} color="green" />
         <Text style={styles.ContactText}>{nurse.phone}</Text>
          </View>
          <View style={styles.contact}>
          <MaterialIcons name="email" size={24} color="green" />
          <Text style={styles.ContactText}>{nurse.Email}</Text>
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
    backgroundColor: "rgba(0, 149, 113, 0.44)",
    elevation: 5,
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
  ContactText:{
    paddingHorizontal:4,
    color:"grey",
  },
});

export default NurProfile;
