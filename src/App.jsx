import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import uuid from "react-uuid";
import { Search } from "./components/Search/Search";
import { Main } from "./components/Main/Main";
import { Artwork } from "./components/Artwork/Artwork";
import { Profile } from "./components/Profile/Profile";
import './App.css';
//Assets
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
import selectIcon from './assets/icons/selectArrow.svg';
import menuArrow from './assets/icons/menuArr.svg';
import closeIcon from './assets/icons/close.svg';
//Header Assets
import logo from './assets/icons/logo.svg';
import searchIcon from './assets/icons/search.svg';
//Main Hero Assets
import optionIcon from './assets/icons/optionBtn.svg';
import shareIcon from './assets/icons/shareBtn.svg';
import otherIcon from './assets/icons/otherBtn.svg';
//Artwork assets
import artworkHero from './assets/images/artwork-hero.jpg';
import photoArtwork from './assets/images/photo_artwork.jpg';
import { Header } from "./components/UI/Header/Header";
// Social icons
import twitchIcon from './assets/icons/twitch.svg';
import instagramIcon from './assets/icons/instagram.svg';
import twitterIcon from './assets/icons/twitter.svg';
import onlyfansIcon from './assets/icons/onlyfans.svg';

export function App() {

  let [images, setImages] = useState({
    logo: logo,
    searchIcon: searchIcon,
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
    optionIcon: optionIcon,
    shareIcon: shareIcon,
    otherIcon: otherIcon,
    selectIcon: selectIcon,
    menuArrow: menuArrow,
    closeIcon: closeIcon,
    artworkHero: artworkHero,
    photoArtwork: photoArtwork,
    twitchIcon: twitchIcon,
    instagramIcon: instagramIcon,
    twitterIcon: twitterIcon,
    onlyfansIcon: onlyfansIcon
  });

  let [cardsList, setListCard] = useState([
    {
      id: uuid(),
      name: 'User Name',
      nickname: '@username',
      title: 'WFH - art name',
      sold: '1,5M',
      time: '05h 02m 41s',
      image: images.itemPic1,
      photo: images.photo1,
      icon: images.icon2
    },
    {
      id: uuid(),
      name: 'User Name',
      nickname: '@username',
      title: 'WFH - art name',
      sold: '1,5M',
      time: '05h 02m 41s',
      image: images.itemPic2,
      photo: images.photo2,
      icon: images.icon1
    },
    {
      id: uuid(),
      name: 'User Name',
      nickname: '@username',
      title: 'WFH - art name',
      sold: '1,5M',
      time: '05h 02m 41s',
      image: images.itemPic3,
      photo: images.photo3,
      icon: images.icon2
    },
    {
      id: uuid(),
      name: 'User Name',
      nickname: '@username',
      title: 'WFH - art name',
      sold: '1,5M',
      time: '05h 02m 41s',
      image: images.itemPic4,
      photo: images.photo4,
      icon: images.icon1
    },
    {
      id: uuid(),
      name: 'User Name',
      nickname: '@username',
      title: 'WFH - art name',
      sold: '1,5M',
      time: '05h 02m 41s',
      image: images.itemPic5,
      photo: images.photo5,
      icon: images.icon2
    },
    {
      id: uuid(),
      name: 'User Name',
      nickname: '@username',
      title: 'WFH - art name',
      sold: '1,5M',
      time: '05h 02m 41s',
      image: images.itemPic6,
      photo: images.photo3,
      icon: images.icon1
    },
    {
      id: uuid(),
      name: 'User Name',
      nickname: '@username',
      title: 'WFH - art name',
      sold: '1,5M',
      time: '05h 02m 41s',
      image: images.itemPic7,
      photo: images.photo1,
      icon: images.icon2
    },
    {
      id: uuid(),
      name: 'User Name',
      nickname: '@username',
      title: 'WFH - art name',
      sold: '1,5M',
      time: '05h 02m 41s',
      image: images.itemPic8,
      photo: images.photo4,
      icon: images.icon1
    }
  ])

  let [userInfo, setUserInfo] = useState({
    name: 'User Name',
    nickname: '@username',
    photo: images.photo1,
    copy: '2 of 10',
    title: 'WFH - art name',
    balance: '1,5M',
    description: `The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, VK (ВКонта́кте), and Bilibili (B 站).`,
    description2: `The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, VK (ВКонта́кте), and Bilibili (B 站). The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, VK (ВКонта́кте), and Bilibili (B 站).`
  });
  let [userCardInfo, setUserCardInfo] = useState([{
    id: uuid(),
    name: 'UserName',
    nickname: '@username',
    date: '24 sales on 32ETH',
    photo: images.photo1
  },
  {
    id: uuid(),
    name: 'UserName',
    nickname: '@username',
    date: '24 sales on 32ETH',
    photo: images.photo2
  },
  {
    id: uuid(),
    name: 'UserName',
    nickname: '@username',
    date: '24 sales on 32ETH',
    photo: images.photo3
  },
  {
    id: uuid(),
    name: 'UserName',
    nickname: '@username',
    date: '24 sales on 32ETH',
    photo: images.photo4
  },
  {
    id: uuid(),
    name: 'UserName',
    nickname: '@username',
    date: '24 sales on 32ETH',
    photo: images.photo5
  },
  {
    id: uuid(),
    name: 'UserName',
    nickname: '@username',
    date: '24 sales on 32ETH',
    photo: images.photo3
  },
  {
    id: uuid(),
    name: 'UserName',
    nickname: '@username',
    date: '24 sales on 32ETH',
    photo: images.photo4
  },
  {
    id: uuid(),
    name: 'UserName',
    nickname: '@username',
    date: '24 sales on 32ETH',
    photo: images.photo2
  },
  {
    id: uuid(),
    name: 'UserName',
    nickname: '@username',
    date: '24 sales on 32ETH',
    photo: images.photo3
  },
  {
    id: uuid(),
    name: 'UserName',
    nickname: '@username',
    date: '24 sales on 32ETH',
    photo: images.photo4
  },
  {
    id: uuid(),
    name: 'UserName',
    nickname: '@username',
    date: '24 sales on 32ETH',
    photo: images.photo5
  },
  {
    id: uuid(),
    name: 'UserName',
    nickname: '@username',
    date: '24 sales on 32ETH',
    photo: images.photo3
  },
  {
    id: uuid(),
    name: 'UserName',
    nickname: '@username',
    date: '24 sales on 32ETH',
    photo: images.photo4
  },
  ]);

  let [bidInfo, setBidInfo] = useState({
    currentBid: '1,5M',
    valueBid: '(1308.54$)',
    icon: iconSold2,
    time: {
      h: '1h',
      m: '28m',
      s: '32s'
    }
  });

  let [activity, setActivity] = useState([
    {
      id: uuid(),
      image: images.photoArtwork,
      title: 'Bid placed by 0x6FC0...14A4',
      date: 'May 19, 2021 at 2:27pm',
      bidInfo: bidInfo,
    },
    {
      id: uuid(),
      image: images.photoArtwork,
      title: 'Bid placed by 0x6FC0...14A4',
      date: 'May 19, 2021 at 2:27pm',
      bidInfo: bidInfo,
    },
    {
      id: uuid(),
      image: images.photoArtwork,
      title: 'Bid placed by 0x6FC0...14A4',
      date: 'May 19, 2021 at 2:27pm',
      bidInfo: bidInfo,
    },
    {
      id: uuid(),
      image: images.photoArtwork,
      title: 'Bid placed by 0x6FC0...14A4',
      date: 'May 19, 2021 at 2:27pm',
      bidInfo: bidInfo,
    },
    {
      id: uuid(),
      image: images.photoArtwork,
      title: 'Bid placed by 0x6FC0...14A4',
      date: 'May 19, 2021 at 2:27pm',
      bidInfo: bidInfo,
    },
    {
      id: uuid(),
      image: images.photoArtwork,
      title: 'Bid placed by 0x6FC0...14A4',
      date: 'May 19, 2021 at 2:27pm',
      bidInfo: bidInfo,
    }
  ]);

  let [followers, setFollower] = useState({
    followers: 234,
    following: 15
  })

  let [popupData, setPopupData] = useState({
    bid: {
      title: 'Place a bid',
      titleInput: 'Min.sum',
      textInput: '(1308.54$)',
      type: 'number'
    },
    changedTime: {
      title: 'Changing ending time',
      titleInput: 'Selling will end',
      textInput: '05h 02m 41s',
    },
    creating: {
      title: 'Creating artwork',
      step1: {
        uploadTitle: 'Upload the artwork you will be selling',
        error: 'Your artwork wasn’t approved. Cause is: Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      },
      step2: {
        uploadTitle: 'Censor the public version of artwork, if it contains 18+ content',
      },
      step3: {
        inpTitle: 'Artwork name',

      }
    }
  });


  return (
    <div className="wrapper">
      <Header
        images={images}
        userInfo={userInfo}
      />
      <Routes>
        <Route path="/" element={
          <Main
            images={images}
            userInfo={userInfo}
            userCardInfo={userCardInfo}
            cardsList={cardsList}
          />}
        />
        <Route path="/artwork" element={
          <Artwork
            images={images}
            userInfo={userInfo}
            bidInfo={bidInfo}
            activity={activity}
            cardsList={cardsList}
            popupData={popupData}
          />}
        />
        <Route path="/profile" element={
          <Profile
            images={images}
            userInfo={userInfo}
            followers={followers}
            cardsList={cardsList}
          />}
        />
        <Route path="/search" element={
          <Search
            images={images}
            userCardInfo={userCardInfo}
            cardsList={cardsList}
          />}
        />
      </Routes>
    </div>
  );
}
