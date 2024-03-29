import { useFonts, McLaren_400Regular } from "@expo-google-fonts/mclaren";

import Home from "../paginas/Home"; import Pilotos from "../paginas/Pilotos"; import Ranking from "../paginas/Ranking";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const Navegacao = () => {

    let [ fontesCarregadas, erroFonte ] = useFonts({ McLaren_400Regular });
    
    if ( !fontesCarregadas && !erroFonte ) { return null; }
    else {

        return (

            <Stack.Navigator initialRouteName="Home" 
                             screenOptions={{ headerMode: "float", 
                                              headerTintColor: "#D80000", 
                                              headerTitleAlign: "center", 
                                              headerStyle: { backgroundColor: "#262626", 
                                                             borderWidth: 10, 
                                                             borderColor: "#000000" }, 
                                              headerTitleStyle: { fontFamily: "McLaren_400Regular" } }}>

                <Stack.Screen name="Bem-vindo à Fórmula 1" component={Home}></Stack.Screen>      
                <Stack.Screen name="Pilotos" component={Pilotos}></Stack.Screen>
                <Stack.Screen name="Ranking" component={Ranking}></Stack.Screen>

            </Stack.Navigator>

        );

    }

    
}

export default Navegacao;