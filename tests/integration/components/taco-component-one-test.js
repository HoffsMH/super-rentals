import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('taco-component-one', 'Integration | Component | taco component one', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{taco-component-one}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#taco-component-one}}
      template block text
    {{/taco-component-one}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
