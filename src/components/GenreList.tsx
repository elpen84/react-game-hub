import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres'
import { Button, HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url'
import useData from '../hooks/useData';



interface Props {
  onSelectedGenre: (genre: Genre) =>  void;
}

const GenreList = ({onSelectedGenre}: Props) => {
    const { data} = useData<Genre>('/genres')
    
  return (
<List>
{data.map(genre =>
<ListItem key={genre.id} paddingY="5px">
  <HStack>
    <Image
    boxSize="32px"
    borderRadius={8}
    src={getCroppedImageUrl(genre.image_background)}
    />
     <Button 
     onClick={()=>onSelectedGenre(genre)} 
     fontSize={'lg'} 
     variant='link'>
      {genre.name}
  </Button> 
  </HStack>
  </ListItem>)}
</List> 
  )
}

export default GenreList