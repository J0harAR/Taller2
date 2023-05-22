import { View, Text ,FlatList,Image,useWindowDimensions,StyleSheet} from 'react-native'
import React from 'react'



const Onboardingitem = ({item}) => {

    const {width}=useWindowDimensions();
  
  return (
    <View style={[styles.container,width]} >
        <Image source={{uri:item.image}} style={[styles.image,{width,resizeMode:'contain'}]}/>
        <View style={{flex:0.3}}>   
            <Text style={styles.title}>
                {item.title}
            </Text>
            <Text  style={styles.description}>
                {item.description}
            </Text>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    image:{
        flex:0.7,
        justifyContent:'center',
       
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        
    },
    title:{
        fontWeight:'800',
        color:'#493d8a',
        fontSize:28,
        marginBottom:10,
        textAlign:'center'
    },
    description:{
        fontWeight:'300',
        color:'#62656b',
        textAlign:'center',
        paddingHorizontal:64
    }





})

export default Onboardingitem