import Ember from "ember";

var Route = Ember.Route.extend({
	model: function() {
		return [
			Ember.Object.create({			
				id: 1,
				title: "Not working",
				message: "Not very clear",
				tags: ["sync","login"]
			}),
			Ember.Object.create({			
				id: 2,
				title: "Credit Checks pending",
				message: "Just restarted it",
				tags: ["sync","credit-check"]
			})
		];
	},

	actions: {
		showTicket: function(ticket) {
			this.transitionTo("tickets.ticket",ticket);
		}
	}
});

export default Route;