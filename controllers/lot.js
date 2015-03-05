Apps.LotController = Ember.ArrayController.extend({
  actions: {
    save: function(){
      var newLots = this.store.createRecord('lot', {
        name:this.get('lotName')
      });
      this.set('lotName', null);
      newLots.save();
      this.transitionToRoute('lot');
    }
  }
});
