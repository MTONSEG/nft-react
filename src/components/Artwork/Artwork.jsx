import React from "react";
import s from './Artwork.module.css';
import { ListCard } from "../Main/ListCard/ListCard";
import { Header } from "../UI/Header/Header";
import { PlaceBid } from "./PlaceBid/PlaceBid";
import { UserAvatarName } from "../UI/UserInfo/UserAvatarName/UserAvatarName";
import { UserInfoDescription } from "../UI/UserInfo/UserInfoDescription/UserInfoDescription";
import { UserInfoTitle } from "../UI/UserInfo/UserInfoTitle/UserInfoTitle";
import { SmallBtn } from "../UI/Buttons/UserButtons/SmallBtn/SmallBtn";

export function Artwork(props) {
	let images = props.images;

	// let activities = props.activity.map(item => );

	// console.log(activities);

	return (
		<div className="container">
			<Header logo={props.images.logo} searchIcon={props.images.searchIcon} />

			<div className={s.hero}>
				<img className={s.heroImage}
					src={props.images.artworkHero}
					alt={props.userInfo.title}
				/>

				<PlaceBid bidInfo={props.bidInfo} />
			</div>

			<div className={s.main}>
				<div className={s.user}>
					<UserAvatarName src={images.photo1} name={props.userInfo.name} nick={props.userInfo.nickname} />

					<UserInfoTitle title={props.userInfo.title} />

					<p className={s.copy}>
						Copy: <span>{ props.userInfo.copy}</span>
					</p>

					<UserInfoDescription description={props.userInfo.description2} />

					<div className={s.buttons}>
						<SmallBtn icon={images.optionIcon} alt='Options' />
						<SmallBtn icon={ images.shareIcon} alt='Share' />
						<SmallBtn icon={ images.otherIcon} alt='Other' />
					</div>
				</div>
				<div className={s.activity}>
					<h2 className={s.activityTitle}>Activity</h2>

					<ul className={s.activityList}>

					</ul>
				</div>
			</div>

			<ListCard images={props.images} />
		</div>
	);
}