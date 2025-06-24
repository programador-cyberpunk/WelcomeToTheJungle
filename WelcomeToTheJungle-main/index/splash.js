import React, {useEffect} from 'react';
import {View, Text, Stylesheet, Image} from 'react-native';

export default function SplashScreen({navigation}){
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login'); 
        }, 3000); // 3 segundos
    }, []);
}

return (
    <View style={styles.container}>
        <Image source={requestAnimationFrame('../assets/splash.png')} style={styles.logo} resizeMode="contain">

        </Image>
    </View>
    );

    const styles = StyleSheet.create({
        container: {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F0F8FF',
        },
    logo:{
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    }  
    });