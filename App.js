import React from "react";
import { View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  useFonts,
  SpaceGrotesk_300Light,
  SpaceGrotesk_700Bold,
} from "@expo-google-fonts/space-grotesk";

import Produto from "./src/telas/produtos/";
import mock from "./src/mocks/produto";


import mock2 from "./src/mocks/prod";
import Prod from "./src/telas/prod";


import mock1 from "./src/mocks/sobre";
import Sobre from "./src/telas/Sobre";

// function menu kit
function MenuKit() {
  return <View>
    <Produto {...mock} />
  </View>
}

//function para a tela sobre
function sobre() {
  return <View>
    <Sobre {...mock1} />
  </View>
}

//function menu kit
function MenuProd() {
  return <View>
    <Prod {...mock2} />
  </View>
}

const Tab = createBottomTabNavigator();

function TabsMenu() {
  return <Tab.Navigator screenOptions={
    ({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Kit") {
          iconName = focused
            ? 'basket'
            : 'basket-outline';
        } else if (route.name === "Sobre Nós") {
          iconName = focused
            ? 'chatbubbles'
            : 'chatbubbles-outline';
        } else if (route.name === "Produtos") {
          iconName = focused
            ? 'list'
            : 'list-outline';
        } else if (route.name === "Lista de Desejos") {
          iconName = focused
            ? 'heart'
            : 'heart-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'gray',
      tabBarHideOnKeyboard: true,

    })
  }>
    <Tab.Screen name="Kit" component={MenuKit} />
    <Tab.Screen name="Sobre Nós" component={sobre} />
    <Tab.Screen name="Produtos" component={MenuProd} />
    <Tab.Screen name="Lista de Desejos" component={MenuKit} />
  </Tab.Navigator>
}

export default function App() {
  //carrega a fonte do projeto
  const [fonteCarregada] = useFonts({
    SpaceGRegular: SpaceGrotesk_300Light,
    SpaceGBold: SpaceGrotesk_700Bold,
  });

  //checa se carregou as fontes
  if (!fonteCarregada) {
    return <View />;
  }

  return <NavigationContainer>
    <TabsMenu />
  </NavigationContainer>;
}
