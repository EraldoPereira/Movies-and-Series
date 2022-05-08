Ext.define('MoviesAndSeries.view.movies.details.DetailsViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.movies-detailsiewmodel',
	data: {
		genres: ''
	},
	stores: {
		items: {
			type: 'movies-store'
		},
		genres: {
			type: 'movies-genres-store'
		}
	},
	formulas: {
		runtime: function (get) {
			const runtime = get('record.runtime');
			const hour = Math.trunc(runtime / 60);
			const minute = runtime - hour * 60;
			return minute == 0 ? `${hour}h` : `${hour}h ${minute}m`;
		},
		posterPath: function (get) {
			const posterPath = get('record.poster_path');
			return `https://image.tmdb.org/t/p/original${posterPath}`;
		},
		releaseDateYear: function (get) {
			const date = get('record.release_date');
			return Ext.util.Format.date(date, 'Y');
		},
		releaseDate: function (get) {
			const date = get('record.release_date');
			return Ext.util.Format.date(date, 'd/m/Y');
		}
	}

});
