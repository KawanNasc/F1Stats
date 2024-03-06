import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilizar } from '../componentes/EstilosGerais';
import { ScrollView } from 'react-native-gesture-handler';

const Home = () => {

    const navegacao = useNavigation();
    const estilos = estilizar();

    return (
        <ScrollView>
            <SafeAreaView>
                <TouchableOpacity onPress={ () => navegacao.navigate('Pilotos', require('../assets/imgs/pilotos.png')) }>
                    <Text style={ estilos.titulo }> Pilotos </Text>
                    <Image source={ require('../assets/imgs/pilotos.png') } style={ estilos.img } />
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navegacao.navigate('Ranking', require('../assets/imgs/ranking.png')) }>
                    <Text style={ estilos.titulo }> Ranking </Text>
                    <Image source={ require('../assets/imgs/ranking.png') } style={ estilos.img } />
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    );
}

export default Home;