import { useState, useEffect } from 'react';
import { Text, Image, SafeAreaView, FlatList } from 'react-native';
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

            <SafeAreaView style={ estilos.body }>

                <Text style={ estilos.titulo }> Confira os pilotos da temporada atual </Text>

                <Image source={ require('../assets/imgs/grid.png') } style={ estilos.header } />

                <FlatList data={registros}  renderItem={ ( {item} ) => 

                    <SafeAreaView style={ estilos.lista } >

                        <Text style={ estilos.descricao }> Nome: {item.givenName} {item.familyName} N°: {item.permanentNumber} </Text> 
                        <Text style={ estilos.descricao }> Nacionalidade: {item.nationality} </Text> 
                        <Text style={ estilos.descricao }> Biografia: {'\n'} {item.url} </Text>

                    </SafeAreaView>

                } />

            </SafeAreaView>

    );
}

export default Pilotos;