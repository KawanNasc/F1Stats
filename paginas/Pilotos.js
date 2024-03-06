import { useState, useEffect } from 'react';
import { Text, SafeAreaView, FlatList } from 'react-native';
import { estilizar } from '../componentes/EstilosGerais';

const api = async(callback) => {

    const site = await fetch('https://ergast.com/api/f1/current/drivers.json');
    const info = await site.json();
    callback(info.MRData.DriverTable.Drivers);

}

const Pilotos = () => {

    const estilos = estilizar();

    const [registros, setRegistros] = useState([]);

    useEffect(() => { api(setRegistros); },[] )

    return (

        <SafeAreaView>

            <Text style={ estilos.titulo }> Confira os pilotos da temporada atual </Text>

            <FlatList data={registros}  renderItem={ ( {item} ) => 

                <SafeAreaView style={ estilos.lista } >

                    <Text style={ estilos.descricao }> Nome: {item.givenName} {item.familyName} {'\n'}  </Text> 
                    <Text style={ estilos.descricao }> N°: {item.permanentNumber} {'\n'} </Text> 
                    <Text style={ estilos.descricao }> Nacionalidade: {item.nationality} {'\n'} </Text> 
                    <Text style={ estilos.descricao }> Biografia: {item.url} {'\n'}  </Text>

                </SafeAreaView>

            } />

        </SafeAreaView>

    );
}

export default Pilotos;