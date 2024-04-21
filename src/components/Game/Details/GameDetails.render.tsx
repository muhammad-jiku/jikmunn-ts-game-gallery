import { ChangeEvent, ReactElement } from 'react';
import { Game } from '../../../types';
import GameCard from '../Card';
interface Props {
  err?: string;
  gameDetails: Game[];
  onFilterChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

const GameDetails = ({ err, gameDetails }: Props): ReactElement => {
  if (err) {
    return <p>Unable to fetch games</p>;
  }
  if (!gameDetails?.length) {
    return <p>No game is available here!</p>;
  }
  return (
    <>
      {gameDetails.map((game) => (
        <GameCard content={game} key={game?.id} />
      ))}
    </>
  );
};

export default GameDetails;
