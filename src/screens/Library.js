import { View, Text, Image, TouchableOpacity,StyleSheet,FlatList } from "react-native";
import React from "react";
import dataUnidades from '../data/dataUnidades'
import Unidad from "../../components/Unidad";

const Library = ({navigation}) => {


  return (
    <View className="bg-black h-screen justify-start items-center ">
      <View className="bg-[#363636] w-[327] h-[618] rounded mx-auto">
        <Text className="text-base text-center mt-2 uppercase text-gray-300 font-bold">
          MATEMÁTICAS DISCRETAS
        </Text>

        <View className="bg-gray-300 h-[1] mr-4 ml-4 mt-5"></View>

        <View >
        <FlatList data={dataUnidades}
            renderItem={({item})=><Unidad item={item} navigation={navigation}/>}
            keyExtractor={item=>item.id}
            columnWrapperStyle={{flex:1,justifyContent:"space-evenly"}}
            numColumns={'2'}
            />
        </View>
      </View>
      
    </View>
  );
  
};



export default Library;
