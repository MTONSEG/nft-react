import React, { useState } from "react";
import uuid from "react-uuid";
import s from './Main.module.css';
import { Header } from "../UI/Header/Header";
import { Hero } from "./Hero/Hero";
import { ListCard } from "./ListCard/ListCard";
import { ListUserCard } from "./ListUserCard/ListUserCard";

import itemPic1 from '../../assets/images/itemMain_1.jpg';
import itemPic2 from '../../assets/images/itemMain_2.jpg';
import itemPic3 from '../../assets/images/itemMain_3.jpg';
import itemPic4 from '../../assets/images/itemMain_4.jpg';
import itemPic5 from '../../assets/images/itemMain_5.jpg';
import itemPic6 from '../../assets/images/itemMain_6.jpg';
import itemPic7 from '../../assets/images/itemMain_7.jpg';
import itemPic8 from '../../assets/images/itemMain_8.jpg';
import photo1 from '../../assets/images/photo_1.jpg';
import photo2 from '../../assets/images/photo_2.jpg';
import photo3 from '../../assets/images/photo_3.jpg';
import photo4 from '../../assets/images/photo_4.jpg';
import photo5 from '../../assets/images/photo_5.jpg';
import iconSold2 from '../../assets/icons/sold.svg';
import iconSold1 from '../../assets/icons/sold2.svg';

export function Main(props) {
	let [userInfo, setUserInfo] = useState({
		title: 'WFH - art name',
		description: `The iconic meme that became a viral Internet sensation and an indispensable part of the gachimuchi music genre. This was taken when I was very young and in my full "performance" attire. That part of me now "lives" on platforms like Twitch, YouTube, VK (ВКонта́кте), and Bilibili (B 站).`
	})

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
	])

	return (
		<div className="container">
			<Header />
			<Hero userInfo={userInfo} />
			<ListCard images={images} />
			<h1 className={s.footerTitle}>Featured creators</h1>
			<div className={s.footer}>
				<ListUserCard userCards={userCardInfo} />
			</div>
		</div>
	);
}