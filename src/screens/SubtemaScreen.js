import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

const SubtemaScreen = ({ route }) => {
  const { subtema } = route.params;

  return (
    <View className="flex-1 bg-black">
      <ScrollView>
        <View className="p-4">
          <Text
            style={{
              textAlign: "center",
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 16,
            }}
            className="text-green-200"
          >
            {subtema.nombre}
          </Text>
          <View>
            <Text className="text-red-300 text-xl">Definicion</Text>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 16,
              }}
              className="text-justify"
            >
              {subtema.definicion}
            </Text>
          </View>

          <View>
            <Text className="text-purple-300 text-xl ">Funcion</Text>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 16,
              }}
              className="text-justify"
            >
              {subtema.funciones}
            </Text>
          </View>


          <View >
          <Text className="text-yellow-300 text-xl ">Caracteristicas</Text>
            <View className="flex-row justify-between items-center">
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', flex: 1 }} className="text-justify mr-2">{subtema.funciones} </Text>
            <Image source={{ uri: subtema.imagen }} className="w-36 h-36 rounded-xl " />
            </View>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', flex: 1 }} className="text-justify mt-2">{subtema.funciones} </Text>
            
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SubtemaScreen;
