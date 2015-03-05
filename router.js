Apps.Router.map(function(){
  this.resource('home', {path: "/"});
  this.resource('about');
  this.resource('itemDetails', {path: "itemDetails/:home_id"});
  this.resource('lot');
  this.resource('vendors')
});
