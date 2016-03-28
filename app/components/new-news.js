import Ember from 'ember';

export default Ember.Component.extend({
  addNewNews: false,
  actions: {
    newsFormShow(){
      this.set('addNewNews', true);
    },
    save4(){
      var params = {
        title: this.get('title'),
        body: this.get('body'),
      };
      this.set('addNewNews', false);
      this.sendAction('save5', params);
    }
  }
});
