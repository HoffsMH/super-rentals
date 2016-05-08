so ember-data is kind of like the active record of ember
its just a layer of abstraction that goes over however ember is getting its data

ember mirage is like an api emulator that is for use in the dev and test environment.

It is unclear to me....:
  * how ```Ember.Route.store``` is connected to ember data automatically
  * what ```title: attr()``` or ```attr``` is actually doing as part of ember-data
  * when pluralizing of names is and should be done by the user ie ``` this.store("rental") ``` tells ember-data to make a get request to our api for ```/rentals```
  * 
