import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Movies from "../pages/movies/movies";
import TvSeries from "../pages/tvSeries/TvSeries";
import Bookmark from "../pages/bookmark/Bookmark";
import NotFound from "../pages/notFound/notFound";



const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<TvSeries />} />
        <Route path="bookmarks" element={<Bookmark />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
