import React, { useEffect, useState } from 'react';
import {ActivityIndicator, View} from 'react-native';
import AppRoutes from './app.routes';

import { Container, Title } from './styles';

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
        <Title>Event Lab</Title>
        <ActivityIndicator size={25} color="#FFF"/>
      </Container>
    )
  } else{
    return <AppRoutes />;
  }
 
}
