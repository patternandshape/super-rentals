import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(news){
      if(confirm('Are you sure you want to delete this news snippet?')){
        this.sendAction('destroyNews', news);
      }
    }
  }
});
