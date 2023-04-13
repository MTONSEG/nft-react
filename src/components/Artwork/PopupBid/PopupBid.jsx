import React from "react";
import { BigBtn } from "../../UI/Buttons/UserButtons/BigBtn/BigBtn";
import './PopupBid.css';

export function PopupBid(props) {
	let data = props.data;

	const onClickHandler = () => {
		props.changeActive(!props.isActive);
	}

	return (
		<div className={props.isActive ?
			"popup active" : "popup"
		}
			onClick={onClickHandler}
		>
			<div className="content"
				onClick={e => { e.stopPropagation() }}
			>
				<button
					className="close"
					onClick={onClickHandler}
				>
					<img className="closeIcon" src={props.closeIcon} alt='close' />
				</button>
				<h1 className="title">{data.title}</h1>
				<p className="inputTitle">{data.titleInput}</p>

				<div className="inputWrap">
					<input className="input" type={data.type} />
					<p className="price">{data.textInput}</p>
				</div>
				<BigBtn title="Place"
					onClickHandler={onClickHandler}
				/>
			</div>
		</div>
	);
}