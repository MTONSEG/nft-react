import React, { useState } from "react";
import s from './Header.module.css';
import { InputSearch } from "./InputSearch/InputSearch";
import { HeaderBtn } from "../Buttons/HeaderBtn/HeaderBtn";
import { UserMenu } from "./UserMenu/UserMenu";


export function Header(props) {
	let images = props.images;

	let [isEntered, setEnter] = useState(false);

	let onClickHandler = () => {
		setEnter(!isEntered);
	}

	return (
		<header className={s.header}>
			<img className={s.logo} src={images.logo} alt="Logo" loading="lazy" />

			<InputSearch src={images.searchIcon} alt="search" placeholder="Search for..." />
			{
				isEntered ?
					<UserMenu images={props.images}
						userInfo={props.userInfo}
						onClickHandler={onClickHandler}
					/> :
					<HeaderBtn title="Connect wallet"
						onClickHandler={onClickHandler}
					/>
			}
		</header>
	);
}