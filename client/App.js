import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
// import Homepage from "./pages/Homepage";
import BasicInfo from "./components/UserInfo/BasicInfo";
import CommunityScreen from "./pages/CommunityScreen";
import ScanBarCode from "./pages/ScanBarCode";
import Report from "./pages/Report";

import dietaryRestrictions from "./components/UserInfo/dietaryRestrictions";
import dietaryPreferences from "./components/UserInfo/dietaryPreferences";
import Allergies from "./components/UserInfo/Allergies";
import Religious from "./components/UserInfo/Religious";
import Severity from "./components/UserInfo/Severity";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { StatusBar } from "expo-status-bar";
import ShopAdminLogin from "./pages/ShopAdminLogin";
import Step1 from "./components/Shop/Step1";
import Step2 from "./components/Shop/Step2";
import SingleShopPage from "./pages/SingleShopPage";
import AddToCart from "./pages/AddToCart";
import Payment from "./pages/Payment";
import SingleProductPage from "./pages/SingleProductPage";
import Homepage from "./pages/Homepage";
import ShopLogin from "./pages/ShopLogin";
import ProfileScreen from "./pages/ProfileScreen";
import Receipe from "./pages/Receipe";
import ReceipeFinal from "./pages/ReceipeFinal";
import ScanResults from "./pages/ScanResults";
import AddProduct from "./pages/AddProduct";
const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="ShopAdminLogin"
                    component={ShopAdminLogin}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ScanResults"
                    component={ScanResults}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ShopLogin"
                    component={ShopLogin}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Step1"
                    component={Step1}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Step2"
                    component={Step2}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BasicInfo"
                    component={BasicInfo}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="dietaryRestrictions"
                    component={dietaryRestrictions}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="dietaryPreferences"
                    component={dietaryPreferences}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Religious"
                    component={Religious}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Allergies"
                    component={Allergies}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Severity"
                    component={Severity}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AddToCart"
                    component={AddToCart}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AddProduct"
                    component={AddProduct}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="payment"
                    component={Payment}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SingleProductPage"
                    component={SingleProductPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Sign Up"
                    component={Register}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SingleShopPage"
                    component={SingleShopPage}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="HomePage"
                    component={Homepage}
                    options={{ headerShown: false }}
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
                <Stack.Screen
                    name="Receipe"
                    component={Receipe}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="ReceipeFinal"
                    component={ReceipeFinal}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="ProfileScreen"
                    component={ProfileScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
            <StatusBar style="auto" />
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
