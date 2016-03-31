import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
    // 2 promises
    cities: this.store.findAll('city'),
    rentals: this.store.findAll('rental')
  });
},

  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    saveCity(params){
      var newCity = this.store.createRecord('city', params);
      console.log(newCity);
      newCity.save();
      this.transitionTo('index');
    }
  }
});
