import Ember from 'ember';

export default Ember.Component.extend({
  someProp: "first value",
  // computedProp: Ember.computed('someProp', function() {
  //   return this.get('someProp') + " taco";
  // }),

  baz: {foo: 'BLAMMO', bar: 'BLAZORZ'},

  computedProp: Ember.computed('baz.{foo, bar}', function() {
    return this.get('baz.foo') + ' ' + this.get('baz.bar');
  }),
  actions: {
      startTimer() {
        setInterval(this.get('actions.updateTimer').bind(this), 1000);
        return;
      },
      updateTimer() {
        this.set('someProp', new Date());
        return;
      }
  }
});
