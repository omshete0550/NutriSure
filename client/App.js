import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
// import Homepage from "./pages/Homepage";
import BasicInfo from "./components/UserInfo/BasicInfo";
import CommunityScreen from "./pages/CommunityScreen";
import ScanBarCode from "./pages/ScanBarCode";
import Report from "./pages/Report";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Homepage" component={Homepage} /> */}

                <Stack.Screen
                    name="BasicInfo"
                    component={BasicInfo}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="CommunityScreen"
                    component={CommunityScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Report"
                    component={Report}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="ScanBarCode"
                    component={ScanBarCode}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
