Apps.ItemDetailsRoute = Ember.Route.extend({
  model:function(params) {
    return this.store.find("itemDetails", params.bidNumber);
  }
});
