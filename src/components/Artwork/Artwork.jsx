import React from "react";
import { ListCard } from "../Main/ListCard/ListCard";
import { Header } from "../UI/Header/Header";
// import s from './Artwork.module.css';

export function Artwork(props) {
	return (
		<div className="container">
			<Header />
			<ListCard images={props.images} />
		</div>
	);
}