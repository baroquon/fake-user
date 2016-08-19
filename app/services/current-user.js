import Ember from 'ember';

export default Ember.Service.extend({
  init(){
    console.log('The current-user service has been initialized.');
  },
  userInfo: Ember.Object.create({
    id: 1,
    firstName: 'Brandon',
    lastName: 'Blaylock',
    email: 'brandon.blaylock@gmail.com',
    twitter: 'baroquon',
    github: 'baroquon'
  })
});
