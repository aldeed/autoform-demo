import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { FlowRouter } from 'meteor/kadira:flow-router';

BlazeLayout.setRoot('body');

FlowRouter.route('/', {
  action() {
    BlazeLayout.render('layout', {
      content: 'home',
    });
  },
});

FlowRouter.route('/quickform', {
  action() {
    BlazeLayout.render('layout', {
      content: 'quickform',
    });
  },
});

FlowRouter.route('/fieldvalues', {
  action() {
    BlazeLayout.render('layout', {
      content: 'fieldvalues',
    });
  },
});

FlowRouter.route('/insertaf', {
  action() {
    BlazeLayout.render('layout', {
      content: 'insertaf',
    });
  },
});

FlowRouter.route('/updateaf', {
  action() {
    BlazeLayout.render('layout', {
      content: 'updateaf',
    });
  },
});

FlowRouter.route('/qfdetails', {
  action() {
    BlazeLayout.render('layout', {
      content: 'qfdetails',
    });
  },
});

FlowRouter.route('/types', {
  action() {
    BlazeLayout.render('layout', {
      content: 'types',
    });
  },
});

FlowRouter.route('/select', {
  action() {
    BlazeLayout.render('layout', {
      content: 'select',
    });
  },
});

FlowRouter.route('/update-each', {
  action() {
    BlazeLayout.render('layout', {
      content: 'updateEach',
    });
  },
});

FlowRouter.route('/updatepush', {
  action() {
    BlazeLayout.render('layout', {
      content: 'updatepush',
    });
  },
});

FlowRouter.route('/update-array-item', {
  action() {
    BlazeLayout.render('layout', {
      content: 'updateArrayItem',
    });
  },
});
