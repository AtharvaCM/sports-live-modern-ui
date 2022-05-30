import React from "react";
import { Routes, Route } from "react-router-dom";

import App from "../App";
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
import HomePage from "../Pages/HomePage";
import TeamInfo from "../Components/Cricket/TeamInfo";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Home" element={<HomePage />} />

        <Route path="Cricket" element={<Cricket />}>
          <Route path="LiveScore" element={<LiveScore />} />
          <Route path="Rankings" element={<Rankings />} />
          <Route path="Series" element={<Series />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="News" element={<News />} />
          <Route path="Teams" element={<Teams />}>
            <Route path=":name" element={<TeamInfo />} />
          </Route>
          <Route path="Players" element={<Player />} />
        </Route>

        <Route path="Football" element={<Football />}>
          <Route path="LiveScore" element={<LiveScoreFootball />} />
          <Route path="Rankings" element={<RankingsFootball />} />
          <Route path="Series" element={<LeaguesFootball />} />
          <Route path="Gallery" element={<GalleryFootball />} />
          <Route path="News" element={<NewsFootball />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Router;
