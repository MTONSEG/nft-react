import React, { useState } from "react";
import s from '../FormStyles.module.css';

export function CheckboxInput(props) {

	let [checkboxInput, setCheckboxInput] = useState('');

	const onChangeHandler = e => {
		setTextareaValue(e.currentTarget.value);
	}

	return (
		<>
			<label>
				hello
				<input className={s.textarea}
					cols="30" rows="10"
					name={props.name}
					value={textareaValue}
					onChange={onChangeHandler}
				/>
			</label>
		</>
	);
}