import { useState } from "react";
import profileContext from "./profileContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HOST } from "../src/Components/Host/Constants";

const ProfileState = (props) => {
  const host = `${HOST}`;
  const [client, setClient] = useState([]);
  const [nurse, setNurse] = useState([]);
  const [contact, setContact] = useState([]);

  const getClient = async (id) => {
    // const userId = "63f327e70bfa62b42ca69c23";
    const response = await fetch(`${host}/api/clientauth/getclient/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": await AsyncStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setClient(json);
  };

  const UpdateClient = async (
    id,
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
    patientlift
  ) => {
    try {
      const response = await fetch(`${host}/api/auth/updateprofiles/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": await AsyncStorage.getItem("token"),
        },
        body: JSON.stringify({
          id,
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
        }),
      });
      const json = await response.json();
      console.log("Json", json);

      let newProfiles = JSON.stringify(client); 
      console.log(newProfiles, "new pprofile");
      for (let index = 0; index > newProfiles.length; index++) {
        if (newProfiles[index]._id === id) {
          newProfiles[index].cname = cname;
          newProfiles[index].Email = Email;
          newProfiles[index].patientgender = patientgender;
          newProfiles[index].allergy = allergy;
          newProfiles[index].incontinent = incontinent;
          newProfiles[index].dementia = dementia;
          newProfiles[index].animals = animals;
          newProfiles[index].alone = alone;
          newProfiles[index].shopping = shopping;
          newProfiles[index].carelevel = carelevel;
          newProfiles[index].aggressive = aggressive;
          newProfiles[index].medication = medication;
          newProfiles[index].livehouse = livehouse;
          newProfiles[index].bedridden = bedridden;
          newProfiles[index].sleepnight = sleepnight;
          newProfiles[index].oxygen = oxygen;
          newProfiles[index].diabetes = diabetes;
          newProfiles[index].insulin = insulin;
          newProfiles[index].rotation = rotation;
          newProfiles[index].germanlevel = germanlevel;
          newProfiles[index].wheelchair = wheelchair;
          newProfiles[index].patientlift = patientlift;

          setClient([...newProfiles]);
          break;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateNurse = async (
    id,
    cname,
    Email,
    phone,
    servegender,
    incontinentpatients,
    dementia,
    petissue,
    aloneclient,
    shopping,
    carelevel,
    aggressiveclients,
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
    clientlift,
  ) => {

    try {
      const response = await fetch(`${host}/api/nurse/updateprofiles/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": await AsyncStorage.getItem("token"),
        },
        body: JSON.stringify({
          id,
          cname,
          Email,
          phone,
          servegender,
          incontinentpatients,
          dementia,
          petissue,
          aloneclient,
          shopping,
          carelevel,
          aggressiveclients,
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
          clientlift,
        }),
      });
      const json = await response.json();
      console.log("Json", json);

      let newProfiles = JSON.stringify(nurse); 
      for (let index = 0; index > newProfiles.length; index++) {
        if (newProfiles[index]._id === id) {
          newProfiles[index].cname = cname;
          newProfiles[index].Email = Email;
          newProfiles[index].servegender = servegender;
          newProfiles[index].incontinentpatients = incontinentpatients;
          newProfiles[index].dementia = dementia;
          newProfiles[index].petissue = petissue;
          newProfiles[index].aloneclient = aloneclient;
          newProfiles[index].shopping = shopping;
          newProfiles[index].carelevel = carelevel;
          newProfiles[index].aggressiveclients = aggressiveclients;
          newProfiles[index].medication = medication;
          newProfiles[index].livehouse = livehouse;
          newProfiles[index].bedridden = bedridden;
          newProfiles[index].nightshifts = nightshifts;
          newProfiles[index].oxygen = oxygen;
          newProfiles[index].diabetes = diabetes;
          newProfiles[index].insulin = insulin;
          newProfiles[index].rotation = rotation;
          newProfiles[index].germanlevel = germanlevel;
          newProfiles[index].wheelchair = wheelchair;
          newProfiles[index].clientlift = clientlift;

          setNurse([...newProfiles]);
          break;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Get all nurses and show them on client side

  const GetNurses = async() => {
    const response = await fetch(`${host}/api/nurse/getnurses`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": await AsyncStorage.getItem("token")
      },
    });
    const json = await response.json();
    setNurse(json);
  }

  //Contact option for both client and nurse

  const addContact = async(message) => {
    const response = await fetch(`${host}/api/contact/addcontact`,{
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "auth-token": await AsyncStorage.getItem("token")
      },
      body: JSON.stringify({
        message,
      })
    })
    const contacting = {
      message: message,
    }
    setContact((prev) => [...prev, contacting])
  }

  return (
    <profileContext.Provider
      value={{
        client,
        nurse,
        getClient,
        UpdateClient,
        UpdateNurse,
        GetNurses,
        addContact,
      }}
    >
      {props.children}
    </profileContext.Provider>
  );
};

export default ProfileState;
