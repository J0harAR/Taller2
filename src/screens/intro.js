import { View, Text,Image } from 'react-native'
import React from 'react'

const Intro = () => {
  return (
    <View className="h-screen flex justify-evenly items-center bg-black">
        <Image className="h-36 w-32" source={{uri:'https://res.cloudinary.com/dehywcruq/image/upload/v1681874671/onlineShop/11280224-removebg-preview_eceudy.png'}}/>
        
        <Text className="text-white text-center">{`"Lo unico imposible, es aquello,\n que no intentas"`}</Text>
    </View>
  )
}

export default Intro