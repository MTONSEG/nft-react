import React from "react";
import s from './Header.module.css';
import logo from '../../../assets/icons/logo.svg';
import searchIcon from '../../../assets/icons/search.svg'
import { InputSearch } from "./InputSearch/InputSearch";
import { HeaderBtn } from "../Buttons/HeaderBtn/HeaderBtn";


export function Header(props) {

	return (
		<header className={s.header}>
			<img className={s.logo} src={logo} alt="Logo" loading="lazy"/>

			<InputSearch src={searchIcon} alt="search" placeholder="Search for..." />

			<HeaderBtn title="Connect wallet" />
		</header>
	);
}