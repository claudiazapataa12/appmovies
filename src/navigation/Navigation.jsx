import {createNativeStackNavigator} from "@react-navigation/native-stack"
import DetailScreen from "../screens/DetailScreen"
import HomeScreens from "../screens/HomeScreens"

const Stack=createNativeStackNavigator()

export const Navigation=()=>{
  return(
    <Stack.Navigator 
    screenOptions={{
        headerShown:false,
    }}
    >
        <Stack.Screen name="HomeScreen" component={HomeScreens}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen}/>
    </Stack.Navigator>
  )
}