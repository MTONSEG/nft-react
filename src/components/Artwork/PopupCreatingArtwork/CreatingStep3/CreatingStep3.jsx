import React, { useState } from "react";
import s from './CreatingStep3.module.css';
import { BigBtn } from "../../../UI/Buttons/UserButtons/BigBtn/BigBtn";
import { TextInput } from "../../../UI/Forms/TextInput/TextInput";
import { Textarea } from "../../../UI/Forms/Textarea/Textarea";

export function CreatingStep3(props) {
	let [isChecked, setIsChecked] = useState(false);

	const onClickHandler = () => {
		props.setCreatingPopup(!props.isActive)
		setTimeout(() => {
			props.setCurrentStep(!props.currentStep);
			props.setNextStep(!props.nextStep);
		}, 200);
	}
	const handleSubmit = e => { e.preventDefault() };

	const onChangeRadio = e => {
		setIsChecked(!isChecked);
		console.log(e.target.checked);
	}
	return (
		<>
			<div className="stepNum">
				{props.data.num}
			</div>

			<h2 className={s.title}>
				{props.data.uploadTitle}
			</h2>
			<form onSubmit={handleSubmit}>
				<div className={s.inpWrap}>
					<p className={s.inpTitle}>Artwork name</p>
					<TextInput type="text" />

				</div>
				<div className={s.inpWrap}>
					<p className={s.inpTitle}>Description</p>
					<Textarea />
				</div>
				<p className={s.inpTitle}>Type</p>
				<label>
					lol
					<input type="radio" name="create" label="Cat"
						checked={isChecked}
						onChange={onChangeRadio}
					/>
				</label>
				<label htmlFor="sale">

					hello
					<input id="sale" type="radio" name="create"
						checked={!isChecked}
						onChange={onChangeRadio} />
				</label>
				<BigBtn title="Finish creating"
					onClickHandler={onClickHandler}
				/>
			</form>
		</>
	);
}