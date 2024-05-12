import { Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { genres, error } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {genres.map((genre) => (
          <li id={genre.name}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenresList;
