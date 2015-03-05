Apps.VendorsController = Ember.ArrayController.extend({
  actions:{
    save: function(){
      if (this.get('url') === undefined) {
        url = "http://cdn.vectorstock.com/i/composite/54,85/office-stamp-pending-vector-5485.jpg";
      } else {
        url = this.get('url')
      }

      var newVendor = this.store.createRecord('home',{
        vendor: this.get('vendorName'),
        lot: this.get('lotName'),
        item: [{
          description: this.get('description'),
          price: this.get('price'),
          story: this.get('story'),
          year: this.get('year'),
          image: url
        }]
      });
      newVendor.save();
      this.transitionToRoute('home');
    }
  }
});
