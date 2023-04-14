import React, { useState } from "react";
import s from '../FormStyles.module.css';

export function RadioInput(props) {
	return (
		<label className={s.custom}>
			<input className={s.inpRadio}
				type="radio"
				name={props.name}
				checked={props.checked}
				onChange={props.onChangeCheckHandler}
			/>
			{props.text}
		</label>
	);
}