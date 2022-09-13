import React from 'react';
import { Order } from './TeamOrdersBoard';

export const OrderCard: React.FC<{ order: Order }> = ({ order }) => {
	return (
		<div className="order-card">
			<p><b>Team Member: </b>
				{order.teamMember}
			</p>
			<p><b>Dish: </b>
				{order.dish}
			</p>
			<p><b>Restaurant: </b>
				{order.restaurant}
			</p>
		</div>
	);
}