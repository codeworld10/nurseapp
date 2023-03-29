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
  const [patientMännlich, setPatientMännlich] = useState('');
  const [patientAllergien, setPatientAllergien] = useState('');
  const [patientInkontinent, setPatientInkontinent] = useState('');
  const [patientDemenz, setPatientDemenz] = useState('');
  const [haushaltTiere, setHaushaltTiere] = useState('');
  const [patientAlleine, setPatientAlleine] = useState('');
  const [pflegerinEinkäufe, setPflegerinEinkäufe] = useState('');
  const [pflegestufePatient, setPflegestufePatient] = useState('');
  const [patientAggressiv, setPatientAggressiv] = useState('');
  const [patientMedikamente, setPatientMedikamente] = useState('');
  const [patientHaus, setPatientHaus] = useState('');
  const [klientBettlägrig, setKlientBettlägrig] = useState('');
  const [schläftPatientNacht, setSchläftPatientNacht] = useState('');
  const [patientSauerstoff, setPatientSauerstoff] = useState('');
  const [patientDiabetes, setPatientDiabetes] = useState('');
  const [pflegerinInsulin, setPflegerinInsulin] = useState('');
  const [turnusDauern, setTurnusDauern] = useState('');
  const [pflegerinDeutschSprechen, setPflegerinDeutschSprechen] = useState('');
  const [patientEinenRollstuhl, setPatientEinenRollstuhl] = useState('');
  const [klientEinenPatientenlift, setKlientEinenPatientenlift] = useState('');

  const HandleUpdate = () =>  {
    UpdateClient(
      _id, 
      cname,
      Email,
      patientMännlich,
      patientAllergien,
      patientInkontinent,
      patientDemenz,
      haushaltTiere,
      patientAlleine,
      pflegerinEinkäufe,
      pflegestufePatient,
      patientAggressiv,
      patientMedikamente,
      patientHaus,
      klientBettlägrig,
      schläftPatientNacht,
      patientSauerstoff,
      patientDiabetes,
      pflegerinInsulin,
      turnusDauern,
      pflegerinDeutschSprechen,
      patientEinenRollstuhl,
      klientEinenPatientenlift,
    )
    console.log("Update client",UpdateClient)
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
              onValueChange={(newValue) => setPatientMännlich(newValue)}
              value={patientMännlich}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton value="männlich" />
                  <Text>männlich</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton value="weiblich" />
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
              onValueChange={(newValue) => setPatientAllergien(newValue)}
              value={patientAllergien}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton value="NEIN" />
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
              onValueChange={(newValue) => setPatientInkontinent(newValue)}
              value={patientInkontinent}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton value="NEIN" />
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
              onValueChange={(newValue) => setPatientDemenz(newValue)}
              value={patientDemenz}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton value="NEIN" />
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
              onValueChange={(newValue) => setHaushaltTiere(newValue)}
              value={haushaltTiere}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton value="Ja" />
                 <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton value="NEIN" />
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
              onValueChange={(newValue) => setPatientAlleine(newValue)}
              value={patientAlleine}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton value="NEIN" />
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
              onValueChange={(newValue) => setPflegerinEinkäufe(newValue)}
              value={pflegerinEinkäufe}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton value="Ja" />
                   <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton value="NEIN" />
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
              onValueChange={(newValue) => setPflegestufePatient(newValue)}
              value={pflegestufePatient}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton value="Ja" />
                 <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton value="NEIN" />
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
              Ist der Patient aggressiv?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setPatientAggressiv(newValue)}
              value={patientAggressiv}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton value="NEIN" />
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
              onValueChange={(newValue) => setPatientMedikamente(newValue)}
              value={patientMedikamente}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton value="NEIN" />
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
              onValueChange={(newValue) => setPatientHaus(newValue)}
              value={patientHaus}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton value="Ja" />
                   <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton value="NEIN" />
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
              onValueChange={(newValue) => setKlientBettlägrig(newValue)}
              value={klientBettlägrig}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton value="NEIN" />
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
              onValueChange={(newValue) => setSchläftPatientNacht(newValue)}
              value={schläftPatientNacht}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton value="NEIN" />
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
              onValueChange={(newValue) => setPatientSauerstoff(newValue)}
              value={patientSauerstoff}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton value="Ja" />
                   <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton value="NEIN" />
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
              onValueChange={(newValue) => setPatientDiabetes(newValue)}
              value={patientDiabetes}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton value="NEIN" />
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
              onValueChange={(newValue) => setPflegerinInsulin(newValue)}
              value={pflegerinInsulin}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton value="NEIN" />
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
              onValueChange={(newValue) => setTurnusDauern(newValue)}
              value={turnusDauern}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton value="2-3" />
                  <Text>2-3</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton value="4-5" />
                  <Text>4-5</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton value="6-7" />
                  <Text>6-7</Text>
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
              onValueChange={(newValue) => setPflegerinDeutschSprechen(newValue)}
              value={pflegerinDeutschSprechen}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton value="Normal" />
                  <Text>Normal</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton value="Mittel" />
                  <Text>Mittel</Text>
                </View>
                 <View style={styles.Roundbtn}>
                  <RadioButton value="Fließend" />
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
              onValueChange={(newValue) => setPatientEinenRollstuhl(newValue)}
              value={patientEinenRollstuhl}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton value="NEIN" />
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
              onValueChange={(newValue) => setKlientEinenPatientenlift(newValue)}
              value={klientEinenPatientenlift}
            >
              <View style={styles.Radio}>
                <View style={styles.Roundbtn}>
                  <RadioButton value="Ja" />
                  <Text>Ja</Text>
                </View>
                <View style={styles.Roundbtn}>
                  <RadioButton value="NEIN" />
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
    paddingHorizontal: 10,
  },
});

export default UpdateCli;
