import { useEffect, useState } from "react";
import apiClient from "../apiClient";
import { CanceledError } from "axios";

interface FetchGameResponse {
  count: number;
  results: Game[];
}

interface Game {
  id: number;
  name: string;
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGameResponse>("/games", {signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) =>  {
        if (err instanceof CanceledError) return;
        setError(err.message)});

    return () => {
      controller.abort();
    }

  }, []);

  return {error, games};
}

export default useGames;