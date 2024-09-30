import React from "react";
import { Text, View, Image, TextInput, Button, StyleSheet } from "react-native";
import { Link } from 'expo-router';

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    Image: {
        margin: 30,
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    navbar: {
        backgroundColor: '#0097b2',
        padding: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 33,
        color:'white'
            

    },
    desc: {
        marginLeft: 30,
        marginRight: 30,
        color: '#0097b2',
        fontSize: 20,
        textAlign:"justify"
    },
    botao: {
        marginTop:50,
        textAlign:'center',
        borderRadius:10,
        padding:20,
        width:200,
        backgroundColor: '#0097b2',
        color: 'white',
        fontSize: 20
    },
    box2:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'

    }


})

export default Sobre = function () {
    return (
        <View>
            <View style={style.navbar}>
                <Text style={style.title}>Sobre mim</Text>
            </View>
            <View style={style.box}>
                <Image
                    style={style.Image}
                    source={require('../../../assets/images/theo.jpg')}
                />
                <Text style={style.desc}>
                    Meu nome é Eloisa tenho 17 anos, eu estudo de manha e trabalho a tarde, e 
                    no meu tempo livre gosto de assistir filmes, series e faço academia.Amo ir 
                    a praia, tomar sorvete e sair com meus amigos e meu namorado.
                </Text>
            </View>
            <View style={style.box2}>
                <Link href="/pages/Viagens/viagens" style={style.botao}>
                    <Text>Viagens</Text>
                </Link>
                <Link href="/pages/Series/series" style={style.botao}>
                    <Text >Series</Text>
                </Link>
            </View>
        </View>
    );
};