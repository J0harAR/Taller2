import { View, Text ,Image, Button} from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';



const Boarding = ({navigation}) => {

  return (
    
    <Onboarding subTitleStyles={{marginTop:10,textAlign:'center',fontSize:16} }   titleStyles={{fontSize:32,fontWeight:'800'} }
      onDone={()=>navigation.navigate('library')}
      onSkip={()=>navigation.navigate('library')}
    pages={[
      {
        backgroundColor: '#000',
        image: <Image className="w-48 h-48 mb-9 " source={{uri:'https://res.cloudinary.com/dehywcruq/image/upload/v1681962320/onlineShop/16524027ec6ed72507a50aada309252d-trazo-de-color-rosa-del-cerebro-humano_iyhqom.png'}} />,
        title: '',
        subtitle: '"Lo unico imposible, es aquello \n que no intentas"',
      },
     
      {
        backgroundColor: '#000',
        image: <Image className="w-48 h-48 mb-9 "source={{uri:'https://res.cloudinary.com/dehywcruq/image/upload/v1681963777/onlineShop/Telefono-de-Mano-2-para-colorear-removebg-preview_q48v06.png'}} />,
        title: 'Encuentra temas \n rápidamente',
        subtitle: 'En esta App puedes accerder a los \n temas de Matematicas discretas \n rápida y facilmente',
      },
      {
        backgroundColor: '#000',
        image: <Image className="w-40 h-48 mb-9"source={{uri:'https://res.cloudinary.com/dehywcruq/image/upload/v1681964418/onlineShop/cubes-ga6919fbdb_1280_polnt2.png'}} />,
        title: 'Potencia tus \n conocimientos ',
        subtitle: 'Con esta App puedes potenciar tus \nconocimientos en temas de matematicas \ndiscretas',
      },
      
      
    ]}
  />
 
  )
}

export default Boarding