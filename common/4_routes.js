Router.configure({
  notFoundTemplate: 'not_found',
  loadingTemplate: 'loading',
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});
Router.route('/quickform', {name: 'quickform'});
Router.route('/fieldvalues', {name: 'fieldvalues'});
Router.route('/insertaf', {name: 'insertaf'});
Router.route('/updateaf', {name: 'updateaf'});
Router.route('/qfdetails', {name: 'qfdetails'});
Router.route('/types', {name: 'types'});
Router.route('/select', {name: 'select'});
Router.route('/update-each', {
  name: 'update-each',
  waitOn: function () {
    return Meteor.subscribe("allItems");
  }
});
Router.route('/updatepush', {
  name: 'updatepush'
});
Router.route('/update-array-item', {
  name: 'updateArrayItem'
});
