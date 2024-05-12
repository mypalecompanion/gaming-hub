import useData from "./useData";

interface Genre {
  name: string;
  slug: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
