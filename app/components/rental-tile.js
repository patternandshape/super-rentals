import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    delete(rental){
      if (confirm('Are you sure you want to delete this rental?')){
        this.sendAction('destroyRental', rental);
      }
    },
    imageShow: function(){
      this.set('isImageShowing', true);
    },
    imageHide: function(){
      this.set('isImageShowing', false);
    }
  }
});
