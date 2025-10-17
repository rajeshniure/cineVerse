import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Movies from "../pages/movies/movies";
import TvSeries from "../pages/tvSeries/TvSeries";
import Bookmark from "../pages/bookmark/Bookmark";
import NotFound from "../pages/notFound/notFound";
import ContentDetail from "../pages/content/ContentDetail";

import AuthLayout from "../layout/AuthLayout";
import Signup from "../AuthComponent/Signup";
import Login from "../AuthComponent/Login";
import Logout from "../pages/logout/Logout";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>

    <Route element={<ProtectedRoute />}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="series" element={<TvSeries />} />
        <Route path="bookmarks" element={<Bookmark />} />
        <Route path="content/:title" element={<ContentDetail />} />
        <Route path="profile" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
