import SimpleSchema from 'simpl-schema';
import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';

FieldValueIs = new Mongo.Collection('FieldValueIs');
FieldValueIs.attachSchema(new SimpleSchema({
  a: {
    type: String,
    allowedValues: ['foo', 'bar']
  },
  b: {
    type: String
  },
  c: {
    type: Array,
    minCount: 1,
    maxCount: 3
  },
  'c.$': {
    type: String,
  }
}, { tracker: Tracker }));

FieldValueContains = new Mongo.Collection('FieldValueContains');
FieldValueContains.attachSchema(new SimpleSchema({
  a: {
    type: Array,
  },
  'a.$': {
    type: String,
    allowedValues: ['foo', 'bar']
  },
  b: {
    type: String
  }
}, { tracker: Tracker }));

Template.registerHelper('currentFieldValue', function (fieldName) {
  return AutoForm.getFieldValue(fieldName) || 'not selected';
});

Template.registerHelper('currentFieldValue2', function (fieldName) {
  return AutoForm.getFieldValue(fieldName) || 'empty';
});
