import React from "react";
import s from './BigBtn.module.css';

export function BigBtn(props) {
	return (
		<button className={s.btn}>
			{props.title}
		</button>
	);
}