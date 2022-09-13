import React from 'react';
import { CreateOrder } from './CreateOrder';
import { OrdersDetails } from '../OrdersDetails';

export const TeamOrdersBoard: React.FC = () => {

	const [orders, setOrders] = React.useState<Order[]>([]);

	const teamMembersWhoOrdered = orders.map(order => order.teamMember);
	const teamMembersWithNoOrder = TeamMembers.filter(tm => !teamMembersWhoOrdered.includes(tm));

	const placeOrder = (order: Order) => {
		setOrders([...orders, order]);
	}

	return <div id={"orders-board"}>
		<h2>~ Ten Cibus ~</h2>
		<OrdersDetails orders={orders}
					   teamMembersWhoOrdered={teamMembersWhoOrdered}
					   teamMembersWithNoOrder={teamMembersWithNoOrder}/>
		<CreateOrder teamMemberWithNoOrder={teamMembersWithNoOrder} onSubmitOrder={placeOrder}/>

	</div>
}

export interface Order {
	teamMember: string;
	dish: string;
	restaurant: string;
}

const TeamMembers = ['Nitsan', 'Liron', 'Kinneret', 'Mustafa', 'Aaron', 'Ido', 'Amir', 'Naama', 'Nati', 'Ofir', 'Ruti', 'Eddy', 'Noa']