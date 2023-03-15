import { StyleSheet, Text, View, FlatList, Image, StatusBar, } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import profileContext from "../../../component/profileContext";

const GetNurses = () => {
  const { nurse, GetNurses } = useContext(profileContext);
  const [numColumns, setNumColumns] = useState(2);

  useEffect(() => {
    GetNurses();
  }, []);

  return (
    <View>
    <StatusBar backgroundColor= "#009571" />
      <View>
        <FlatList
          data={nurse}
          key={numColumns}
          keyExtractor={(item) => item.key}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.Card}>
              <View>
                <Image
                  style={styles.NurseImg}
                  source={require("../../../assets/usm.png")}
                />
                <Text style={styles.NurseName}>{item.cname}</Text>
                <Text style={styles.Status}>Available</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Card: {
    flex: 1,
    margin: 8,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius:10,
  },

  NurseImg: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 50,
  },

  NurseName:{
    textAlign:"center",
    fontSize: 17,
    paddingVertical:5,
    fontWeight:"700",
  },
  Status:{
    textAlign:"center",
    color:"grey",
  }
});

export default GetNurses;
