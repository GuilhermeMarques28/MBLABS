import React, { useEffect, useState } from 'react';
import {ActivityIndicator, View} from 'react-native';
import AppRoutes from './app.routes';

import { Container, LogoArea, TitleLogo } from './styles';

export default function Routes() {

  const [loading, setLoading] = useState(true)

  useEffect( ()=> {
    setTimeout(() => {
      setLoading(!loading)
    }, 3000)
  }, [])

  if(loading){
    return(
      <Container>
      <LogoArea colors={['#439DFEE8', '#F687FFE8']}>
        <TitleLogo>Event Lab</TitleLogo>
      </LogoArea>
        <ActivityIndicator size={25} color="#FFF"/>
      </Container>
    )
  } else{
    return <AppRoutes />;
  }
 
}
