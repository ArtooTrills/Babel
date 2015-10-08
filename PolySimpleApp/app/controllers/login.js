import Ember from 'ember';

export default Ember.Controller.extend({

	username: "sameersegal",
	mobile: "9886689754",
	freshdeskUrl: "https://artooin.freshdesk.com",

	socketService: Ember.inject.service('socket-io'),

	queryString: function() {
		return "?username=" + this.get("username") + "&mobile=" + this.get("mobile");
	}.property("username","mobile"),

	actions: {
		login: function() {					
			
			var url = 'ws://localhost:3000' + this.get("queryString");
			console.log(url);
			var socket = this.get('socketService').socketFor(url);
			var that = this;
			
			socket.on('connect', function() {
		      socket.send('adduser');
		      socket.on('message', this.onMessage, this);

		      that.transitionTo("calls");
		    }, this);
		}
	},

	onMessage: function(data) {
	    console.log(data);
	}
});