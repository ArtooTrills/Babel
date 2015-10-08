import Ember from 'ember';

export default Ember.Controller.extend({
	itemController: "item",

	actions: {
		createTicket: function() {
			this.transitionTo("tickets.new");
		}
	}
});