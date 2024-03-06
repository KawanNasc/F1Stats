import { useState, useEffect } from 'react';
import { Text, SafeAreaView, FlatList } from 'react-native';
import { estilizar } from '../componentes/EstilosGerais';

const api = async(callback) => {

    const response = await fetch('https://ergast.com/api/f1/current/driverStandings.json')
    const parsed = await response.json();
    callback(parsed.MRData.StandingsTable.StandingsList.DriverStandings);
  
}

const Ranking = () => {

    const estilos = estilizar();

    const [registros, setRegistros] = useState([]);
    useEffect(() => { api(setRegistros); },[] );

    return (

        <SafeAreaView>

            <Text style={ estilos.titulo }> Confira o campeonato da temporada atual </Text>

            <FlatList data={registros} renderItem={ ( {item} ) => 
            
                <SafeAreaView style={ estilos.itens }>

                    <Text style={ estilos.descricao }> Pos: {item.position}°  {'\n'} </Text> 
                    <Text style={ estilos.descricao }> Pontos: {item.points} {'\n'} </Text> 
                    <Text style={ estilos.descricao }> Vitórias: {item.wins} </Text> 

                </SafeAreaView>
                
            } />

        </SafeAreaView>

    );
  
}

export default Ranking;