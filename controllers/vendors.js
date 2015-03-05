Apps.VendorsController = Ember.ArrayController.extend({
  actions:{
    save: function(){
      if ((this.get('url') === undefined) || (this.get('url') === "")) {
        url = "http://cdn.vectorstock.com/i/composite/54,85/office-stamp-pending-vector-5485.jpg";
      } else {
        url = this.get('url')
      }

      var item_id = function(){
        return this.store.get('length');
      }

      var newVendor = this.store.createRecord('home',{
        vendor: this.get('vendorName'),
        lot: this.get('lotName'),
        item: [{
          description: this.get('description'),
          price: this.get('price'),
          story: this.get('story'),
          id: item_id,
          year: this.get('year'),
          image: url
        }]
      });
      newVendor.save();
      this.set('vendorName', null);
      this.set('lotName', null);
      this.set('description', null);
      this.set('number', null);
      this.set('story', null);
      this.set('year', null);
      this.set('url');
      this.transitionToRoute('home');
    }
  }
});
