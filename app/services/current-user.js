import Ember from 'ember';

export default Ember.Service.extend({
  messagesRemaining: 10,
  userInfo: Ember.Object.create({
    id: 1,
    firstName: 'Brandon',
    lastName: 'Blaylock',
    email: 'brandon.blaylock@gmail.com',
    twitter: 'baroquon',
    github: 'baroquon'
  }),
  decrementMessagesRemaining(){
    if(this.get('messagesRemaining') > 0){
      this.decrementProperty('messagesRemaining');
      return {
        success: true,
        message: `You have ${this.get('messagesRemaining')} messages remaining.`
      };
    } else {
      return {
        success: false,
        message: `Your are out of messages`
      };
    }
  }
});
