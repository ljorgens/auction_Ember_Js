Apps.HomeController = Ember.ArrayController.extend({
  itemController: 'homes'

});

Apps.HomesController= Ember.ObjectController.extend({
  isShowing: false,
  actions: {
    showHide: function(){
      if (this.isShowing) {
        this.set('isShowing', false);
      } else {
        this.set('isShowing', true);
      }
    }
  }
});
