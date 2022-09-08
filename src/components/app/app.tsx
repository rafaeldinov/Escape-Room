import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import DetailedQuest from '../../components/detailed-quest/detailed-quest';
import Contacts from '../../components/contacts/contacts';
import Home from '../../components/home/home';
import PageNotFound from '../../components/page-not-found/page-not-found';
import { appTheme } from './common';
import * as S from './app.styled';
import { AppRoute } from '../../const';
import HistoryRouter from '../../history-route/history-route';
import browserHistory from '../../browser-history';

const App = () => (

  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Home />}
        />
        <Route
          path={AppRoute.Quest}
          element={<DetailedQuest />}
        />
        <Route
          path={AppRoute.Contacts}
          element={<Contacts />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<PageNotFound />}
        />
      </Routes>
    </HistoryRouter>
  </ThemeProvider>

);

export default App;
