import DS from 'ember-data';

export default DS.Model.extend({
	id: DS.attr("string"),
	title: DS.attr("string"),
	message: DS.attr("string"),
	tags: DS.attr("string"),
	url: DS.attr("string")
});