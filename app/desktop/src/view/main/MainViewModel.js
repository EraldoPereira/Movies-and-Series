Ext.define('MoviesAndSeries.view.main.MainViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.mainviewmodel',
	data: {
		name: 'MoviesAndSeries',
		navCollapsed:       false,
		navview_max_width:    300,
		navview_min_width:     44,
		topview_height:        75,
		headerview_height:     50,

	},
	formulas: {
		navview_width: function(get) {
			return get('navCollapsed') ? get('navview_min_width') : get('navview_max_width');
		}
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
