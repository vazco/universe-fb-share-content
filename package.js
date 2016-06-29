Package.describe({
    name: 'universe:fb-share-content',
    version: '0.1.0',
    // Brief, one-line summary of the package.
    summary: 'Publish post to timeline (works for user and facebook pages)',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/vazco/universe-fb-share-content',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.3.2.4');
    api.use(['ecmascript', 'webapp', 'check', 'cristo:auto-install-npm@0.0.5']);
    api.addFiles('autoInstall.js', 'server');
    api.mainModule('fb-share-content.js');
});
