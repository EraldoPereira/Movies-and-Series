Ext.define('MoviesAndSeries.view.main.MainViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.mainviewcontroller',

	routes: {
		'movies/details/:movieId': {
			action: 'showMoviesDetails',
			before: 'beforeShowMoviesDetails'
		},
		'movies': {
			action: 'showMovies',
			before: 'beforeShowMovies'
		},
		/* ':viewType': {
			action: 'activateViewByRoute',
			conditions: {
				':viewType': '(.*)'
			}
		} */
	},

	updateView: function (options) {
		const me = this;
		const centerView = me.lookup('centerView');
		centerView.removeAll();
		if ( typeof options !== 'string' ) {
			try {
				const newView = centerView.add(options.viewModel ? {
					xtype: options.viewType,
					viewModel: options.viewModel
				} : {	
					xtype: options.viewType,
				})
			} catch (ex) {
				console.error(ex);
			}
			return;
		}
		centerView.add({
			xtype: options
		});
	},

	/* activateViewByRoute: function(viewId){
		if(viewId.match('/')) {return}
		const centerView = this.lookup('centerView');
		centerView.removeAll();
		const item = centerView.add({
			xtype: viewId
		});
		centerView.setActiveItem(item); 
	}, */

	showMovies: function () {
		const me = this;
		const viewModel = me.getViewModel();
		me.updateView({
			viewType: 'moviesview',
			viewModel: {
				type: 'movies-viewmodel',
				data: {
					record: viewModel.get('record')
				}
			}
		});
	},
	beforeShowMovies: function (action) {
		const me = this;
		Ext.Ajax.request({
			//url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Ext.manifest.config.apiKey}&language=pt-BR`,
			url: `https://api.themoviedb.org/3/trending/movie/week?api_key=${Ext.manifest.config.apiKey}&language=pt-BR`,
			method: 'get',
			scope: me,
			success: Ext.bind(me.beforeShowMoviesSuccess, me, [action], true),
			failure: Ext.bind(me.beforeShowMoviesFaliure, me, [action], true)
		})
	},
	beforeShowMoviesSuccess: function (response, options, action) {
		const me = this;
		const data = Ext.decode(response.responseText, true);
		me.getViewModel().set({
			record: data
		});
		action.resume();
	},
	beforeShowMoviesFaliure: function (response, options, action) {
		console.error(response);
		action.stop();
	},
	showMoviesDetails: function () {
		const me = this;
		const viewModel = me.getViewModel();
		me.updateView({
			viewType: 'detailsview',
			viewModel: {
				type: 'movies-detailsiewmodel',
				data: {
					record: viewModel.get('record')
				}
			}
		});
	},
	beforeShowMoviesDetails: function (movieId, action) {
		const me = this;
		Ext.Ajax.request({
			url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Ext.manifest.config.apiKey}&language=pt-BR`,
			method: 'get',
			scope: me,
			success: Ext.bind(me.beforeShowMoviesDetailsSuccess, me, [action, movieId], true),
			failure: Ext.bind(me.beforeShowMoviesDetailsFaliure, me, [action, movieId], true)
		})
	},
	beforeShowMoviesDetailsSuccess: function (response, options, action) {
		const me = this;
		const data = Ext.decode(response.responseText, true);
		me.getViewModel().set({
			record: data
		});
		action.resume();
	},
	beforeShowMoviesDetailsFaliure: function (response, options, action) {
		console.error(response);
		action.stop();
	}
});
