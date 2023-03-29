import { useState } from "react";
import profileContext from "./profileContext"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HOST } from "../src/Components/Host/Constants";

const ProfileState = (props) => {
const host = `${HOST}`;
const [client, setClient] = useState([]);
const [nurse, setNurse] = useState([]);

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

  const UpdateClient = async(
     id, 
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
  ) => {
    console.log("console_id:", id); // Add this line
    try {
      const response = await fetch(`${host}/api/clientauth/updateclient/${id}`,{
        method: 'PUT',
        headers:{
          "Content-Type": "application/json",
          "auth-token": await AsyncStorage.getItem("token")
        },
        body: JSON.stringify({
          id, 
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
        })
      });
      const json = await response.json();
      console.log("Json",json)
  
      let newProfiles = JSON.stringify(client); // parse the string back into an array of objects
      console.log(newProfiles,"new pprofile")
      for (let index = 0; index > newProfiles.length; index++) {
        if (newProfiles[index]._id === id) {
            newProfiles[index].cname = cname;
            newProfiles[index].Email = Email;
            newProfiles[index].patientMännlich = patientMännlich;
            newProfiles[index].patientAllergien = patientAllergien;
            newProfiles[index].patientInkontinent = patientInkontinent;
            newProfiles[index].patientDemenz = patientDemenz;
            newProfiles[index].haushaltTiere = haushaltTiere;
            newProfiles[index].patientAlleine = patientAlleine;
            newProfiles[index].pflegerinEinkäufe = pflegerinEinkäufe;
            newProfiles[index].pflegestufePatient = pflegestufePatient;
            newProfiles[index].patientAggressiv = patientAggressiv;
            newProfiles[index].patientMedikamente = patientMedikamente;
            newProfiles[index].patientHaus = patientHaus;
            newProfiles[index].klientBettlägrig = klientBettlägrig;
            newProfiles[index].schläftPatientNacht = schläftPatientNacht;
            newProfiles[index].patientSauerstoff = patientSauerstoff;
            newProfiles[index].patientDiabetes = patientDiabetes;
            newProfiles[index].pflegerinInsulin = pflegerinInsulin;
            newProfiles[index].turnusDauern = turnusDauern;
            newProfiles[index].pflegerinDeutschSprechen = pflegerinDeutschSprechen;
            newProfiles[index].patientEinenRollstuhl = patientEinenRollstuhl;
            newProfiles[index].klientEinenPatientenlift = klientEinenPatientenlift;

            setClient([...newProfiles]);
            //console.log(newProfiles._id,"new profle id")
            break;
        }
    }
   } catch (error) {
    console.log(error)
   }
  }

return (
    <profileContext.Provider
    value={{
      client,
      getClient,
      UpdateClient,
    }}
    >
    {props.children}
    </profileContext.Provider>
)
}

export default ProfileState;