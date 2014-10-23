var selectedType = new ReactiveVar("text");
var selectedSchemaType = new ReactiveVar(String);
var selectedSchemaTypeAsString = new ReactiveVar("String");

Template.types.helpers({
  typesSchema1: function () {
    var st = selectedType.get();
    var sst = selectedSchemaType.get();
    return new SimpleSchema({
      typeTest: {
        type: sst,
        autoform: {
          type: st
        }
      }
    });
  },
  selectedType: function () {
    return selectedType.get();
  },
  selectedSchemaType: function () {
    return selectedSchemaTypeAsString.get();
  }
});

Template.types.events({
  'change .type-selection': function (event) {
    selectedType.set(event.target.value);
    selectedSchemaType.set(String);
    selectedSchemaTypeAsString.set("String");
  }
})