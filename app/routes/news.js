import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('news');
  },
  actions: {
    destroyNews(news){
      news.destroyRecord();
      this.transitionTo('news');
    },
    save6(params){
      var newNews = this.store.createRecord('news', params);
      newNews.save();
      this.transitionTo('news');
    }
  }
});
