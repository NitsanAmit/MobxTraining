import React, { useState } from 'react';
import { OrdersStore } from './OrdersStore';
import { NewCreateOrder } from './NewCreateOrder';
import { observer } from 'mobx-react';
import { OrdersDetails } from '../OrdersDetails';

export const TeamOrdersBoardMobx: React.FC = observer(() => {

	const [ordersStore] = useState<OrdersStore>(new OrdersStore());

	return <div id={"orders-board"}>
		<h2>~ Ten Cibus ~</h2>
		<OrdersDetails orders={ordersStore.orders}
					   teamMembersWhoOrdered={ordersStore.teamMembersWhoOrdered}
					   teamMembersWithNoOrder={ordersStore.teamMembersWithNoOrder}/>
		<NewCreateOrder ordersStore={ordersStore}/>
	</div>
});