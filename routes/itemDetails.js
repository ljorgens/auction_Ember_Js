Apps.ItemDetailsRoute = Ember.Route.extend({
  model:function(params) {
    return food.item.findBy("itemDetails", params.bidNumber);
  }
});
