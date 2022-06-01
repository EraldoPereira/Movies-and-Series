Ext.define('MoviesAndSeries.view.movies.list.MoviesViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.movies-viewcontroller',
	init: function () {
		const me = this;
		me.setUp();
	},
	setUp: function () {
		const me = this;
		const viewModel = me.getViewModel();
		const store = viewModel.getStore('items');
		store.loadData(viewModel.get('record.results'), false);
	},
	onDataviewTap: function (element, { record }, tes) {
		const me = this;
		me.redirectTo(`movies/details/${record.id}`);
	},
	onChangeLabelSearch: function ({ rawValue }, e, eOpts) {
		const me = this;
		const viewModel = me.getViewModel();
		viewModel.set('searchText', rawValue);
	},
	onSearchMovie: function () {
		const me = this;
		const viewModel = me.getViewModel();
		const searchText = viewModel.get('searchText');
		Ext.Ajax.request({
			url: `https://api.themoviedb.org/3/search/movie?api_key=3b6fdd349800bb27c9346695cba65332&language=en-US&query=${searchText}&page=1&include_adult=false`,
			method: 'get',
			scope: me,
			success: me.onSearchMovieSuccess,
			failure: me.onSearchMovieFaliure
		})

	},
	onSearchMovieSuccess: function (response, options, action) {
		const me = this;
		const viewModel = me.getViewModel();
		const data = Ext.decode(response.responseText, true);
		viewModel.set({ items: data.results });
		const store = viewModel.getStore('items');
		store.loadData(viewModel.get('items'), false);
	},
	onSearchMovieFaliure: function (response, options, action) {
		console.error(response);
	}


});
