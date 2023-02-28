import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClientLogin from '../../screens/ClientLogin';
import Welcome from '../../screens/Welcome';
import NurseLogin from '../../screens/NurseLogin';
import ClientSignup from '../../screens/ClientSignup';
import NurseSignup from '../../screens/NurseSignup';
import Forgot from '../../screens/Forgot';
import Verify from '../../screens/Verify';
import Resetpass from '../../screens/Resetpass';
import NurseReset from '../../screens/NurseReset';
import ForgotNurse from '../../screens/ForgotNurse';

const Stack = createNativeStackNavigator();

const Nav = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="ClientLogin" component={ClientLogin} />
    <Stack.Screen name="NurseLogin" component={NurseLogin} />
    <Stack.Screen name="ClientSignup" component={ClientSignup} />
    <Stack.Screen name="NurseSignup" component={NurseSignup} />
    <Stack.Screen name="Forgot" component={Forgot} />
    <Stack.Screen name="Verify" component={Verify} />
    <Stack.Screen name="Resetpass" component={Resetpass} />
    <Stack.Screen name="NurseReset" component={NurseReset} />
    <Stack.Screen name="ForgotNurse" component={ForgotNurse} />
  </Stack.Navigator>
  )
}

export default Nav;
