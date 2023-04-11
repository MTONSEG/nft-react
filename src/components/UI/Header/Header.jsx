import React from "react";
import s from './Header.module.css';
import { InputSearch } from "./InputSearch/InputSearch";
import { HeaderBtn } from "../Buttons/HeaderBtn/HeaderBtn";


export function Header(props) {

	return (
		<header className={s.header}>
			<img className={s.logo} src={props.logo} alt="Logo" loading="lazy"/>

			<InputSearch src={props.searchIcon} alt="search" placeholder="Search for..." />

			<HeaderBtn title="Connect wallet" />
		</header>
	);
}