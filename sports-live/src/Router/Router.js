import React from "react";

// react router
import { Routes, Route } from "react-router-dom";

// custom components
import App from "../App";
import HomePage from "../Pages/HomePage";
import Cricket from "../Pages/Cricket/Cricket";
import Gallery from "../Pages/Cricket/Gallery";
import LiveScore from "../Pages/Cricket/LiveScore";
import News from "../Pages/Cricket/News";
import Rankings from "../Pages/Cricket/Rankings";
import Series from "../Pages/Cricket/Series";
import Teams from "../Pages/Cricket/Teams";
import Player from "../Pages/Cricket/Player";
import Football from "../Pages/Football/Football";
import LiveScoreFootball from "../Pages/Football/LiveScoreFootball";
import GalleryFootball from "../Pages/Football/GalleryFootball";
import NewsFootball from "../Pages/Football/NewsFootball";
import RankingsFootball from "../Pages/Football/RankingsFootball";
import LeaguesFootball from "../Pages/Football/LeaguesFootball";
import MatchSummaryFootball from "../Pages/Football/MatchSummaryFootball";
import TeamInfo from "../Components/Cricket/Teams/TeamInfo";
import LeagueInfo from "../Components/Football/Leagues/LeagueInfo";
import FootballTeamInfo from "../Pages/Football/FootballTeamInfo";

// path constants
import { ROUTES } from "../Constants/routingPathConstants";

function Router() {
  return (
    <Routes>
      <Route path={ROUTES.APP} element={<App />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />

        <Route path={ROUTES.CRICKET} element={<Cricket />}>
          <Route path={ROUTES.LIVESCORE} element={<LiveScore />} />
          <Route path={ROUTES.RANKINGS} element={<Rankings />} />
          <Route path={ROUTES} element={<Series />} />
          <Route path={ROUTES.GALLERY} element={<Gallery />} />
          <Route path={ROUTES.NEWS} element={<News />} />
          <Route path={ROUTES.TEAMS} element={<Teams />}>
            <Route path={ROUTES.NAME_SLUG} element={<TeamInfo />} />
          </Route>
          <Route path={ROUTES.PLAYER} element={<Player />} />
        </Route>

        <Route path={ROUTES.FOOTBALL} element={<Football />}>
          <Route path={ROUTES.LIVESCORE} element={<LiveScoreFootball />} />
          <Route path={ROUTES.RANKINGS} element={<RankingsFootball />} />
          <Route path={ROUTES.SERIES} element={<LeaguesFootball />}>
            <Route path={ROUTES.NAME_SLUG} element={<LeagueInfo />}></Route>
          </Route>
          <Route path={ROUTES.GALLERY} element={<GalleryFootball />} />
          <Route path={ROUTES.NEWS} element={<NewsFootball />} />
          <Route
            path={ROUTES.MATCH_SUMMARY}
            element={<MatchSummaryFootball />}
          />
          <Route path={ROUTES.TEAM_INFO} element={<FootballTeamInfo />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
