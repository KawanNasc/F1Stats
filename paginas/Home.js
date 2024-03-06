import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { estilizar } from '../componentes/EstilosGerais';

const Home = () => {

    const navegacao = useNavigation();
    const estilos = estilizar();

    return (

        <ScrollView>

            <SafeAreaView style={ estilos.body }>

                <Image source={ require('../assets/imgs/header.png') } style={ estilos.header } />

                <TouchableOpacity onPress={ () => navegacao.navigate('Pilotos', require('../assets/imgs/pilotos.png')) }>

                    <Text style={ estilos.titulo }> Acesse aqui para conhecer os pilotos </Text>
                    <Image source={ require('../assets/imgs/pilotos.png') } style={ estilos.img } />

                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navegacao.navigate('Ranking', require('../assets/imgs/ranking.png')) }>
                    <Text style={ estilos.titulo }> Acesse aqui para conferir o campeonato </Text>
                    <Image source={ require('../assets/imgs/ranking.png') } style={ estilos.img } />
                </TouchableOpacity>

            </SafeAreaView>

        </ScrollView>
    );
}

export default Home;