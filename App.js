import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Settings from './screens/SettingsScreen';
import SettingsScreen from './screens/SettingsScreen';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name='Home' component={HomeScreen} options={{title:''}}/>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
        <Stack.Screen name='Settings' component={SettingsScreen}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
}

