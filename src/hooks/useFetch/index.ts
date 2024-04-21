import { useState, useEffect } from 'react';
import axios from 'axios';
import { Game } from '../../types';
import { Filter } from '../../components/Game/List/types';

type Response = {
  games: Game[];
  error: string;
};

const useFetch = (params: Filter): Response => {
  const [games, setGames] = useState<Game[]>([]);
  const [err, setErr] = useState<string>('');
  const { platform, genre, tag, sortBy } = params;

  useEffect(() => {
    axios
      .get('/games', {
        baseURL: `https://${process.env.BASE_URL}/api`,
        headers: {
          //   'x-rapidapi-key': API_KEY,
          //   'x-rapidapi-host': process.env.BASE_URL,
        },
        params: {
          platform,
          category: genre,
          tag,
          'sort-by': sortBy,
        },
      })
      .then((res) => setGames(res.data))
      .catch((e) => setErr(e.message));
  }, [platform, genre, tag, sortBy]);

  return {
    games,
    error: err,
  };
};

export default useFetch;
