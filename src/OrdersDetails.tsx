import React from 'react';
import { OrderCard } from './without-mobx/OrderCard';
import { Order } from './without-mobx/TeamOrdersBoard';


export const OrdersDetails: React.FC<any> = ({ orders, teamMembersWhoOrdered, teamMembersWithNoOrder }) => {
	return <>
		<p>
			<b>Teammates who ordered: </b>
			<div>{teamMembersWhoOrdered.join(', ')}</div>
		</p>
		<p>
			<b>Teammates who didn't order yet: </b>
			<div>{teamMembersWithNoOrder.join(', ')}</div>
		</p>
		{
			orders.map((order: Order) => <OrderCard key={order.teamMember} order={order}/>)
		}
	</>
}