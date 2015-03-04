Apps.ItemDetailsRoute = Ember.Route.extend({
  model:function(params) {
    return this.food.item.find("itemDetails", params.bidNumber);
  }
});
