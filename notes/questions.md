### Pressing:
  * difference between:
    * ```{{#helper-name param1, param2}}``` and ```{{helper-name param1, param2}}```
  * There MUST be a pecking order for where a template looks in its context for certain things.
    * a list of things that I know are capable of inserting things into a template's  context
      * route handlers
      * all components
      * controllers
    * what order does it look at these things in?
    * what other things can insert things into a given template's context


### Non Pressing:

* why does ember choose to use bower over npm?
*  Do files in the public and vendor folder get  combined into dist when a build happens? ( Or do we need to manually copy files in vendor and pubic when we are putting our app in another app)

*  ``` ember -v``` yields 2.5.0 which matches up with the version listed on the docs but
```npm list -g --depth=0``` shows ember at 0.9.8
* what is the real difference between ```import x from y;``` and
```const x = require("y");```
  * looked through some stack overflow answers
  * when people are saying that you are using Node.js for modules are you using the es6 module standard or the an implementation of the commonJS standard?
  * which is ember using
  * http://www.2ality.com/2014/09/es6-modules-final.html
* difference between and when to use ```{{outlet}}``` and ```{{yield}}```
