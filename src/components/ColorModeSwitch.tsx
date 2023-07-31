import { Switch, Text, useColorMode, HStack } from '@chakra-ui/react'
import React from 'react'

const ColorModeSwitch = () => {
const {toggleColorMode, colorMode} = useColorMode();
  return (
    <HStack>
        <Switch  isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
        <Text >Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch