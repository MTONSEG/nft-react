import React from "react";
import { Select } from "../../UI/Select/Select";
import { ItemCard } from "./ItemCard/ItemCard";
import s from './ListCard.module.css';

export function ListCard(props) {
	const images = props.images;

	let itemProps = {
		name: 'User Name',
		nickname: '@username',
		title: 'WFH - art name',
		sold: '1,5M',
		time: '05h 02m 41s'
	}

	return (
		<main className={s.main}>
			<div className={s.selects}>
				<Select title="Recently added" />
				<Select title="Auctions" />
			</div>

			<ul className={s.list}>
				<ItemCard name={itemProps.name} nickname={itemProps.nickname}
					title={itemProps.title} date={itemProps.time} sold={itemProps.sold}
					icon={images.icon1} pic={images.itemPic1} photo={images.photo1} />
				<ItemCard name={itemProps.name} nickname={itemProps.nickname}
					title={itemProps.title} date={itemProps.time} sold={itemProps.sold}
					icon={images.icon2} pic={images.itemPic2} photo={images.photo2} />
				<ItemCard name={itemProps.name} nickname={itemProps.nickname}
					title={itemProps.title} date={itemProps.time} sold={itemProps.sold}
					icon={images.icon1} pic={images.itemPic3} photo={images.photo3} />
				<ItemCard name={itemProps.name} nickname={itemProps.nickname}
					title={itemProps.title} date={itemProps.time} sold={itemProps.sold}
					icon={images.icon2} pic={images.itemPic4} photo={images.photo4} />
				<ItemCard name={itemProps.name} nickname={itemProps.nickname}
					title={itemProps.title} date={itemProps.time} sold={itemProps.sold}
					icon={images.icon1} pic={images.itemPic5} photo={images.photo5} />
				<ItemCard name={itemProps.name} nickname={itemProps.nickname}
					title={itemProps.title} date={itemProps.time} sold={itemProps.sold}
					icon={images.icon2} pic={images.itemPic6} photo={images.photo2} />
				<ItemCard name={itemProps.name} nickname={itemProps.nickname}
					title={itemProps.title} date={itemProps.time} sold={itemProps.sold}
					icon={images.icon1} pic={images.itemPic7} photo={images.photo3} />
				<ItemCard name={itemProps.name} nickname={itemProps.nickname}
					title={itemProps.title} date={itemProps.time} sold={itemProps.sold}
					icon={images.icon2} pic={images.itemPic8} photo={images.photo1} />
			</ul>
		</main>
	);
}