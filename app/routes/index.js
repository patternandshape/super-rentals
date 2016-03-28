import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('rental');
  },
  actions: {
    save6(params){
      var newNews = this.store.createRecord('news', params);
      newNews.save();
      this.transitionTo('index');
    },
    destroyNews(news){
      news.destroyRecord();
      this.transitionTo('index');
    },
    save3(params){
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    destroyRental(rental){
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
