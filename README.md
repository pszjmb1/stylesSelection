stylesSelection
===============

Automatically change Meteor's css file from a selection.

Adding this package to your [Meteor](http://www.meteor.com/) application adds `jmbStyles` template to the client. This version comes with Thomas Park's Bootswatch open source Bootstrap themes. If you want to use different css files or themes then add your files to the folder /packages/stylesSelection/lib/public/css (note the file suffix should be "min.css"), and update the file packages/stylesSelection/jmbStyles.html. It also sets the Session variable 'cssFile'. 

Note also that if you are using a routing package (such as Iron-router), you should move the css files from /packages/stylesSelection/lib/public/css to your application's /public/css folder, and update packages/stylesSelection/jmbStyles.js accordingly. 

Installation
------------

```
mrt add stylesSelection
```
