import { useState, useEffect } from 'react';
import { Text, Image, SafeAreaView, FlatList, ScrollView } from 'react-native';
import { estilizar } from '../componentes/EstilosGerais';

const Ranking = () => {

    const estilos = estilizar();

    const [registros, setRegistros] = useState([]);

    useEffect(() => {

        const fetchRankingData = async () => {
            const response = await fetch('https://ergast.com/api/f1/current/driverStandings.json');
            const data = await response.json();
            setRegistros(data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
        };

        fetchRankingData();

    }, []);

    return (

        <ScrollView>
            
            <SafeAreaView style={ estilos.body }>

                <Text style={estilos.titulo}>Confira o campeonato da temporada atual</Text>

                <Image source={ require('../assets/imgs/camp.png') } style={ estilos.header } />
                
                <Text style={estilos.descricao}> Pos: </Text>
                <Text style={estilos.descricao}> Pontos: </Text>
                <Text style={estilos.descricao}> Piloto: </Text>

                <FlatList data={registros} renderItem={({ item }) => (

                    <SafeAreaView style={estilos.itens}>
                        <Text style={estilos.descricao}> {item.position} </Text>
                        <Text style={estilos.descricao}> {item.points} </Text>
                        <Text style={estilos.descricao}> {item.Driver.givenName} {item.Driver.familyName} </Text>
                    </SafeAreaView>

                )} keyExtractor={ (item, index) => index.toString() }
                />

            </SafeAreaView>

        </ScrollView>

    );
  
}

export default Ranking;