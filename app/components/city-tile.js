import Ember from 'ember';

export default Ember.Component.extend({
  fullLocation: Ember.computed('city.name', 'city.country', function(){
    return this.get('city.name') + ', ' + this.get('city.country');
  }),
  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      var city = params.city;
      city.get('rentals').addObject(newRental);
      newRental.save().then(function() {
        return city.save();
      });
      this.transitionTo('city', params.city);
    },
    delete(city) {
      if (confirm('Are you sure you want to delete this city?')){
        var rental_deletions = city.get('rentals').map(function(rental) {
        return rental.destroyRecord();
        });
        Ember.RSVP.all(rental_deletions).then(function(){
          return city.destroyRecord();
        });
        this.transitionTo('index');
      }
    }
  }
});
