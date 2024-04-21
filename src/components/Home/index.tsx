import { ReactElement } from 'react';
import withErrorBoundary from '../../errorHandling';
import GameList from '../Game/List';

const Home = (): ReactElement => (
  <main>
    <GameList />
  </main>
);

export default withErrorBoundary(Home);
