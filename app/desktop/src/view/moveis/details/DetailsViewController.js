Ext.define('MoviesAndSeries.view.movies.details.DetailsViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.movies-detailsviewcontroller',

	init: function () {
		const me = this;
		me.beforeShowMovies();
	},
	beforeShowMovies: function (action) {
		const me = this;
		Ext.Ajax.request({
			url: 'https://api.themoviedb.org/3/discover/movie?api_key=3b6fdd349800bb27c9346695cba65332&language=pt-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate',
			method: 'get',
			scope: me,
			success: me.beforeShowMoviesSuccess,
			failure: me.beforeShowMoviesFaliure
		})
	},
	beforeShowMoviesSuccess: function (response, options, action) {
		const me = this;
		const viewModel = me.getViewModel();
		const data = Ext.decode(response.responseText, true);
		viewModel.set({ items: data.results });
		const store = viewModel.getStore('items');
		store.loadData(viewModel.get('items'), true);
	},
	beforeShowMoviesFaliure: function (response, options, action) {
		console.error(response);
	},
	onDataviewTap: function (element, {record}, tes) {
		const me = this;
		me.getDetails(record.id,  'pt-BR', '3b6fdd349800bb27c9346695cba65332');
	},
	onChangeLabelSearch: function ({rawValue}, e, eOpts) {
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
	},
	getDetails: function (movieId, language, apiKey) {
		const me = this;
		Ext.Ajax.request({
			url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=${language}`,
			method: 'get',
			scope: me,
			success: me.getDetailsSuccess,
			failure: me.getDetailsFaliure
		})
	},
	getDetailsSuccess: function (response, options, action) {
		const me = this;
		const viewModel = me.getViewModel();
		const data = Ext.decode(response.responseText, true);
		viewModel.set({ items: data.results });
		const store = viewModel.getStore('items');
		store.loadData(viewModel.get('items'), false);
	},
	getDetailsFaliure: function (response, options, action) {
		console.error(response);
	}

});
