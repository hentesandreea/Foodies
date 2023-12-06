import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainScreen from "./MainScreen";
import Meals from "./screens/Meals";
import Desserts from "./screens/Desserts";

const Stack = createNativeStackNavigator()

function StackNav(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={"MainScreen"} component={MainScreen} options={{headerShown:false}}/>
            <Stack.Screen name={"Meals"} component={Meals} options={{headerShown:false}}/>
            <Stack.Screen name={"Desserts"} component={Desserts} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
export default StackNav;
