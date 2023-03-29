import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
  } from 'react-native';
  import React from 'react';
  
  const Welcome = ({navigation}) => {
    return (
      <SafeAreaView>
        <View style={styles.space}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text>Logo</Text>
            </View>
            <View style={styles.ball} />
            <View style={styles.imgView}>
              <Image
                style={styles.LoImg}
                source={require('../../assets/wl.png')}
              />
            </View>
            <Text style={styles.weltext}>
              Welcome to the careconnect. Save your time tell us your
              requirements. We will find the find nurse for you. Welcome to the
              careconnect. Save your time tell us your requirements. We will find
              the find nurse for you.
            </Text>
            <View style={styles.marg}>
              <TouchableOpacity onPress={() => navigation.navigate("ClientLogin")}>
                <Text style={styles.carebtn}>Want a Care</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("NurseLogin")}>
                <Text style={styles.carebtn}>Want a Job</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <View style={styles.ballleft} />
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    space: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    LoImg: {
      height: 250,
      width: 250,
      resizeMode: 'contain',
      alignSelf: 'center',
      marginTop: 120,
    },
    imgView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    ball: {
      width: 200,
      height: 200,
      borderRadius: 500,
      backgroundColor: '#009571',
      marginLeft: 5,
      position: 'absolute',
      top: -120,
      right: -90,
      flexDirection: 'row',
    },
    ballleft: {
      position: 'absolute',
      bottom: -150,
      left: -100,
      width: 200,
      height: 200,
      borderRadius: 500,
      backgroundColor: '#009571',
    },
  
    weltext: {
      textAlign: 'center',
      paddingHorizontal: 20,
    },
    carebtn: {
      textAlign: 'center',
      backgroundColor: '#009571',
      marginVertical: 5,
      marginHorizontal: 100,
      paddingVertical: 13,
      color: 'white',
      borderRadius: 10,
    },
    marg: {
      marginTop: 50,
      paddingBottom:40
    },
  });
  
  export default Welcome;
  