so ember-data is kind of like the active record of ember
its just a layer of abstraction that goes over however ember is getting its data

ember mirage is like an api emulator that is for use in the dev and test environment.

It is unclear to me....:
  * how ```Ember.Route.store``` is connected to ember data automatically
  * what ```title: attr()``` or ```attr``` is actually doing as part of ember-data
  * when pluralizing of names is and should be done by the user ie ``` this.store("rental") ``` tells ember-data to make a get request to our api for ```/rentals```

Ok so the bit with
   ```
  {{#if isImageShowing}}
     <p><img src={{rental.image}} alt={{rental.type}} width="500"></p>
     <button {{action "imageHide"}}>Hide image</button>
  {{else}}
     <button {{action "imageShow"}}>Show image</button>
  {{/if}}
   ```

is reactive to the isImageShowing property of the ``` Ember.Component ```

if that properties value changes at any time we can count on the page updating because of that. This is a big shift in thinking from rails template where consequences like these are determined once and only once before being sent downrange to the browser.

##### First major shift in thinking:
Templates in ember are living and breathing. And are therefore more consequential than they are  in rails views.


---
I am still somewhat unsettled by the verbage

```<button {{action "imageShow"}}>Show image</button>```

* ``` action ``` here is ambiguous... how do I know that its on click. Do we use the word action on other dom elements?
* furthermore its ```action``` not ```#action``` which makes sense since its not a helper I guess. My real question is how did the identifier ```action``` make its way into the template context?

Ok wait we just made our own helper and we just called it with ```helper``` and not ```#helper``` what gives??

* Also: apparently when we call a helper from within a template we are implicitly calling it with an array. even if we only give one argument.

    * seems like we might be calling ```ourPropertyThatisActuallyAFunction.call(this, [arg1, arg2, arg3])```
    * this is called destructuring and its from es6 apparently

#### template context:

* it seems that with the pattern of using  "closure actions." its important to understand how the "lookup chain" of a templates context works.

#### Ok finished the tutorial from the docs

  * from here I think the next step is get a hold of some literature on testing ember apps in q unit
  * from there I need to come up with a quest to embark on .
    * Perhaps an admin panel for our rental application
