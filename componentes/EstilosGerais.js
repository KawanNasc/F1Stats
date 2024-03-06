import { StyleSheet } from "react-native";
import { useFonts, RibeyeMarrow_400Regular } from '@expo-google-fonts/ribeye-marrow';
import { Fredoka_600SemiBold } from '@expo-google-fonts/fredoka';

export const estilizar = () => {

    let [fontsLoaded, fontError] = useFonts({ RibeyeMarrow_400Regular, Fredoka_600SemiBold }) 

    if (!fontsLoaded && !fontError) { return {}; }
    else {

        return StyleSheet.create({

            body: { flex: 1 }, 

            titulo: { fontFamily: "RibeyeMarrow_400Regular" },

            img: { },

            descricao: { fontFamily: "Fredoka_600SemiBold" },
            
            itens: { }

        });

    }

}