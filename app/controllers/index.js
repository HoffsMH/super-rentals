import Ember from 'ember';
// So it seems like a controller is capable and inserting things into a template's context just like
// routes, helpers, and components
export default Ember.Controller.extend({
  filteredList: null,
  actions: {
    autoComplete(param) {
      if (param !== '') {
        // where the helll are we getting 'store' from. It seems that this "store" and the ember-data that it talks to
        // seems to be implicitly included everywhere
        // we are using this.get and this.set to update and read properies of the component that we are currently in but
        // this.get('store') seems to pull it out of thin air sooo...
        // also 'store' seems to be a synonym for backend if we are in production
        this.get('store').query('rental', { city: param }).then((result) => this.set('filteredList', result));
      } else {
        this.set('filteredList', null);
      }
    },
    search(param) {
      // later on here we are using this.set on another property that is not defined in this file
      // the 'model' which is defined in the route handler
      // it appears this.get and this.set work on a templates context as a whole?
      if (param !== '') {
        this.store.query('rental', { city: param }).then((result) => this.set('model', result));
      } else {
        this.get('store').findAll('rental').then((result) => this.set('model', result));
      }
    }
  }
});
