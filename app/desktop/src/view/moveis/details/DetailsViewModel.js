Ext.define('MoviesAndSeries.view.movies.details.DetailsViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.movies-detailsiewmodel',
	data: {

	},
	stores: {
		items: {
            type: 'movies-store'
        }
	}

});
