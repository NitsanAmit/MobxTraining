import { Order } from '../without-mobx/TeamOrdersBoard';
import { computed, observable } from 'mobx';

export class OrdersStore {

	constructor() {
		this.draft = new OrderDraft(this.teamMembersWithNoOrder[0]);
	}

	@observable
	orders: Order[] = [];

	@computed
	get teamMembersWhoOrdered() {
		return this.orders.map(order => order.teamMember);
	}

	@computed
	get teamMembersWithNoOrder() {
		return TeamMembers.filter(tm => !this.teamMembersWhoOrdered.includes(tm));
	}

	@observable
	draft: OrderDraft;

	public placeOrder() {
		if (this.draft.isValid) {
			this.orders.push(this.draft.order);
			this.draft = new OrderDraft(this.teamMembersWithNoOrder[0]);
		}
	}

}

export class OrderDraft {

	constructor(teamMember: string) {
		this.teamMember = teamMember;
	}

	@observable
	teamMember?: string;

	@observable
	dish?: string = '';

	@observable
	restaurant?: string = '';

	@computed
	get order(): Order {
		return {
			teamMember: this.teamMember!,
			dish: this.dish!,
			restaurant: this.restaurant!
		}
	}

	@computed
	get isValid(): boolean {
		return !!(this.teamMember && this.dish && this.restaurant);
	}

}


const TeamMembers = ['Nitsan', 'Liron', 'Kinneret', 'Mustafa', 'Aaron', 'Ido', 'Amir', 'Naama', 'Nati', 'Ofir', 'Ruti', 'Eddy', 'Noa']