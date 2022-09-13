import React, { useRef } from 'react';
import { Order } from './TeamOrdersBoard';

export const CreateOrder: React.FC<NewOrderProps> = ({ teamMemberWithNoOrder, onSubmitOrder }) => {

	const teamMemberRef = useRef<HTMLSelectElement>(null); // Framework dependency
	const dishRef = useRef<HTMLInputElement>(null);
	const restaurantRef = useRef<HTMLInputElement>(null);

	const submitOrder = () => {
		const teamMember = teamMemberRef?.current?.value;
		const dish = dishRef?.current?.value;
		const restaurant = restaurantRef?.current?.value;
		if (teamMember && dish && restaurant) {
			onSubmitOrder({ teamMember, dish, restaurant });
			teamMemberRef.current.value = '';
			dishRef.current.value = '';
			restaurantRef.current.value = '';
		}
	}

	return <div className="form">
		<select ref={teamMemberRef} placeholder="Team Member">
			{
				teamMemberWithNoOrder.map((tm: string) => <option key={tm}>{tm}</option>)
			}
		</select>
		<input ref={dishRef} placeholder="Dish"/>
		<input ref={restaurantRef} placeholder="Restaurant" />
		<button onClick={() => submitOrder()}>{'Add Order'}</button>
	</div>
}


interface NewOrderProps {
	teamMemberWithNoOrder: string[];
	onSubmitOrder: (order: Order) => void;
}