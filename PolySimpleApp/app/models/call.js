import DS from 'ember-data';

export default DS.Model.extend({
	id: DS.attr("string"),
	number: DS.attr("string"),
	time: DS.attr("string"),
	user: DS.belongsTo("user"),
	url: DS.attr("string")
});