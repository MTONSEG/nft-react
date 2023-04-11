import React from "react";
import s from './Select.module.css';
import selectIcon from '../../../assets/icons/selectArrow.svg';

export function Select(props) {

	return (
		<div className={s.select}>
			<span>{props.title}</span>
			<img src={selectIcon} alt="icon" />
		</div>
	);
}