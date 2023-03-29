import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RadioButton } from "react-native-paper";

const UpdateNur = () => {
  const [value, setValue] = useState("");
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
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
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
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
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
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
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
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
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
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
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
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
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
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
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
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
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
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
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
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
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
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
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
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
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
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
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
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
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
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
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
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
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
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
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
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
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
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
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
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
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

export default UpdateNur;
