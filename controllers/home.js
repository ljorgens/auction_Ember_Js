Apps.HomeController= Ember.ObjectController.extend({
  isShowing: false;
  actions: {
    show: function(){
      this.set('isShowing', true);
    },
    hide: function(){
      this.set('isShowing', false);
    }
  }
});
