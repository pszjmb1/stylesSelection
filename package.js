Package.describe({
	summary: "Automatically change css file from a selection."
});

Package.on_use(function(api) {
	api.export('stylesSelection', 'client');
  api.use(['templating'], 'client');
	api.add_files(['jmbStyles.html', 'jmbStyles.js'], 'client');
});
