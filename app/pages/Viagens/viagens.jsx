import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

const Jogos = () => {
    return (
        <View style={style.container}>
            <View style={style.navb}>
               
                <Text style={style.textoT}>Viagens que ja fiz</Text>
            </View>
            <ScrollView contentContainerStyle={style.box}>
                <View style={style.box3}>
                    <View style={style.box2}>
                    <Image style={style.img} source={require('../../../assets/images/balao.jpeg')} />  
                        <View style={style.boxT}>
                            <Text style={style.P1}>Rio grande do sul</Text>
                            <Text style={style.P2}>Voar de balão</Text>
                        </View>
                    </View>

                    <View style={style.box2}>
                    <Image style={style.img} source={require('../../../assets/images/curitiba.jpg')} />   
                        <View style={style.boxT}>
                            <Text style={style.P1}>Curitiba</Text>
                            <Text style={style.P2}>Visitar a cidade</Text>
                        </View>
                    </View>
                    <View style={style.box2}>
                    <Image style={style.img} source={require('../../../assets/images/bahia.jpg')} />
                        <View style={style.boxT}>
                            <Text style={style.P1}>Bahia</Text>
                            <Text style={style.P2}>Ilha morro de São Paulo</Text>
                        </View>
                    </View>
                    
                </View>
            </ScrollView>
        </View>
    );
}

export default Jogos

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    navb: {
        width: '100%',
        height: 60,
        backgroundColor: '#2e7cc4',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    textoT: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    box: {
        flex: 1,
        padding: 20,
    },
    box2: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10,
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
    },
    box3: {
        marginBottom: 20
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 20,
    },
    boxT: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    P1: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    },
    P2: {
        color: 'black',
        fontSize: 15,
        marginTop: 5,
    },
});