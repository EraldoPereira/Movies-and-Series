Ext.define('MoviesAndSeries.view.movies.list.MoviesViewModel', {
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
