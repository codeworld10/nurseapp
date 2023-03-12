import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React,{useContext, useEffect, useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RadioButton } from "react-native-paper";
import profileContext from "../../../component/profileContext";

const UpdateNur = ({navigation, route}) => {
  const {UpdateNurse} = useContext(profileContext);
  const { nurse } = route.params;
  const { _id } = nurse;
  const [cname, setCname] = useState('');
  const [Email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [servegender, setServegender] = useState(nurse.servegender);
  const [incontinentpatients, setIncontinentpatients] = useState(nurse.incontinentpatients);
  const [dementia, setDementia] = useState(nurse.dementia);
  const [petissue, setPetissue] = useState(nurse.petissue);
  const [alonenurse, setAlonenurse] = useState(nurse.alonenurse);
  const [shopping, setShopping] = useState(nurse.shopping);
  const [carelevel, setCarelevel] = useState(nurse.carelevel);
  const [aggressivenurses, setAggressivenurses] = useState(nurse.aggressivenurses);
  const [medication, setMedication] = useState(nurse.medication);
  const [livehouse, setLivehouse] = useState(nurse.livehouse);
  const [bedridden, setBedridden] = useState(nurse.bedridden);
  const [nightshifts, setNightshifts] = useState(nurse.nightshifts);
  const [oxygen, setOxygen] = useState(nurse.oxygen);
  const [diabetes, setDiabetes] = useState(nurse.diabetes);
  const [insulin, setInsulin] = useState(nurse.insulin);
  const [rotation, setRotation] = useState(nurse.rotation);
  const [germanlevel, setGermanlevel] = useState(nurse.germanlevel);
  const [wheelchair, setWheelchair] = useState(nurse.wheelchair);
  const [nurselift, setClientlift] = useState(nurse.nurselift);

  const HandleUpdate = () =>  {
    UpdateNurse(
      _id, 
      cname,
      Email,
      phone,
      servegender,
      incontinentpatients,
      dementia,
      petissue,
      alonenurse,
      shopping,
      carelevel,
      aggressivenurses,
      medication,
      livehouse,
      bedridden,
      nightshifts,
      oxygen,
      diabetes,
      insulin,
      rotation,
      germanlevel,
      wheelchair,
      nurselift,
    )
    console.log("Update Nurse")
    navigation.navigate("NurseProfile")
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
            Patienten welchen Geschlechts betreuen Sie?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setServegender(newValue)}
              value={servegender}
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
                <View style={styles.Roundbtn}>
                  <RadioButton color="#009571" value="Beide" />
                  <Text>Beide</Text>
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
            Betreuen sie auch inkontinente Patienten?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setIncontinentpatients(newValue)}
              value={incontinentpatients}
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
            Betreuen sie auch Klienten mit Demenz?
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
            Haben sie Probleme mit tieren im Haushalt?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setPetissue(newValue)}
              value={petissue}
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
            Betreuen sie nur allein lebende Klienten?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setAlonenurse(newValue)}
              value={alonenurse}
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
            Würden sie auch die Einkäufe erledigen?
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
            Bis zu welcher Pflegestufe möchten sie Patienten betreuen?
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
            Kommen sie auch mit aggressiven Klienten zurecht?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setAggressivenurses(newValue)}
              value={aggressivenurses}
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
            Können sie dem Patienten auch Medikamente verabreichen?
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
            Soll der Patient unbedingt in einem Haus wohnen?
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
            Betreuen sie auch bettlägrige Klienten?
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
            Würden sie auch in der Nacht aufstehen, um sich um den Klienten zu kümmern?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setNightshifts(newValue)}
              value={nightshifts}
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
            Würden sie sich auch um einen Patienten kümmern der Sauerstoff braucht ?
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
            Würden sie sich auch um Patienten mit Diabetes kümmern?
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
            Würden sie Insulin spritzen unter Anleitung einer diplomierten Krankenschwester?
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
            Wie lange soll der Turnus dauern?
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
            Wie gut sprechen sie Deutsch?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setGermanlevel(newValue)}
              value={germanlevel}
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
            Würden sie auch Klienten betreuen die Rollstuhl brauchen?
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
            Würden sie auch Klienten betreuen die einen Patientenlift brauchen?
            </Text>
            <RadioButton.Group
              onValueChange={(newValue) => setClientlift(newValue)}
              value={nurselift}
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

export default UpdateNur;
