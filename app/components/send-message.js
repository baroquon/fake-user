import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  actions: {
    sendMessage(messageText){
      if(Ember.isPresent(messageText)){
        let sendMessage = this.get('currentUser').decrementMessagesRemaining();
        if(sendMessage.success){
          this.set('messageText', '');
        }
        this.set('notice', sendMessage.message);
      } else {
        this.set('notice', 'You should really type a message before you send one.')
      }
    }
  }
});
