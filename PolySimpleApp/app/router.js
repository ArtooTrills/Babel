import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("login");
  this.resource("tickets",function() {
  	this.route("new");
  	this.route("ticket",{"path":"/:id"});
  });
  this.resource("calls");
});

export default Router;
