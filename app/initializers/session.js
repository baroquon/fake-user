export function initialize(application) {
  application.inject('route', 'user', 'service:currentUser');
  application.inject('controller', 'user', 'service:currentUser');
  application.inject('model', 'user', 'service:currentUser');
}
export default {
  name: 'session',
  initialize
};
