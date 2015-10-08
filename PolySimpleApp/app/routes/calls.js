import Ember from "ember";

var Route = Ember.Route.extend({
	model: function() {
		return [
			Ember.Object.create({			
				id: 91,
				time: "",
				number: "",
				user: Ember.Object.create({
					org: "Ujjivan",
					username: "kaushikbhat",
					name: "Kaushik Bhat",
					roles: ["Program Manger","Loan Officer"],
					contexts: ["Head Office"]
				}),
				url: "https://exotel.in/"
			}),
			Ember.Object.create({			
				id: 92,
				time: "",
				number: "",
				user: Ember.Object.create({
					org: "Ujjivan",
					username: "kaushikbhat",
					name: "Kaushik Bhat",
					roles: ["Program Manger","Loan Officer"],
					contexts: ["Head Office"]
				}),
				url: "https://exotel.in/"
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