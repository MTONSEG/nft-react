import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Main } from "./components/Main/Main";
import { Artwork } from "./components/Artwork/Artwork";
import { Creator } from "./components/Creator/Creator";
import { Profile } from "./components/Profile/Profile";
import { Search } from "./components/Search/Search";
import './App.css';
// Main Assets
import itemPic1 from './assets/images/itemMain_1.jpg';
import itemPic2 from './assets/images/itemMain_2.jpg';
import itemPic3 from './assets/images/itemMain_3.jpg';
import itemPic4 from './assets/images/itemMain_4.jpg';
import itemPic5 from './assets/images/itemMain_5.jpg';
import itemPic6 from './assets/images/itemMain_6.jpg';
import itemPic7 from './assets/images/itemMain_7.jpg';
import itemPic8 from './assets/images/itemMain_8.jpg';
import photo1 from './assets/images/photo_1.jpg';
import photo2 from './assets/images/photo_2.jpg';
import photo3 from './assets/images/photo_3.jpg';
import photo4 from './assets/images/photo_4.jpg';
import photo5 from './assets/images/photo_5.jpg';
import iconSold2 from './assets/icons/sold.svg';
import iconSold1 from './assets/icons/sold2.svg';

export function App(props) {
  let [images, setImages] = useState({
    itemPic1: itemPic1,
    itemPic2: itemPic2,
    itemPic3: itemPic3,
    itemPic4: itemPic4,
    itemPic5: itemPic5,
    itemPic6: itemPic6,
    itemPic7: itemPic7,
    itemPic8: itemPic8,
    photo1: photo1,
    photo2: photo2,
    photo3: photo3,
    photo4: photo4,
    photo5: photo5,
    icon1: iconSold1,
    icon2: iconSold2,
  })

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Main images={images} />} />
        <Route path="/artwork" element={<Artwork images={images} />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}
