import React from "react";
import s from './SmallBtn.module.css';

export function SmallBtn(props) {
	return (
		<button className={s.btn}>
			<img src={props.icon} alt={props.alt} />
		</button>
	);
}