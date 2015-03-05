Apps.Router.map(function(){
  this.resource('home', {path: "/"});
  this.resource('about');
  this.resource('itemDetails', {path: "itemDetails/:bidNumber"});
  this.resource('lot');
  this.resource('vendors')
});
