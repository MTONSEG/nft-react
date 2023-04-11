import React from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { Artwork } from "./components/Artwork/Artwork";
import { Creator } from "./components/Creator/Creator";
import { Profile } from "./components/Profile/Profile";
import { Search } from "./components/Search/Search";

import './App.css';

export function App(props) {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/artwork" element={<Artwork />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}
