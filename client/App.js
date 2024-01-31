import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native';
import BasicInfo from "./components/UserInfo/BasicInfo";
import dietaryRestrictions from "./components/UserInfo/dietaryRestrictions";
import dietaryPreferences from "./components/UserInfo/dietaryPreferences";
import Allergies from "./components/UserInfo/Allergies";
import Religious from "./components/UserInfo/Religious";
import Severity from "./components/UserInfo/Severity";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { StatusBar } from 'expo-status-bar';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BasicInfo" >
        <Stack.Screen name="BasicInfo" component={BasicInfo} options={{headerShown: false}} />
        <Stack.Screen name="dietaryRestrictions" component={dietaryRestrictions} options={{headerShown: false}} />
        <Stack.Screen name="dietaryPreferences" component={dietaryPreferences} options={{headerShown: false}} />
        <Stack.Screen name="Religious" component={Religious} options={{headerShown: false}} />
        <Stack.Screen name="Allergies" component={Allergies} options={{headerShown: false}} />
        <Stack.Screen name="Severity" component={Severity} options={{headerShown: false}} />
        {/* <Stack.Screen name="Sign Up" component={Register} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} /> */}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
