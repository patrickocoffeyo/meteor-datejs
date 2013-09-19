Package.describe({
  summary: "A JavaScript Date Library http://www.datejs.com"
});

Package.on_use(function (api) {
  api.add_files([
    'lib/date.js',
    ], 'client');
});
