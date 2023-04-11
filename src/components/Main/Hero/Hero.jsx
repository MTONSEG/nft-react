import React from "react";
import s from './Hero.module.css';
// import { HeroSlider } from "./HeroSlider/HeroSlider";
import { UserInfo } from "../../UI/UserInfo/UserInfo";
import heroImg from '../../../assets/images/hero.png';


export function Hero(props) {
	return (
		<div className={s.hero}>
			<div className={s.infoBlock}>
				<UserInfo images={props.images}  userInfo={props.userInfo} />
			</div>
			<div className={s.sliderBlock}>
				{/* <HeroSlider /> */}
				<img className={s.sliderPic} src={heroImg} alt="" loading="lazy" />
			</div>

		</div>
	);
}