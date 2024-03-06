import { StyleSheet } from "react-native";
import { useFonts, RibeyeMarrow_400Regular } from '@expo-google-fonts/ribeye-marrow';
import { Fredoka_600SemiBold } from '@expo-google-fonts/fredoka';

export const estilizar = () => {

    let [ fontsLoaded, fontError ] = useFonts({ RibeyeMarrow_400Regular, Fredoka_600SemiBold }) 

    if ( !fontsLoaded && !fontError ) { return {}; }
    else {

        return StyleSheet.create({

            body: { flex: 1, backgroundColor: "#000000", padding: 10, textAlign: "center", justifyContent: "center", alignItems: "center" }, 

            titulo: { fontFamily: "RibeyeMarrow_400Regular", backgroundColor: "#262626", color: "#D80000", borderRadius: 30, padding: 5, fontSize: 30, margin: 15, textAlign: "center"},

            header: { width: 350, height: 100, margin: 15, alignSelf: "center", borderRadius: 50 },

            img: { width: 200, height: 200, margin: 8, alignSelf: "center", borderRadius: 30 },

            lista: { padding: 50, margin: 5 },

            descricao: { fontFamily: "Fredoka_600SemiBold", backgroundColor: "#262626", color: "#D80000", padding: 15, textAlign: "center" },

            ranking: { display: "flex", flexDirection: "row", flexWrap: "wrap" },

            itens: { display: "flex", flexDirection: "row", flexWrap: "wrap" }

        });

    }

}