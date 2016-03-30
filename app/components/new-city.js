import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
  cityFormShow() {
    this.set('addNewCity', true);
  },

  save1() {
    var params = {
      city: this.get('city')
    };
    this.set('addNewCity', false);
    this.sendAction('save2', params);
  }
}
});
