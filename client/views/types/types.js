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
  typesSchema2: function () {
    var sst = selectedSchemaType.get();
    return new SimpleSchema({
      typeTest: {
        type: sst
      }
    });
  },
  selectedType: function () {
    return selectedType.get();
  },
  selectedSchemaType: function () {
    return selectedSchemaTypeAsString.get();
  },
  extraInfo: function () {
    var t = selectedType.get();
    return extraInfo[t];
  }
});

Template.types.events({
  'change .type-selection': function (event) {
    selectedType.set(event.target.value);
  },
  'change .schema-type-selection': function (event) {
    var t = event.target.value;
    selectedSchemaTypeAsString.set(t);

    switch (t) {
      case "String":
        selectedSchemaType.set(String);
        break;
      case "Number":
        selectedSchemaType.set(Number);
        break;
      case "Boolean":
        selectedSchemaType.set(Boolean);
        break;
      case "Date":
        selectedSchemaType.set(Date);
        break;
      case "[String]":
        selectedSchemaType.set([String]);
        break;
      case "[Number]":
        selectedSchemaType.set([Number]);
        break;
      case "[Boolean]":
        selectedSchemaType.set([Boolean]);
        break;
      case "[Date]":
        selectedSchemaType.set([Date]);
        break;
    }
  }
});

AutoForm.addHooks(["types1", "types2", "types3"], {
  onSubmit: function (doc) {
    console.log("Submitted value:", doc.typeTest);
    this.done();
    return false;
  }
});