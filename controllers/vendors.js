Apps.VendorsController = Ember.ArrayController.extend({
  actions:{
    save: function(){
      food.addObject({
        vendor: this.vendorName,
        lot: this.lotName,
        item: [{
          description: this.description,
          price: this.price,
          story: this.story,
          year: this.year,
          image: this.url
        }]
      });
    }
  }
});
