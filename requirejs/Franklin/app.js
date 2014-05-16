require.config({
  paths: {
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min",
    "underscore": "lib/underscore",
  }
});

require(['lib/modules/template'], function(template) {
  template.showName("Jack");
});