// src/AppRouter.tsx
import { Routes, Route } from "react-router-dom";
import Items from "../pages/Items";
import MainPage from "../pages/MainPage";
import Champions from "../pages/Champions";
import Runes from "../pages/Runes";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/champions" element={<Champions />} />
        <Route path="/runes" element={<Runes />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </>
  );
};

export default AppRouter;
