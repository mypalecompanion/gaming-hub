import useData from "./useData";

interface Genre {
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
