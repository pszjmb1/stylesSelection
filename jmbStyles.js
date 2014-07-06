function changeStyle(newStyle){
  var currentCss = ($('[rel=stylesheet]')[0]);
  $(currentCss).remove();
  $('head').append('<link id="currentTheme" rel="stylesheet" href="/packages/stylesSelection/lib/public/css/' + newStyle + '.min.css" type="text/css" />');
  Session.set('cssFile', 'newStyle.min.css');
}

Template.jmbStyles.events({
  'change #jmbStyles': function(evt){
    changeStyle($(evt.target).val());
  }
});
