Apps.VendorsRoute = Ember.Route.extend({
  model:function (){
    return this.store.find('lot');
  }
});
