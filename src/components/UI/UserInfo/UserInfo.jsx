import React from "react";
import s from './UserInfo.module.css';
import avatarImg from '../../../assets/images/avatar.jpg';
import soldIcon from '../../../assets/icons/sold.svg';
import optionIcon from '../../../assets/icons/optionBtn.svg';
import shareIcon from '../../../assets/icons/shareBtn.svg';
import otherIcon from '../../../assets/icons/otherBtn.svg';
import { BigBtn } from "../Buttons/UserButtons/BigBtn/BigBtn";
import { SmallBtn } from "../Buttons/UserButtons/SmallBtn/SmallBtn";
import { UserAvatarName } from "./UserAvatarName/UserAvatarName";


export function UserInfo(props) {

	return (
		<div className={s.wrap}>
			<UserAvatarName src={avatarImg} name="User Name" nick="@username" />

			<h1 className={s.title}>
				{props.userInfo.title}
			</h1>

			<p className={s.description}>
				<span>Description: </span>
				{props.userInfo.description}
			</p>
			<div className={s.userFooter}>
				<div className={s.soldWrap}>
					<p className={s.soldText}>Sold for:</p>
					<img src={soldIcon} alt="sold" className={s.soldIcon} />
					<p className={s.amountSold}>1,5M</p>
				</div>

				<div className={s.buttons}>
					<div className={s.bigBtn}>
						<BigBtn title="View" />
					</div>
					<SmallBtn icon={optionIcon} alt="Op" />
					<SmallBtn icon={shareIcon} />
					<SmallBtn icon={otherIcon} />
				</div>
			</div>
		</div>
	);
}