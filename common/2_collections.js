var Collections = {};

UI.registerHelper("Collections", Collections);

People = Collections.People = new Mongo.Collection("People");
People.attachSchema(Schemas.Person);