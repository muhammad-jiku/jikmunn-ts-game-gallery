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
        baseURL: `https://cors-anywhere.herokuapp.com/https://${process.env.REACT_APP_BASE_URL}/api`,
        // headers: {
        //   // 'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        //   // 'x-rapidapi-host': process.env.REACT_APP_BASE_URL,
        //   // 'Access-Control-Allow-Origin': true,
        //   // 'Access-Control-Allow-Methods': 'GET',
        //   // 'Content-Type': 'application/json',
        // },
        params: {
          platform,
          category: genre,
          tag,
          'sort-by': sortBy,
        },
      })
      .then((res) => {
        console.log(res.data);
        setGames(res.data);
      })
      .catch((e) => setErr(e.message));
  }, [platform, genre, tag, sortBy]);

  return {
    games,
    error: err,
  };
};

export default useFetch;
