import React from "react";
import s from './FollowBtn.module.css';

export function FollowBtn(props) {



	const onClickHandler = () => {
		let userInfo = props.userCardInfo.map(item => {
			if (item.id === props.id) {
				item.follow = !item.follow;
			}
		})

		props.setUserCardInfo(userInfo);
	}

	return (
		<button className={props.follow ?
			s.btn : `${s.unBtn}`}
			onClick={() => console.log(props.id, props.userCardInfo)}
		>
			<span>{props.title}</span>
		</button>
	);
}