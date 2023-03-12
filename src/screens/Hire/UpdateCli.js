import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RadioButton } from "react-native-paper";
import profileContext from "../../../component/profileContext";

const UpdateCli = ({ route, navigation }) => {
  const {UpdateClient} = useContext(profileContext);
  const { client } = route.params;
  const { _id } = client;
  const [cname, setCname] = useState('');
  const [Email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [patientgender, setPatientgender] = useState(client.patientgender);
  const [allergy, setAllergy] = useState(client.allergy);
  const [incontinent, setIncontinent] = useState(client.incontinent);
  const [dementia, setDementia] = useState(client.dementia);
  const [animals, setAnimals] = useState(client.animals);
  const [alone, setAlone] = useState(client.alone);
  const [shopping, setShopping] = useState(client.shopping);
  const [carelevel, setCarelevel] = useState(client.carelevel);
  const [aggressive, setAggressive] = useState(client.aggressive);
  const [medication, setMedication] = useState(client.medication);
  const [livehouse, setLivehouse] = useState(client.livehouse);
  const [bedridden, setBedridden] = useState(client.bedridden);
  const [sleepnight, setSleepnight] = useState(client.sleepnight);
  const [oxygen, setOxygen] = useState(client.oxygen);
  const [diabetes, setDiabetes] = useState(client.diabetes);
  const [insulin, setInsulin] = useState(client.insulin);
  const [rotation, setRotation] = useState(client.rotation);
  const [germanlevel, setGermanlevel] = useState(client.germanlevel);
  const [wheelchair, setWheelchair] = useState(client.wheelchair);
  const [patientlift, setPatientlift] = useState(client.patientlift);

  const HandleUpdate = () =>  {
    UpdateClient(
      _id, 
      cname,
      Email,
      phone,
      patientgender,
      allergy,
      incontinent,
      dementia,
      animals,
      alone,
      shopping,
      carelevel,
      aggressive,
      medication,
      livehouse,
      bedridden,
      sleepnight,
      oxygen,
      diabetes,
      insulin,
      rotation,
      germanlevel,
      wheelchair,
      patientlift,
    )
    console.log("Update client",UpdateClient)
    navigation.navigate("ClientProfile")
  }

  return (
    <SafeAreaView>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            backgroundColor: "#009571",
          }}
        >
          <View
            style={{
              paddingVertical: 30,
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 20,
              }}
            >
              Answer these questions so that we can find best match for
              you.
            </Text>
          </View>
          <View style={styles.Questions}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 17,
                fontWeight: "800",
                marginTop: 5,
              }}
            >
              Ist der Patient männlich oder weiblich?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setPatientgender(newValue)}
              value={patientgender}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="männlich" />
                  <Text>männlich</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="weiblich" />
                  <Text>weiblich</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.Questions}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 17,
                fontWeight: "800",
                marginTop: 5,
              }}
            >
              Hat der Patient Allergien?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setAllergy(newValue)}
              value={allergy}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="NEIN" />
                  <Text>NEIN</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.Questions}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 17,
                fontWeight: "800",
                marginTop: 5,
              }}
            >
              Ist der Patient Inkontinent?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setIncontinent(newValue)}
              value={incontinent}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="NEIN" />
                  <Text>NEIN</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.Questions}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 17,
                fontWeight: "800",
                marginTop: 5,
              }}
            >
              Hat der Patient Demenz?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setDementia(newValue)}
              value={dementia}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="NEIN" />
                  <Text>NEIN</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.Questions}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 17,
                fontWeight: "800",
                marginTop: 5,
              }}
            >
              Leben im Haushalt Tiere?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setAnimals(newValue)}
              value={animals}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="Ja" />
                 <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="NEIN" />
                  <Text>NEIN</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.Questions}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 17,
                fontWeight: "800",
                marginTop: 5,
              }}
            >
              Lebt der Patient alleine?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setAlone(newValue)}
              value={alone}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="NEIN" />
                  <Text>NEIN</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.Questions}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 17,
                fontWeight: "800",
                marginTop: 5,
              }}
            >
              Muss sich die Pflegerin auch um die Einkäufe kümmern?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setShopping(newValue)}
              value={shopping}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="Ja" />
                   <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="NEIN" />
                  <Text>NEIN</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.Questions}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 17,
                fontWeight: "800",
                marginTop: 5,
              }}
            >
              Welche Pflegestufe hat der Patient?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setCarelevel(newValue)}
              value={carelevel}
            >
              <View style={styles.Radio}>
              <View style={styles.Roundbtn}>
              <RadioButton color="#009571" value="1" />
               <Text>1</Text>
            </View>
            <View style={styles.Roundbtn}>
              <RadioButton color="#009571" value="2" />
              <Text>2</Text>
            </View>
            <View style={styles.Roundbtn}>
              <RadioButton color="#009571" value="3" />
              <Text>3</Text>
            </View>
            <View style={styles.Roundbtn}>
              <RadioButton color="#009571" value="4" />
              <Text>4</Text>
            </View>
            <View style={styles.Roundbtn}>
              <RadioButton color="#009571" value="5" />
              <Text>5</Text>
            </View>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.Questions}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 17,
                fontWeight: "800",
                marginTop: 5,
              }}
            >
              Ist der Patient aggressiv?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setAggressive(newValue)}
              value={aggressive}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="NEIN" />
                  <Text>NEIN</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.Questions}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 17,
                fontWeight: "800",
                marginTop: 5,
              }}
            >
              Nimmt der Patient Medikamente?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setMedication(newValue)}
              value={medication}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="NEIN" />
                  <Text>NEIN</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.Questions}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 17,
                fontWeight: "800",
                marginTop: 5,
              }}
            >
              Lebt der Patient in einem Haus?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setLivehouse(newValue)}
              value={livehouse}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="Ja" />
                   <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="NEIN" />
                  <Text>NEIN</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.Questions}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 17,
                fontWeight: "800",
                marginTop: 5,
              }}
            >
              Ist der Klient bettlägrig?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setBedridden(newValue)}
              value={bedridden}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="NEIN" />
                  <Text>NEIN</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.Questions}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 17,
                fontWeight: "800",
                marginTop: 5,
              }}
            >
              Schläft der Patient in der Nacht durch?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setSleepnight(newValue)}
              value={sleepnight}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="NEIN" />
                  <Text>NEIN</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.Questions}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 17,
                fontWeight: "800",
                marginTop: 5,
              }}
            >
              Braucht der Patient Sauerstoff?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setOxygen(newValue)}
              value={oxygen}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="Ja" />
                   <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="NEIN" />
                  <Text>NEIN</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.Questions}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 17,
                fontWeight: "800",
                marginTop: 5,
              }}
            >
              Hat der Patient Diabetes?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setDiabetes(newValue)}
              value={diabetes}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="NEIN" />
                  <Text>NEIN</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.Questions}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 17,
                fontWeight: "800",
                marginTop: 5,
              }}
            >
              Muss die Pflegerin Insulin spritzen unter Anleitung einer
              diplomierten Krankenschwester?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setInsulin(newValue)}
              value={insulin}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="NEIN" />
                  <Text>NEIN</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.Questions}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 17,
                fontWeight: "800",
                marginTop: 5,
              }}
            >
              Wie lange darf der Turnus dauern?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setRotation(newValue)}
              value={rotation}
            >
              <View style={styles.Radio}>
              <View style={styles.Roundbtn}>
              <RadioButton color="#009571" value="1" />
               <Text>1</Text>
            </View>
            <View style={styles.Roundbtn}>
              <RadioButton color="#009571" value="2" />
              <Text>2</Text>
            </View>
            <View style={styles.Roundbtn}>
              <RadioButton color="#009571" value="3" />
              <Text>3</Text>
            </View>
            <View style={styles.Roundbtn}>
              <RadioButton color="#009571" value="4" />
              <Text>4</Text>
            </View>
            <View style={styles.Roundbtn}>
              <RadioButton color="#009571" value="5" />
              <Text>5</Text>
            </View>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.Questions}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 17,
                fontWeight: "800",
                marginTop: 5,
              }}
            >
              Wie gut muss die Pflegerin Deutsch sprechen?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setGermanlevel(newValue)}
              value={germanlevel}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="Normal" />
                  <Text>Normal</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="Mittel" />
                  <Text>Mittel</Text>
                </View>
                 <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="Fließend" />
                  <Text>Fließend</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.Questions}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 17,
                fontWeight: "800",
                marginTop: 5,
              }}
            >
              Braucht der Patient einen Rollstuhl?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setWheelchair(newValue)}
              value={wheelchair}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="NEIN" />
                  <Text>NEIN</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>

          <View style={styles.Questions}>
            <Text
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                fontSize: 17,
                fontWeight: "800",
                marginTop: 5,
              }}
            >
              Braucht der Klient einen Patientenlift?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setPatientlift(newValue)}
              value={patientlift}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="NEIN" />
                  <Text>NEIN</Text>
                </View>
              </View>
            </RadioButton.Group>
          </View>
          <View
          style={{ paddingHorizontal: 40, marginTop: 10, paddingBottom:40 }}
          >
          <TouchableOpacity
          onPress={HandleUpdate}
          style={{
            backgroundColor: "white",
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
            color: "green",
            fontWeight: "500",
          }}
          >
          Submit
          </Text>
          </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Questions: {
    backgroundColor: "white",
    marginHorizontal: 25,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  Radio: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  Roundbtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5,
  },
});

export default UpdateCli;
