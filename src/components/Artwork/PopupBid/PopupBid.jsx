import React from "react";
import { BigBtn } from "../../UI/Buttons/UserButtons/BigBtn/BigBtn";
import s from './PopupBid.module.css';

export function PopupBid(props) {
	let data = props.data;

	const onClickHandler = () => {
		props.changeActive(!props.isActive);
	}

	return (
		<div className={props.isActive ?
			`${s.popup} ${s.active}` : s.popup
		}
			onClick={onClickHandler}
		>
			<div className={s.content}
				onClick={e => { e.stopPropagation() }}
			>
				<button
					className={s.close}
					onClick={onClickHandler}
				>
					<img className={s.closeIcon} src={props.closeIcon} alt='close' />

				</button>
				<h1 className={s.title}>{data.title}</h1>
				<p className={s.inputTitle}>{data.titleInput}</p>

				<div className={s.inputWrap}>
					<input className={s.input} type={data.type} />
					<p className={s.price}>{data.textInput}</p>
				</div>
				<BigBtn title="Place"
					onClickHandler={onClickHandler}
				/>
			</div>
		</div>
	);
}