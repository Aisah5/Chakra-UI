import React, { useState, useEffect } from 'react';


import useProfile from './json/userProfile.json'
// import styled from './style.css'
import { Box } from '@chakra-ui/react';
import { Text, extendTheme } from '@chakra-ui/react';

const breakpoints = {
  sm: '300px',
  md: '760px',
  lg: '960px',
  xl: '1200px',
}


const Theme = extendTheme({breakpoints});

function ReactHooks() {
    const { name, work, resume, education, experience, portfolio, footer } = useProfile;

    useEffect(() => {
        document.title = "Aisah Port"
    },);

    return (
      <Text>Say Hi</Text>
      // <Box textAlign="center">
      //   <Text> Say Hi</Text>
      // </Box> 
    );
}

export default ReactHooks;