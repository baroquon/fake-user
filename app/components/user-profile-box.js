import Ember from 'ember';
import md5 from 'md5';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  gravatarUrl: Ember.computed('email', 'size', function() {
    const email = this.get('currentUser.userInfo.email');

    return `http://www.gravatar.com/avatar/${md5(email)}?s=200`;
  })
});
