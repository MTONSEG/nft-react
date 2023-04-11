import React, { useState } from "react";
import s from './Main.module.css';
import { Header } from "../UI/Header/Header";
import { Hero } from "./Hero/Hero";
import { ListCard } from "./ListCard/ListCard";
import { ListUserCard } from "./ListUserCard/ListUserCard";

export function Main(props) {

	return (
		<div className="container">
			<Header logo={props.images.logo} searchIcon={props.images.searchIcon} />
			<Hero
				images={props.images}
				userInfo={props.userInfo}
			/>
			<ListCard images={props.images} />
			<h1 className={s.footerTitle}>Featured creators</h1>
			<div className={s.footer}>
				<ListUserCard userCards={props.userCardInfo} />
			</div>
		</div>
	);
}