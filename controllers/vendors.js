Apps.VendorsController = Ember.ArrayController.extend({
  actions:{
    save: function(){
      if (this.url === undefined) {
        url = "http://cdn.vectorstock.com/i/composite/54,85/office-stamp-pending-vector-5485.jpg";
      } else {
        url = this.url
      }

      food.addObject({
        vendor: this.vendorName,
        lot: this.lotName,
        item: [{
          description: this.description,
          price: this.price,
          story: this.story,
          year: this.year,
          image: url
        }]
      });
    }
  }
});
