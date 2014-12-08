FieldValueIs = new Mongo.Collection("FieldValueIs");
FieldValueIs.attachSchema(new SimpleSchema({
  a: {
    type: String,
    allowedValues: ["foo", "bar"]
  },
  b: {
    type: String
  }
}));

FieldValueContains = new Mongo.Collection("FieldValueContains");
FieldValueContains.attachSchema(new SimpleSchema({
  a: {
    type: [String],
    allowedValues: ["foo", "bar"]
  },
  b: {
    type: String
  }
}));

Template.registerHelper("currentFieldValue", function (fieldName) {
  return AutoForm.getFieldValue("reactiveCurrentValueForm", fieldName) || "not selected";
});
