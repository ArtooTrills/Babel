import DS from 'ember-data';

export default DS.Model.extend({
	org: DS.attr("string"),
	username: DS.attr("string"),
	mobile: DS.attr("string"),
	email: DS.attr("string"),
	roles: DS.attr("string"),
	contexts: DS.attr("string")
});