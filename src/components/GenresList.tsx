import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { getCroppedImage } from "../services/image-url";

const GenresList = () => {
  const { data: genres, error } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {genres.map((genre) => (
          <ListItem id={genre.name} paddingY={1}>
            <HStack>
              <Image
                src={getCroppedImage(genre.image_background)}
                boxSize="32px"
                borderRadius="8"
              />
              <Text fontSize="large">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
