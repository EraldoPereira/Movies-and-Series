Ext.define('MoviesAndSeries.view.series.SeriesViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.series-viewmodel',
	data: {
		name: 'MyAppStudy',
		searchText: ''
	},
	stores: {
		items: {
            type: 'series-store'
        }
	}

});
