var Collections = {};

Meteor.isClient && Template.registerHelper("Collections", Collections);

People = Collections.People = new Mongo.Collection("People");
People.attachSchema(Schemas.Person);

Items = Collections.Items = new Mongo.Collection("Items");
Items.attachSchema(Schemas.Item);

PeopleWithContacts = Collections.PeopleWithContacts = new Mongo.Collection("PeopleWithContacts");
PeopleWithContacts.attachSchema(Schemas.PersonWithContacts);
