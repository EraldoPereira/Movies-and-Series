Ext.define('MoviesAndSeries.view.movies.details.DetailsViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.movies-detailsviewcontroller',

	init: function () {
		const me = this;
		const viewModel = me.getViewModel();
		const record = viewModel.get('record');
		viewModel.set('genres', me.prepareGenres(record.genres));
		//me.prepareStore();
	},
	prepareStore: function () {
		const me = this;
		const viewModel = me.getViewModel();
		const record = viewModel.get('record');
		const store = viewModel.getStore('genres');
		const ttt = me.prepareGenres(record.genres);
		debugger
		store.loadData(record.genres, true);
	},
	prepareGenres: function (genres) {
		let formatedGenres = '';
		genres.map((item, index) => {
			formatedGenres = index === (genres.length - 1) ? `${formatedGenres}${item.name}` : `${item.name}, ${formatedGenres}`
		})
		return formatedGenres;
	}

});
