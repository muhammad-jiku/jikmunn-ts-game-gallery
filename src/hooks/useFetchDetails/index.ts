import { useState, useEffect } from 'react';
import axios from 'axios';
import { Game } from '../../types';

type Response = {
  game: Game[];
  error: string;
};

const useFetchDetails = (params: Game): Response => {
  const [game, setGame] = useState<Game[]>([]);
  const [err, setErr] = useState<string>('');
  const { id } = params;

  useEffect(() => {
    axios
      .get(`/game/:${id}`, {
        baseURL: `https://cors-anywhere.herokuapp.com/https://${process.env.REACT_APP_BASE_URL}/api`,
        // headers: {
        //   // 'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        //   // 'x-rapidapi-host': process.env.REACT_APP_BASE_URL,
        //   // 'Access-Control-Allow-Origin': true,
        //   // 'Access-Control-Allow-Methods': 'GET',
        //   // 'Content-Type': 'application/json',
        // },
        params: {
          id,
        },
      })
      .then((res) => {
        console.log(res.data);
        setGame(res.data);
      })
      .catch((e) => setErr(e.message));
  }, [id]);

  return {
    game,
    error: err,
  };
};

export default useFetchDetails;
