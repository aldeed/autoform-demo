import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

// Required AutoForm setup
SimpleSchema.extendOptions(['autoform']);

SimpleSchema.debug = true; //uncomment to help when developing, comment when deploying

Schemas = {};

Meteor.isClient && Template.registerHelper('Schemas', Schemas);

Schemas.Person = new SimpleSchema({
  firstName: {
    type: String,
    index: 1,
    unique: true
  },
  lastName: {
    type: String,
    optional: true
  },
  age: {
    type: SimpleSchema.Integer,
    optional: true
  }
}, { tracker: Tracker });

Schemas.Item = new SimpleSchema({
  name: {
    type: String,
    index: 1,
    unique: true
  },
  tags: {
    type: String,
    optional: true
  }
}, { tracker: Tracker });

Schemas.Select = new SimpleSchema({
  favoriteYear: SimpleSchema.Integer
}, { tracker: Tracker });

Schemas.SelectMultiple = new SimpleSchema({
  favoriteYears: [SimpleSchema.Integer]
}, { tracker: Tracker });

Schemas.FieldsExamples = new SimpleSchema({
  name: {
    type: String
  },
  phone: {
    type: String,
    optional: true
  },
  address: {
    type: Object
  },
  'address.street': {
    type: String
  },
  'address.street2': {
    type: String,
    optional: true
  },
  'address.city': {
    type: String
  },
  'address.state': {
    type: String,
    allowedValues: ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'],
    autoform: {
      afFieldInput: {
        firstOption: '(Select a State)'
      }
    }
  },
  'address.postalCode': {
    type: String,
    label: 'ZIP'
  },
  contacts: {
    type: Array,
    optional: true
  },
  'contacts.$': Object,
  'contacts.$.name': String,
  'contacts.$.phone': String,
}, { tracker: Tracker });

Schemas.PersonWithContacts = new SimpleSchema({
  firstName: {
    type: String,
    index: 1,
    unique: true
  },
  lastName: {
    type: String,
    optional: true
  },
  age: {
    type: SimpleSchema.Integer,
    optional: true
  },
  contacts: {
    type: Array,
    optional: true
  },
  'contacts.$': Object,
  'contacts.$.name': String,
  'contacts.$.phone': String,
}, { tracker: Tracker });
