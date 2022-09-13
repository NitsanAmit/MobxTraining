import React, { useEffect } from 'react';
import { OrderDraft, OrdersStore } from './OrdersStore';
import { observer } from 'mobx-react';


export const NewCreateOrder: React.FC<NewOrderProps> = observer(({ ordersStore }) => {

	const { draft, teamMembersWithNoOrder } = ordersStore;

	return <div className="form">
		<select value={draft.teamMember} onChange={({target}) => draft.teamMember = target.value} placeholder="Team Member">
			{
				teamMembersWithNoOrder.map((tm: string) => <option key={tm}>{tm}</option>)
			}
		</select>
		<input value={draft.dish} onChange={({target}) => draft.dish = target.value} placeholder="Dish"/>
		<input value={draft.restaurant} onChange={({target}) => draft.restaurant = target.value} placeholder="Restaurant" />
		<button onClick={() => ordersStore.placeOrder()}>{'Add Order'}</button>
	</div>

});

function validateRestaurantAvailable(draft: OrderDraft) {
	if (draft.dish && draft.restaurant) {
		if (Math.random() > 0.5) {
			alert('Restaurant not available!');
		}
	}
}


interface NewOrderProps {
	ordersStore: OrdersStore;
}
