import { Box, Container } from '@chakra-ui/react'
import React, { Children, ReactNode } from 'react'

export interface Props {
    children: ReactNode;
}

const GameCardContainer = ({children}: Props) => {
  return (
 <Box borderRadius={10} overflow={'hidden'}>
{children}
 </Box>
  )
}

export default GameCardContainer