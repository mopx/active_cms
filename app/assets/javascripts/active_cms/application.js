// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//= require tinymce-jquery


tinyMCE.init({
  mode : "specific_textareas",
  editor_selector: 'tinymce',
  theme : "advanced",
  language : "de",
  theme_advanced_toolbar_location : "top",
  theme_advanced_buttons1 : "bold,italic,underline,separator,bullist,numlist,separator,undo,redo,separator,cleanup,removeformat", // "separator,insertdate,inserttime,preview,zoom,separator,forecolor,backcolor",
  theme_advanced_buttons2 : "",
  theme_advanced_buttons3 : "", //hr,removeformat,visualaid,separator,sub,sup,separator,charmap",
  constrain_menus : true
});