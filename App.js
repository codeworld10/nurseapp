import { NavigationContainer } from '@react-navigation/native';
import Nav from './src/Components/Navigation/Nav';
import ProfileState from './component/ProfileState';

 function App() {
  return (
    <NavigationContainer>
     <Nav />
    </NavigationContainer>
  );
}
export default () => {
  return (
    <ProfileState>
      <App />
    </ProfileState>
  );
};
