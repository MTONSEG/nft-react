import React, { useState } from "react";
import s from '../FormStyles.module.css';

export function EmailInput(props) {

	return (
		<>
			<input className={s.input}
				type="text"
				value={textInputValue}
				onChange={onChangeHandler}
			/>
		</>
	);
}