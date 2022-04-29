Ext.define('MoviesAndSeries.view.series.SeriesViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.series-viewcontroller',

	init: function () {
		const me = this;
		me.beforeShowSeries();
	},
	beforeShowSeries: function (action) {
		const me = this;
		Ext.Ajax.request({
			url: 'https://api.themoviedb.org/3/trending/tv/week?api_key=cba65332&language=en-US',
			method: 'get',
			scope: me,
			success: me.beforeShowSeriesSuccess,
			failure: me.beforeShowSeriesFaliure
		})
	},
	beforeShowSeriesSuccess: function (response, options, action) {
		const me = this;
		const viewModel = me.getViewModel();
		const data = Ext.decode(response.responseText, true);
		viewModel.set({ items: data.results });
		const store = viewModel.getStore('items');
		store.loadData(viewModel.get('items'), true);
	},
	beforeShowSeriesFaliure: function (response, options, action) {
		console.error(response);
	},
	onDataviewTap: function () {
		
	},
	onChangeLabelSearch: function ({rawValue}, e, eOpts) {
		const me = this;
		const viewModel = me.getViewModel();
		viewModel.set('searchText', rawValue);
	},
	onSearchSeries: function () {
		const me = this;
		const viewModel = me.getViewModel();
		const searchText = viewModel.get('searchText');
		Ext.Ajax.request({
			url: `https://api.themoviedb.org/3/search/tv?api_key=&language=en-US&page=1&query=${searchText}&include_adult=false`,
			method: 'get',
			scope: me,
			success: me.onSearchSeriesSuccess,
			failure: me.onSearchSeriesFaliure
		})

	},
	onSearchSeriesSuccess: function (response, options, action) {
		const me = this;
		const viewModel = me.getViewModel();
		const data = Ext.decode(response.responseText, true);
		viewModel.set({ items: data.results });
		const store = viewModel.getStore('items');
		store.loadData(viewModel.get('items'), false);
	},
	onSearchSeriesFaliure: function (response, options, action) {
		console.error(response);
	}

});
