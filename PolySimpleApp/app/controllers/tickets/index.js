import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		edit: function() {
			console.log("edit");
			console.log(arguments);
		}
	}
});