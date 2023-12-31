import React from 'react'
import useGenres, { Genre } from '../hooks/useGenres'
import { Button, HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import getCroppedImageUrl from '../services/image-url'
import useData from '../hooks/useData';



interface Props {
  onSelectGenre: (genre: Genre) =>  void;
}

const GenreList = ({onSelectGenre}: Props) => {
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
     onClick={()=>onSelectGenre(genre)} 
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