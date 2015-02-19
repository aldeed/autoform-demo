FieldValueIs = new Mongo.Collection("FieldValueIs");
FieldValueIs.attachSchema(new SimpleSchema({
  a: {
    type: String,
    allowedValues: ["foo", "bar"]
  },
  b: {
    type: String
  },
  c: {
    type: [String],
    minCount: 1,
    maxCount: 3
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
  return AutoForm.getFieldValue(fieldName) || "not selected";
});

Template.registerHelper("currentFieldValue2", function (fieldName) {
  return AutoForm.getFieldValue(fieldName) || "empty";
});
