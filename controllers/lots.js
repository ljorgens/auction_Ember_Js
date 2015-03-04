Apps.LotsController = Ember.ArrayController.extend({
  actions: {
    save: function(){
      lot.addObject({name:this.lotName});
      this.set('lotName', null);
    }
  }
});
