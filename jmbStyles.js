function changeStyle(newStyle){
  var currentCss = ($('[rel=stylesheet]')[0]);
  $(currentCss).remove();
  $('head').append('<link id="currentTheme" rel="stylesheet" href="css/' + newStyle + '.min.css" type="text/css" />');
}

Template.jmbStyles.events({
  'change #jmbStyles': function(evt){
    changeStyle($(evt.target).val());
  }
});
