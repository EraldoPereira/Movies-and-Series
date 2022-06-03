Ext.define('MoviesAndSeries.Application', {
	extend: 'Ext.app.Application',
	name: 'MoviesAndSeries',
	requires: [
		'MoviesAndSeries.*',
		'Ext.Img'
	],
	defaultToken: 'movies',

	removeSplash: function () {
		Ext.getBody().removeCls('launching')
		var elem = document.getElementById("splash")
		elem.parentNode.removeChild(elem)
	},

	launch: function () {
		this.removeSplash()
		var whichView = 'mainview'
		Ext.Viewport.add([{xtype: whichView}])
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
