import { Template } from 'meteor/templating';

Template.registerHelper('Helpers', {
  equals: (a, b) => (a === b),
  contains: (a, b) => _.contains(a, b),
  stringifyObj: obj => JSON.stringify(obj, null, 2),
});
