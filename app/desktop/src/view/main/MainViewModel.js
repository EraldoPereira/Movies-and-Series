Ext.define('MoviesAndSeries.view.main.MainViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.mainviewmodel',
	data: {
		name: 'Movies And Series',
		navCollapsed:       false,
		topview_height:        75,
		headerview_height:     50,

	},
	stores: {
		menu: {
			type: "tree",
			proxy: {
				type: 'ajax',
				reader: 'json',
				url: 'resources/desktop/menu.json'
			},
			autoLoad: true
		}
	}
});
