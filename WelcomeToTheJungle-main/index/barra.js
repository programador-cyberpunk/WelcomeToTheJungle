import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigatior} from '@react-navigation/bottom-tabs';
import Icon from '@react-navigation/Ionicons';

//setando as telinha
import SplashScreen from './index/splash.js';
import LoginScreen from './index/login.js';
import HomeScreen from './index/home.js';
import FavoritesScreen from './telas/favoritos.js';
import telaAnhangabau from './telas/telaAnhanbagau.js';
import telaIbira from './telas/telaIbira.js';
import telaLiba from './telas/telaLiba.js';
import telaPaulista from './telas/telaPaulista.js';
import telaZoo from './telas/telaZoo.js';

Stack = createNativeStackNavigator();
Tab = createBottomTabNavigatior();

function LocalStack(){
    return(
       <Stack.Navigator screenOptions={{ headerShown: false}}>
                        <Stack.Screen name="HomeMain" component={HomeScreen} />
            <Stack.Screen name="Ibira" component={telaIbira} />
            <Stack.Screen name="Anhangabau" component={telaAnhangabau} />
            <Stack.Screen name="Paulista" component={telaPaulista} />
            <Stack.Screen name="Liberdade" component={telaLiba} />
            <Stack.Screen name="Zoo" component={telaZoo} />
       </Stack.Navigator> 
    );
}

//é pras telas principais depois que vc fazer o login sua topeira
function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Favoritos') {
                        iconName = focused ? 'heart' : 'heart-outline';
                    }
                    
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#007BFF',
                tabBarInactiveTintColor: 'gray',
                headerShown: false, // esconde o cabeçalho padrão das tabs,
                tabBarStyle: {
                    paddingBottom: 5,
                    paddingTop: 5,
                    height: 60,
                },
            })}
        >
            <Tab.Screen name="Home" component={LocalStack} />
            <Tab.Screen name="Favoritos" component={FavoritesScreen} />
            {/* Adicione outras telas principais aqui se necessário */}
        </Tab.Navigator>
    );
}
// navegaçao geral da aplicação
export default function AppNavigator(){
    <NavigationContainer>
        <Stack.Navigator initialouteName="Splash" screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Favoritos" component={FavoritosScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}