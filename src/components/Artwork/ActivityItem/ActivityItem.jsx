import React from "react";
import { BigBtn } from "../../UI/Buttons/UserButtons/BigBtn/BigBtn";
import s from './ActivityItem.module.css';

export function ActivityItem(props) {
	return (
		<li className={s.item}>
			<div className={s.left}>
				<img className={s.image} src={props.image} alt="icon" />
				<div className={s.leftInfo}>
					<h1 className={s.title}>{props.title}</h1>
					<p className={s.date}>{props.date}</p>
				</div>
			</div>
			<div className={s.right}>

			</div>
		</li>
	);
}