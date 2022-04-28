Ext.define('MoviesAndSeries.view.home.MoviesViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.movies-viewmodel',
	data: {
		name: 'MyAppStudy',
		searchText: ''
	},
	stores: {
		items: {
            type: 'movies-store'
        }
	}

});
